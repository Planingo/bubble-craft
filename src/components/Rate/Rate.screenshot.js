import { ReactScreenshotTest } from 'react-screenshot-test'
import React from 'react';
import Rate from './Rate';
import 'antd/dist/antd.css';

describe("Screenshot", () => {
  const rate = (
    <Rate count={7} />
  );

    ReactScreenshotTest
    .create("Rate")
    .viewport("Desktop", {
      width: 500,
      height: 100
    })
    .shoot("Rate", rate)
    .run();
})
