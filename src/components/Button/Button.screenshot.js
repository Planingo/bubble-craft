import { ReactScreenshotTest } from 'react-screenshot-test'
import React from 'react';
import Button from './Button';
import 'antd/dist/antd.css';

describe("Screenshot", () => {
  const button = (
    <Button type="primary">Primary Button</Button>
  );

    ReactScreenshotTest
    .create("Button")
    .viewport("Desktop", {
      width: 500,
      height: 100
    })
    .shoot("Button", button)
    .run();
})
