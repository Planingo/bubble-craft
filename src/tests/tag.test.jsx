import { fireEvent, render, screen } from "@testing-library/react";
import { Tag } from "../components/Tag/Tag";

describe("Tag component", () => {
  const textContent = "C'est un super tag";
  const onClose = vi.fn();
  const tag = (
    <Tag onClose={() => onClose()} closable={true}>
      {textContent}
    </Tag>
  );

  it("should render given children", () => {
    render(tag);
    expect(screen.getByText(textContent)).toBeInTheDocument();
  });

  it("clicks on button", () => {
    render(tag);
    const tagClick = screen.getByRole("img");
    fireEvent.click(tagClick);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
