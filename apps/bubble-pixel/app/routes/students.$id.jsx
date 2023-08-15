import { CancelIcon, Card, CheckIcon, CloudUploadOutlined, DeleteOutlined, Details, DownloadOutlined, GlobalPage, Grid, Icon, List, ListStudent, Tag } from "@planingo/design-system";
import { useLoaderData } from "@remix-run/react";
import { getSession } from "../sessions";
import { json } from '@remix-run/node'
import { useState } from "react";
import packageJson from '../../package.json'

export async function loader({ request, params }) {
  const session = await getSession(
    request.headers.get("Cookie")
  );

  const response = await fetch('https://hogwarts-school.caprover.cocaud.dev/v1/graphql', {
    method: "POST",
    headers: { "content-type": "application/json", "Authorization": `Bearer ${session.get("account").token}` },
    body: JSON.stringify({
      query: `query roles($accountId: uuid!, $studentId: uuid!) {
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
        student_by_pk(id: $studentId) {
          firstName
          id
          lastName
          student_constraint {
            constraints
            id
          }
          pathway {
            id
            name
          }
          calendars {
            id
            period_of_training {
              id
              start
              end
            }
            version
          }
          apprenticeships {
            id
            company {
              id
              name
            }
          }
        }
      }`,
      variables: {
        accountId: session.get("account").accountId,
        studentId: params.id,
      }
    })
  })

  const { data, errors } = await response.json()
  
  if (data) return json(data)
  else return json({errors})
}

export default function Index() {
  const {account, student_by_pk} = useLoaderData()

  console.log(student_by_pk)

  return (
    <div>
      <GlobalPage
        navigation={{
          roles: account[0].roles.map(role => `roles.${role.role.name}`),
          email: account[0].email,
        }}
        footer={`bubble-pixel v.${packageJson.version}`}
        header={{
          isRefinementList: false,
          refinementDetails: {
            backTo: "students/",
            firstActionText: "app.edit.student",
            FirstActionIcon: Icon.UserOutlined,
            FirstForm: () => null,
            onFirstAction: console.log,
            firstActioning: console.log,
            secondActionText: "app.edit.constraints",
            SecondActionIcon: Icon.UserOutlined,
            SecondForm: () => null,
            onSecondAction: console.log,
            secondActioning: console.log,
            AddCalendar: () =>  null,
            info: {
              img: {
                alt: `${student_by_pk.firstName} ${student_by_pk.lastName}`,
                src: `https://avatars.bugsyaya.dev/50/${student_by_pk.id}`,
              },
              title: `${student_by_pk.firstName} ${student_by_pk.lastName}`,
              tags: [{link: `/pathways/${student_by_pk.pathway.id}`, tag: student_by_pk.pathway.name}],
            }
          },
        }}
      >
        <Details constraints={student_by_pk.student_constraint}/>
      </GlobalPage>
    </div>
  );
}
