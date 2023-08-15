import { Card, GlobalPage, Grid, Icon, ListLesson, ListProfessor } from "@planingo/design-system";
import { useLoaderData } from "@remix-run/react";
import { getSession } from "../sessions";
import { json } from '@remix-run/node'
import { useState } from "react";
import packageJson from '../../package.json'

export async function loader({ request }) {
  const session = await getSession(
    request.headers.get("Cookie")
  );

  const response = await fetch('https://hogwarts-school.caprover.cocaud.dev/v1/graphql', {
    method: "POST",
    headers: { "content-type": "application/json", "Authorization": `Bearer ${session.get("account").token}` },
    body: JSON.stringify({
      query: `query roles($accountId: uuid!) {
        account(where: {id: {_eq: $accountId}}) {
          email
          id
          roles {
            id
            role {
              name
              id
            }
          }
        }
        lesson(order_by: {name: asc}) {
          id
          name
          description
        }
      }`,
      variables: {
        accountId: session.get("account").accountId
      }
    })
  })

  const { data, errors } = await response.json()
  
  if (data) return json(data)
  else return json({errors})
}

export default function Index() {
  const [isGrid, setIsGrid] = useState(false)
  const {account, lesson} = useLoaderData()

  return (
    <div>
      <GlobalPage
        navigation={{
          roles: account[0].roles.map(role => `roles.${role.role.name}`),
          email: account[0].email,
        }}
        footer={`bubble-pixel v.${packageJson.version}`}
        header={{
          placeholder: "Recherche",
          isRefinementList: true,
          refinementList: {
            isGrid: isGrid,
            firstActionText: "app.add.lesson",
            setIsGrid: () => setIsGrid(!isGrid),
            FirstActionIcon: Icon.UserOutlined,
            FirstForm: () => null,
            onFirstAction: console.log,
            firstActioning: console.log,
            secondActionText: "app.add.calendar",
            SecondActionIcon: Icon.UserOutlined,
            SecondForm: () => null,
            onSecondAction: console.log,
            secondActioning: console.log,
            AddCalendar: () =>  null
          },
        }}
      >
        {isGrid ? <Grid>{lesson.map(l => <Card key={l.id} title={`${l.name}`} />)}</Grid> :
            <ListLesson data={lesson}/>
        }
      </GlobalPage>
    </div>
  );
}
