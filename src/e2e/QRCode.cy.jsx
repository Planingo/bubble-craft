import { QRCode } from "../components/QRCode/QRCode";

describe("<QRCode />", () => {
  it("renders", () => {
    cy.mount(<QRCode />);
  });
});
