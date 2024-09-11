import { render, screen } from "@testing-library/react";

import { CheckboxGroup } from "../components/Checkbox/CheckboxGroups/CheckboxGroup";

describe("CheckboxGroup component", () => {
  const checkboxGroup = <CheckboxGroup />;

  it("should render given children", () => {
    render(checkboxGroup);
    expect(screen.getByRole("checkbox-group")).toBeInTheDocument();
  });
});
