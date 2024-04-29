import { render } from "@testing-library/react";
import React from "react";
import { Card } from "../components/Card/Card";
import { TagsOutlined } from "../components/Icon/icon";
import { IntlProvider } from "../translation/IntlProvider";

const card = (
    <IntlProvider>
      <Card
        title="Minerva McGonagall"
        tags={["Métamorphose", "Ancient Runes", "Arithmancy"]}
        src="https://avatars.bugsyaya.dev/285/"
        icon={<TagsOutlined />}
        type="lesson"
        downloadTitle={{
          id:"download.calendar.student",
          values:`Anne`,
        }}
        cloudTitle={{
          id:"send.calendar.student",
          values:`Anne`,
        }}
        deleteTitle={{
          id:"archived.student",
          values:`Anne`,
        }}
      />
    </IntlProvider>
);

describe("Card component", () => {
  it("Snapshot card", () => {
    const { baseElement } = render(card);
    expect(baseElement).toHaveTextContent("Minerva McGonagall");
  });
});
