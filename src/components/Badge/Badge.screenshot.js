import { ReactScreenshotTest } from 'react-screenshot-test'
import React from 'react';
import Badge from './Badge';
import 'antd/dist/antd.css';

describe("Screenshot", () => {
  const badge = (
    <Badge color="#f50" text="#f50" />
  );

    ReactScreenshotTest
    .create("Badge")
    .viewport("Desktop", {
      width: 500,
      height: 100
    })
    .shoot("Badge", badge)
    .run();
})
