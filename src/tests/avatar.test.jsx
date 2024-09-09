import { render } from "@testing-library/react";

import { Avatar } from "../components/Avatar/Avatar";

describe("Avatar component", () => {
  const avatar = <Avatar>User</Avatar>;

  it("Alert content text", () => {
    const { baseElement } = render(avatar);
    expect(baseElement).toHaveTextContent("User");
  });
});
