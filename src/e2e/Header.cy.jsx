import { BrowserRouter } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { IntlProvider } from "../translation/IntlProvider";

describe("<Header />", () => {
  it("renders", () => {
    cy.mount(
      <IntlProvider>
        <BrowserRouter>
          <Header
            placeholder="Rechercher"
            isRefinementList={true}
            refinementList={null}
            refinementDetails={null}
          />
        </BrowserRouter>
      </IntlProvider>,
    );
  });
});
