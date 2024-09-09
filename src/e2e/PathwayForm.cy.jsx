import { PathwayForm } from "../components/AddItem/PathwayForm";
import { IntlProvider } from "../translation/IntlProvider";

describe("<PathwayForm />", () => {
  it("renders", () => {
    cy.mount(
      <IntlProvider>
        <PathwayForm onSubmit={console.log} />
      </IntlProvider>
    );
  });
});
