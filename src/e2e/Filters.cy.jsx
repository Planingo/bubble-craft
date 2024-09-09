import { Filters } from "../components/Filters/Filters";
import { IntlProvider } from "../translation/IntlProvider";

describe("<Filters />", () => {
  it("renders", () => {
    cy.mount(
      <IntlProvider>
        <Filters count={{ id: "students", count: 2 }} />
      </IntlProvider>
    );
  });
});
