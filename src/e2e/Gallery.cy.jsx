import { Gallery } from "../components/Gallery/Gallery";
import { IntlProvider } from "../translation/IntlProvider";

describe.skip("<Gallery />", () => {
  it("renders", () => {
    cy.mount(
      <IntlProvider>
        <Gallery
          datas={[
            {
              alt: "Métamorphose",
              actions: {
                downloadTitle: {
                  id: "download.calendar.student",
                  values: `Anne`,
                },
                cloudTitle: {
                  id: "send.calendar.student",
                  values: `Anne`,
                },
                deleteTitle: {
                  id: "archived.student",
                  values: `Anne`,
                },
              },
              id: "1",
              link: "/lessons/1",
              name: "Métamorphose",
              src: "https://avatars.bugsyaya.dev/285/1",
              tags: ["Coucou", "Pouet"],
              title: "Métamorphose",
            },
          ]}
          name="lesson"
        />
      </IntlProvider>
    );
  });
});
