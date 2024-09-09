import { BrowserRouter } from "react-router-dom";
import { SignupPage } from "../components/LoginPage/SignupPage";
import { IntlProvider } from "../translation/IntlProvider";

describe("<SignupPage />", () => {
  it("renders", () => {
    cy.mount(
      <IntlProvider>
        <BrowserRouter>
          <SignupPage onSubmit={console.log} loading={false} />
        </BrowserRouter>
      </IntlProvider>
    );
  });
});
