import { BrowserRouter } from "react-router-dom";
import { ResetPage } from "../components/LoginPage/ResetPage";
import { IntlProvider } from "../translation/IntlProvider";

describe("<ResetPage />", () => {
  it("renders", () => {
    cy.mount(
      <IntlProvider>
        <BrowserRouter>
          <ResetPage onSubmit={console.log} loading={false} />
        </BrowserRouter>
      </IntlProvider>,
    );
  });
});
