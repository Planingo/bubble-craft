import { Card } from "../components/Card/Card";
import { TagsOutlined } from "../components/Icon/icon";
import { IntlProvider } from "../translation/IntlProvider";

describe("<Card />", () => {
  it("renders", () => {
    cy.mount(
      <IntlProvider>
        <Card
          title="Minerva McGonagall"
          tags={["Métamorphose", "Ancient Runes", "Arithmancy"]}
          src="https://avatars.bugsyaya.dev/285/"
          icon={<TagsOutlined />}
          type="lesson"
          downloadTitle={{
            id: "download.calendar.student",
            values: `Anne`,
          }}
          cloudTitle={{
            id: "send.calendar.student",
            values: `Anne`,
          }}
          deleteTitle={{
            id: "archived.student",
            values: `Anne`,
          }}
        />
      </IntlProvider>,
    );
  });
});
