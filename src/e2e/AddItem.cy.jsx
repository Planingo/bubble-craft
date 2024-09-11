import { AddItem } from "../components/AddItem/AddItem";
import { IntlProvider } from "../translation/IntlProvider";

describe.skip("<AddItem />", () => {
  it("renders", () => {
    cy.mount(
      <IntlProvider>
        <AddItem />
      </IntlProvider>,
    );
  });
});
