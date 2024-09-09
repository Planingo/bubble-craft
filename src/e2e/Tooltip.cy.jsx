import { Tooltip } from "../components/Tooltip/Tooltip";

describe("<Tooltip />", () => {
  it("renders", () => {
    cy.mount(<Tooltip title="C'est le prénom et le nom">Anne DUPUIS</Tooltip>);
  });
});
