import { SkeletonImage } from "../components/Skeleton/SkeletonImage";

describe("<SkeletonImage />", () => {
  it("renders", () => {
    cy.mount(<SkeletonImage />);
  });
});
