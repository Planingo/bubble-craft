import { Button } from "../components";
import { Notif } from "../components/Notification/Notification";
import { IntlProvider } from "../translation/IntlProvider";

describe("<Notif />", () => {
  it("renders", () => {
    cy.mount(
      <IntlProvider>
        <Notif
          title="C'est une super notif"
          description="Juste pour dire que ca fonctionne de ouf !"
          OpenNotification={(openNotification) => (
            <Button type="primary" onClick={openNotification}>
              coucou
            </Button>
          )}
        />
      </IntlProvider>,
    );
  });
});
