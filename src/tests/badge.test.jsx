import { render } from "@testing-library/react";
import React from "react";
import { Badge } from "../components/Badge/Badge";

describe("Badge component", () => {
  const badge = <Badge color="#f50" text="#f50" />;

  it("Badge content text", () => {
    const { baseElement } = render(badge);
    expect(baseElement).toHaveTextContent("#f50");
  });
});
