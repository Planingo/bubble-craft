import { Form } from "antd";

import { BrowserRouter } from "react-router-dom";
import { Input } from "../components";
import { UserOutlined } from "../components/Icon/icon";
import { RefinementDetails } from "../components/RefinementDetails/RefinementDetails";
import { IntlProvider } from "../translation/IntlProvider";

describe("<RefinementDetails />", () => {
  it("renders", () => {
    cy.mount(
      <IntlProvider>
        <BrowserRouter>
          <RefinementDetails
            firstActionText="ajouter un truc"
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
      </IntlProvider>
    );
  });
});
