import { BrowserRouter } from "react-router-dom";
import { LoginPage } from "../components/LoginPage/LoginPage";
import { IntlProvider } from "../translation/IntlProvider";

describe("<LoginPage />", () => {
  it("renders", () => {
    cy.mount(
      <IntlProvider>
        <BrowserRouter>
          <LoginPage onSubmit={console.log} loading={false} />
        </BrowserRouter>
      </IntlProvider>
    );
  });
});
