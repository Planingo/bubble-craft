import { TagsOutlined } from "../components/Icon/icon";
import { render } from "@testing-library/react";
import React, { createContext, useEffect, useContext } from "react";
import { Card } from "../components/Card/Card";
import { ConfigProvider } from "antd";

const context = createContext("Minerva McGonagall");

const Test = () => {
  return <div>{useContext(context)}</div>;
};

//*
const card = (
  <ConfigProvider>
    <Card
      title="Minerva McGonagall"
      tags={["Métamorphose", "Ancient Runes", "Arithmancy"]}
      src="https://avatars.bugsyaya.dev/285/"
      icon={<TagsOutlined />}
      type="lesson"
      downloadtitle="Télécharger"
      cloudtitle="Envoyer"
      deletetitle="Supprimer"
    />
  </ConfigProvider>
);
/*/

  const card = <Test></Test>
  //*/

describe("Card component", () => {
  it("Snapshot card", () => {
    const { baseElement } = render(card);
    expect(baseElement).toHaveTextContent("Minerva McGonagall");
  });
});
