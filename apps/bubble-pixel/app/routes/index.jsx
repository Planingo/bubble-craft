import { LoginPage } from "@planingo/design-system";
import { useFetcher } from '@remix-run/react'
import { json, redirect } from '@remix-run/node'
import { useSetUser } from "../components/user-context";
import { useActionData } from "@remix-run/react";

export async function action({ request }) {
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

  if (data) return redirect(`/students/`)
  else return json({errors})
}

export default function Index() {
  const fetcher = useFetcher();

  console.log('fetcher.data : ', fetcher)

  // const setUser = useSetUser();

  // setUser(fetcher.data)

  // setUser(user) pour l'utiliser

  // Et tu peux récuperer n'importe où le user comme ça : const user = useUser()

  return (
    <LoginPage
      onSubmit={({email, password}) => fetcher.submit({ email, password }, { method: "post" })}
    />
  );
}
