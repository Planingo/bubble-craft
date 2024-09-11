import { BrowserRouter } from "react-router-dom";
import { Roles } from "../components";
import { Navigation } from "../components/Navigation/Navigation";
import { IntlProvider } from "../translation/IntlProvider";

describe("<Navigation />", () => {
  it("renders", () => {
    cy.mount(
      <IntlProvider>
        <BrowserRouter>
          <Navigation roles={[Roles.PLANING_KEEPER]} />
        </BrowserRouter>
      </IntlProvider>,
    );
  });
});
