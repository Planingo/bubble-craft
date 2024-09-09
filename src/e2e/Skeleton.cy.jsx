import { Skeleton } from "../components/Skeleton/Skeleton";

describe("<Skeleton />", () => {
  it("renders", () => {
    cy.mount(<Skeleton />);
  });
});
