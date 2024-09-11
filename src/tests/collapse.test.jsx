import { render } from "@testing-library/react";

import { Collapse } from "../components/Collapse/Collapse";

describe("Collapse component", () => {
  const collapse = (
    <Collapse
      defaultActiveKey={["1"]}
      onChange={() => {}}
      items={[
        {
          key: "1",
          label: "This is panel header 1",
          children: (
            <p>
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many
              households across the world.
            </p>
          ),
        },
        {
          key: "2",
          label: "This is panel header 2",
          children: (
            <p>
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many
              households across the world.
            </p>
          ),
        },
        {
          key: "3",
          label: "This is panel header 3",
          children: (
            <p>
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many
              households across the world
            </p>
          ),
        },
      ]}
    />
  );

  it("Collapse content text", () => {
    const { baseElement } = render(collapse);
    expect(baseElement).toHaveTextContent(
      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
    );
  });
});
