import { ReactScreenshotTest } from 'react-screenshot-test'
import React from 'react';
import Empty from './Empty';
import 'antd/dist/antd.css';

describe("Screenshot", () => {
  const empty = (
    <Empty color="#f50" text="#f50" />
  );

    ReactScreenshotTest
    .create("Empty")
    .viewport("Desktop", {
      width: 500,
      height: 100
    })
    .shoot("Empty", empty)
    .run();
})
