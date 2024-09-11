import { Carousel } from "../components/Carousel/Carousel";

describe("<Carousel />", () => {
  it("renders", () => {
    cy.mount(
      <Carousel
        datas={[1, 2, 3, 4].map((i) => (
          <div key={i}>
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
              {i}
            </h3>
          </div>
        ))}
      />,
    );
  });
});
