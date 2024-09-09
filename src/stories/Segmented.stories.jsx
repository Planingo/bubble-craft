import { Segmented } from "../components/Segmented/Segmented";

const meta = {
  title: "Organismes/Segmented",
  component: Segmented,
};

export default meta;

export const Playground = {
  args: {
    options: ["Quotidient", "Hebdomadaire", "Mensuel", "Trimestriel", "Annuel"],
  },
};
