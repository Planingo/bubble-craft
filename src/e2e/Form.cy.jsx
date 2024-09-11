import { Form } from "../components/Form/Form";

describe.skip("<Form />", () => {
  it("renders", () => {
    cy.mount(<Form onSubmit={console.log} />);
  });
});
