import { Navigation } from "../components/Navigation/Navigation";
import { Roles } from "../components/Roles/roles";

const meta = {
  title: "Templates/Navigation",
  component: Navigation,
};

export default meta;

export const Playground = {
  args: {
    roles: [Roles.PLANING_KEEPER],
  },
};
