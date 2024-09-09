import { Carousel } from "../components/Carousel/Carousel";

const meta = {
  title: "Organismes/Carousel",
  component: Carousel,
};

export default meta;

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export const Playground = {
  args: {
    datas: [1, 2, 3, 4].map((i) => (
      <div key={i}>
        <h3 style={contentStyle}>i</h3>
      </div>
    )),
    afterChange: (currentSlide) => console.log(currentSlide),
  },
};
