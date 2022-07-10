import { ReactScreenshotTest } from 'react-screenshot-test'
import React from 'react';
import Tag from './Tag';
import 'antd/dist/antd.css';

describe("Screenshot", () => {
  const tag = (
    <Tag>Ananas</Tag>
  );

    ReactScreenshotTest
    .create("Tag")
    .viewport("Desktop", {
      width: 500,
      height: 100
    })
    .shoot("Tag", tag)
    .run();
})
