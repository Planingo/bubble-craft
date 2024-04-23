import { render } from "@testing-library/react";
import React from "react";
import { Carousel } from "../components";

describe("Carousel component", () => {
  const carousel = (
    <Carousel
      afterChange={() => {}}
      datas={[
        <div key="1">
          <h3
            style={{
              background: "#364d79",
              color: "#fff",
              height: "160px",
              lineHeight: "160px",
              margin: 0,
              textAlign: "center",
            }}
          >
            1
          </h3>
        </div>,
        <div key="2">
          <h3
            style={{
              background: "#364d79",
              color: "#fff",
              height: "160px",
              lineHeight: "160px",
              margin: 0,
              textAlign: "center",
            }}
          >
            2
          </h3>
        </div>,
        <div key="3">
          <h3
            style={{
              background: "#364d79",
              color: "#fff",
              height: "160px",
              lineHeight: "160px",
              margin: 0,
              textAlign: "center",
            }}
          >
            3
          </h3>
        </div>,
        <div key="4">
          <h3
            style={{
              background: "#364d79",
              color: "#fff",
              height: "160px",
              lineHeight: "160px",
              margin: 0,
              textAlign: "center",
            }}
          >
            4
          </h3>
        </div>,
      ]}
    />
  );

  it("Carousel content text", () => {
    const { baseElement } = render(carousel);
    expect(baseElement).toHaveTextContent("1");
  });
});
