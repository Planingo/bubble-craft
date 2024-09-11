import { RoomForm } from "../components/AddItem/RoomForm";

describe("<RoomForm />", () => {
  it("renders", () => {
    cy.mount(<RoomForm onSubmit={console.log} />);
  });
});
