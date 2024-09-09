import { GalleryList } from "../components/GalleryList/GalleryList";
import { IntlProvider } from "../translation/IntlProvider";

describe("<GalleryList />", () => {
  it("renders", () => {
    cy.mount(
      <IntlProvider>
        <GalleryList
          columns={[
            {
              dataIndex: "image",
              title: "Photo",
            },
            {
              dataIndex: "name",
              title: "Name",
            },
          ]}
          datas={[
            {
              alt: "Métamorphose",
              cloudTitle:
                "Envoyer le calendrier à toutes les personnes programmées à Métamorphose",
              deleteTitle: "Supprimer le cours de Métamorphose",
              downloadTitle: "Télécharger le calendrier pour Métamorphose",
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
      </IntlProvider>,
    );
  });
});
