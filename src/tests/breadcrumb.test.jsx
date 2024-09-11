import { render } from "@testing-library/react";

import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";

describe("Breadcrumb component", () => {
  const breadcrumb = (
    <Breadcrumb
      items={[
        { key: "home", title: "Home" },
        { key: "home2", title: <a href="/">Application Center</a> },
      ]}
    />
  );

  it("Breadcrumb content text", () => {
    const { baseElement } = render(breadcrumb);
    expect(baseElement).toHaveTextContent("Home");
  });
});
