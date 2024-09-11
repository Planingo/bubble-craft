import { Form } from "antd";
import { BrowserRouter } from "react-router-dom";
import { Input } from "../components";
import { GlobalPage } from "../components/GlobalPage/GlobalPage";
import { UserOutlined } from "../components/Icon/icon";
import { IntlProvider } from "../translation/IntlProvider";

describe("<GlobalPage />", () => {
  it("renders", () => {
    cy.mount(
      <IntlProvider>
        <BrowserRouter>
          <GlobalPage
            header={{
              isRefinementList: true,
              placeholder: "Rechercher",
              refinementDetails: {
                firstActionText: "ajouter un truc",
                setIsGrid: console.log,
                FirstActionIcon: UserOutlined,
                FirstForm: (
                  <Form
                    onValuesChange={(values) => console.log(values)}
                    layout="vertical"
                  >
                    <Form.Item
                      name="lastName"
                      label="Nom"
                      rules={[
                        {
                          required: true,
                          message: "Merci de renseigner le nom",
                        },
                      ]}
                    >
                      <Input placeholder="Potter" />
                    </Form.Item>
                  </Form>
                ),
                onFirstAction: console.log,
                firstActioning: console.log,
                secondActionText: "editer un truc",
                SecondActionIcon: UserOutlined,
                SecondForm: (
                  <Form
                    onValuesChange={(values) => console.log(values)}
                    layout="vertical"
                  >
                    <Form.Item
                      name="lastName"
                      label="Nom"
                      rules={[
                        {
                          required: true,
                          message: "Merci de renseigner le nom",
                        },
                      ]}
                    >
                      <Input placeholder="Potter" />
                    </Form.Item>
                  </Form>
                ),
                onSecondAction: console.log,
                secondActioning: console.log,
              },
              refinementList: {
                firstActionText: "ajouter un truc",
                setIsGrid: console.log,
                FirstActionIcon: UserOutlined,
                FirstForm: (
                  <Form
                    onValuesChange={(values) => console.log(values)}
                    layout="vertical"
                  >
                    <Form.Item
                      name="lastName"
                      label="Nom"
                      rules={[
                        {
                          required: true,
                          message: "Merci de renseigner le nom",
                        },
                      ]}
                    >
                      <Input placeholder="Potter" />
                    </Form.Item>
                  </Form>
                ),
                onFirstAction: console.log,
                firstActioning: console.log,
                secondActionText: "editer un truc",
                SecondActionIcon: UserOutlined,
                SecondForm: (
                  <Form
                    onValuesChange={(values) => console.log(values)}
                    layout="vertical"
                  >
                    <Form.Item
                      name="lastName"
                      label="Nom"
                      rules={[
                        {
                          required: true,
                          message: "Merci de renseigner le nom",
                        },
                      ]}
                    >
                      <Input placeholder="Potter" />
                    </Form.Item>
                  </Form>
                ),
                onSecondAction: console.log,
                secondActioning: console.log,
              },
            }}
            navigation={{
              roles: ["roles.planing.keeper"],
            }}
          />
        </BrowserRouter>
      </IntlProvider>,
    );
  });
});
