import { Carousel as AntdCarousel } from "antd";
import "./carousel.css";

/**
 *
 * # 🚧 _Composant en construction_ 🚧
 *
 * # TODO
 *
 * ## Description
 *
 * Documentations andt du composant : https://ant.design/components/carousel/
 *
 */
export const Carousel = ({ datas, ...props }) => {
  return (
    <AntdCarousel className="storybook-carousel" {...props}>
      {datas.map((data) => data)}
    </AntdCarousel>
  );
};

Carousel.propTypes = {
  /**
   * TODO property
   */
};

Carousel.defaultProps = {};
