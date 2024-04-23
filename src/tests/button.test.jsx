import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Button } from "../components/Button/Button";

describe("Button component", () => {
  const textContent = "LOGIN";
  const onClick = test.fn();

  const button = (
    <Button onClick={(e) => onClick()} label="test" danger={false}>
      {textContent}
    </Button>
  );

  const buttonDisabled = (
    <Button
      onClick={(e) => onClick()}
      label="test"
      danger={false}
      disabled={true}
    >
      {textContent}
    </Button>
  );

  const buttonLoading = (
    <Button
      onClick={(e) => onClick()}
      label="test"
      danger={false}
      loading={true}
    >
      {textContent}
    </Button>
  );

  it("should render given children", () => {
    render(button);
    expect(screen.getByText(textContent)).toBeInTheDocument();
  });

  it("clicks on button", () => {
    render(button);
    const buttonClick = screen.getByRole("button");
    fireEvent.click(buttonClick);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("clicks on disabled button", () => {
    render(buttonDisabled);
    const buttonClick = screen.getByRole("button");
    fireEvent.click(buttonClick);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it("clicks on loading button", () => {
    render(buttonLoading);
    const buttonClick = screen.getByRole("button");
    fireEvent.click(buttonClick);
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
