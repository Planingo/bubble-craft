import React from 'react';

import { Carousel } from './Carousel';

export default {
  title: 'Organismes/Carousel',
  component: Carousel,
};

const CarouselGlobal = (args) => <Carousel {...args} />;

export const Default = CarouselGlobal.bind({});

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

Default.args = {
    datas:[
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>,
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>,
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>,
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>],
    afterChange: (currentSlide) => console.log(currentSlide)
};