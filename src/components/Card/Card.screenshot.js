import { ReactScreenshotTest } from 'react-screenshot-test'
import React from 'react';
import Card from './Card';
import 'antd/dist/antd.css';
import { CloudUploadOutlined, DeleteOutlined, DownloadOutlined, TagsOutlined } from '@ant-design/icons';
import { Tooltip } from '../Tooltip/Tooltip';

describe("Screenshot", () => {
  const card = (
    <Card
      actions={[
        <Tooltip placement="bottom" title="Télécharger"><DownloadOutlined id="download" /></Tooltip>,
        <Tooltip placement="bottom" title="Envoyer"><CloudUploadOutlined id="cloud" /></Tooltip>,
        <Tooltip placement="bottom" title="Supprimer"><DeleteOutlined id="delete" /></Tooltip>
      ]}
      cloudTitle="Envoyer"
      cover={<>
        <img alt="Etudiant" src="https://avatars.bugsyaya.dev/285/"/>
        </>}
      deleteTitle="Supprimer"
      downloadTitle="Télécharger"
      icon={<TagsOutlined />}
      title="Minerva McGonagall"
      type="lesson"
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
