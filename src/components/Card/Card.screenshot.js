import { ReactScreenshotTest } from 'react-screenshot-test'
import React from 'react';
import Card from './Card';
import 'antd/dist/antd.css';
import { CloudUploadOutlined, DeleteOutlined, DownloadOutlined } from '@ant-design/icons';
import { Tooltip } from '../Tooltip/Tooltip';
import Tag from '../Tag/Tag';

describe("Screenshot", () => {
  const card = (
    <Card
  actions={[
    <Tooltip placement="bottom" title="Télécharger"><DownloadOutlined id="download" /></Tooltip>,
    <Tooltip placement="bottom" title="Envoyer"><CloudUploadOutlined id="cloud" /></Tooltip>,
    <Tooltip placement="bottom" title="Supprimer"><DeleteOutlined id="delete" /></Tooltip>
  ]}
  cover={
    <>
      <div className="title-card">
        <div className="container">
          <Tooltip placement="bottom" title="Métamorphose, Ancient Runes, Arithmancy">
            <div className="tag-container">
              <Tag type="lesson">Métamorphose</Tag>
              <Tag type="lesson">Ancient Runes</Tag>
              <Tag type="lesson">Arithmancy</Tag>
            </div>
          </Tooltip>
        </div>
      </div>
      <img alt="Etudiant" src="https://avatars.bugsyaya.dev/285/"/>
    </>
  }
  title="Minerva McGonagall"
/>
  );

    ReactScreenshotTest
    .create("Card")
    .viewport("Desktop", {
      width: 500,
      height: 100
    })
    .shoot("Card", card)
    .run();
})
