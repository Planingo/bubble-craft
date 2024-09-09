import { Message } from "../components/Message/Message";

describe("<Message />", () => {
  it("renders", () => {
    cy.mount(<Message />);
  });
});
