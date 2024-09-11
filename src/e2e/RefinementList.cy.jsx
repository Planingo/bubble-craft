import { Form } from "antd";

import { BrowserRouter } from "react-router-dom";
import { Input } from "../components";
import { UserOutlined } from "../components/Icon/icon";
import { RefinementList } from "../components/RefinementList/RefinementList";
import { IntlProvider } from "../translation/IntlProvider";

describe("<RefinementList />", () => {
  it("renders", () => {
    cy.mount(
      <IntlProvider>
        <BrowserRouter>
          <RefinementList
            isGrid={true}
            firstActionText="ajouter un truc"
            setIsGrid={console.log}
            FirstActionIcon={UserOutlined}
            FirstForm={
              <Form
                onValuesChange={(values) => console.log(values)}
                layout="vertical"
              >
                <Form.Item
                  name="lastName"
                  label="Nom"
                  rules={[
                    { required: true, message: "Merci de renseigner le nom" },
                  ]}
                >
                  <Input placeholder="Potter" />
                </Form.Item>
              </Form>
            }
            onFirstAction={console.log}
            firstActioning={console.log}
            secondActionText="editer un truc"
            SecondActionIcon={UserOutlined}
            SecondForm={
              <Form
                onValuesChange={(values) => console.log(values)}
                layout="vertical"
              >
                <Form.Item
                  name="lastName"
                  label="Nom"
                  rules={[
                    { required: true, message: "Merci de renseigner le nom" },
                  ]}
                >
                  <Input placeholder="Potter" />
                </Form.Item>
              </Form>
            }
            onSecondAction={console.log}
            secondActioning={console.log}
          />
        </BrowserRouter>
      </IntlProvider>,
    );
  });
});
