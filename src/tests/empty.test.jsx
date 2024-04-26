import { render } from "@testing-library/react";
import React from "react";
import { Empty } from "../components/Empty/Empty";

describe("Empty component", () => {
  const empty = <Empty description="#f50" />;

  it("Empty contains text", () => {
    const { baseElement } = render(empty);
    expect(baseElement).toHaveTextContent("#f50");
  });
});
