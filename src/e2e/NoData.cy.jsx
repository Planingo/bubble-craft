import { Form } from "antd";

import { Input } from "../components";
import { NoData } from "../components/NoData/NoData";
import { IntlProvider } from "../translation/IntlProvider";

describe("<NoData />", () => {
  it("renders", () => {
    cy.mount(
      <IntlProvider>
        <NoData
          description="C'est vide ici !"
          title="Ajouter une lesson"
          cta="Ajouter une lesson"
          Add={
            <Form
              name="Formulaire lesson"
              onValuesChange={console.log}
              layout="vertical"
              requiredMark
            >
              <Form.Item
                name="name"
                label="Nom"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Form>
          }
        />
      </IntlProvider>,
    );
  });
});
