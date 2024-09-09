import { CompanyForm } from "../components/AddItem/CompanyForm";

describe("<CompanyForm />", () => {
  it("renders", () => {
    cy.mount(<CompanyForm onSubmit={console.log} />);
  });
});
