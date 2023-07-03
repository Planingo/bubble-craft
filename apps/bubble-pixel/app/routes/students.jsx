import { GlobalPage, Icon } from "@planingo/design-system";
import { useContext } from "react";

// export async function action({ request }) {
//   const body = await request.formData();
//   const response = await fetch('https://hogwarts-school.caprover.cocaud.dev/v1/graphql', {
//     method: "POST",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify({
//       query: `query login($email: String!, $password: String!) {
//         login(email: $email , password: $password) {
//           accountId
//           token
//         }
//       }`,
//       variables: {
//         email: body.get("email"),
//         password: body.get("password")
//       }
//     })
//   })

//   const { data, errors } = await response.json()
  
//   if (data) return redirect(`/students/`)
//   else return json({errors})
// }

export default function Index() {
  return (
    <div>
      <GlobalPage
        navigation={{
          roles: [],
        }}
        header={{
          placeholder: "Recherche",
          isRefinementList: true,
          refinementList: {
            isGrid: true,
            firstActionText: "ajouter un truc",
            setIsGrid: console.log,
            FirstActionIcon: Icon.UserOutlined,
            FirstForm: () => null,
            onFirstAction: console.log,
            firstActioning: console.log,
            secondActionText: "editer un truc",
            SecondActionIcon: Icon.UserOutlined,
            SecondForm: () => null,
            onSecondAction: console.log,
            secondActioning: console.log,
            AddCalendar: () =>  null
          },
        }}
      />
    </div>
  );
}
