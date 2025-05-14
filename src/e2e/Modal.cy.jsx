import { Button, Notif } from "../components";
import { Modal } from "../components/Modal/Modal";
import { IntlProvider } from "../translation/IntlProvider";

describe("<Modal />", () => {
  it.skip("renders", () => {
    cy.mount(
      <IntlProvider>
        <Modal
          title="Envoyer le calendrier"
          OpenModal={(showModal) => (
            <Button type="primary" onClick={showModal}>
              Ouvrir la modale
            </Button>
          )}
          ValidateButton={(handleOk) => (
            <Notif
              OpenNotification={(openNotification) => (
                <Button
                  key="validate"
                  className="cta"
                  onClick={() => {
                    openNotification();
                    handleOk();
                  }}
                >
                  Valider
                </Button>
              )}
              title="C'est un titre"
              description="C'est une description !"
            />
          )}
        >
          Ananas
        </Modal>
      </IntlProvider>,
    );
  });
});
