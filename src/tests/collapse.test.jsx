import { render } from "@testing-library/react";
import React from "react";
import { Collapse } from "../components";
import { Panel } from "../components/Collapse/Panel/Panel";

describe("Collapse component", () => {
  const collapse = (
    <Collapse defaultActiveKey={["1"]} onChange={() => {}}>
      <Panel header="This is panel header 1">
        <p>
          A dog is a type of domesticated animal. Known for its loyalty and
          faithfulness, it can be found as a welcome guest in many households
          across the world.
        </p>
      </Panel>
      <Panel header="This is panel header 2">
        <p>
          A dog is a type of domesticated animal. Known for its loyalty and
          faithfulness, it can be found as a welcome guest in many households
          across the world.
        </p>
      </Panel>
      <Panel header="This is panel header 3">
        <p>
          A dog is a type of domesticated animal. Known for its loyalty and
          faithfulness, it can be found as a welcome guest in many households
          across the world.
        </p>
      </Panel>
    </Collapse>
  );

  it("Collapse content text", () => {
    const { baseElement } = render(collapse);
    expect(baseElement).toHaveTextContent(
      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
    );
  });
});
