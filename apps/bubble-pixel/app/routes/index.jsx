import { LoginPage } from "@planingo/design-system";
import { useFetcher, useNavigate } from '@remix-run/react'
import { json } from '@remix-run/node'
import { useSetUser } from "../components/user-context";
import { useEffect } from "react";
import { commitSession, getSession } from "../sessions";

export async function action({ request }) {
  const session = await getSession(
    request.headers.get("Cookie")
  );

  const body = await request.formData();
  const response = await fetch('https://hogwarts-school.caprover.cocaud.dev/v1/graphql', {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      query: `query login($email: String!, $password: String!) {
        login(email: $email , password: $password) {
          accountId
          token
        }
      }`,
      variables: {
        email: body.get("email"),
        password: body.get("password")
      }
    })
  })

  const { data, errors } = await response.json()

  if (data) {
    session.set("account", data.login)
    return json(data.login, {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    })
  } else return json({errors})
}

export default function Index() {
  const fetcher = useFetcher();
  const setUser = useSetUser();
  const navigate = useNavigate();

  useEffect(() => {
    if(fetcher.data && !fetcher.data.errors) {
      setUser(fetcher.data)
      navigate('/students/')
    }
  }, [fetcher.data])

  return (
    <LoginPage
      loading={fetcher.state === "submitting"}
      onSubmit={({email, password}) => fetcher.submit({ email, password }, { method: "post" })}
    />
  );
}
