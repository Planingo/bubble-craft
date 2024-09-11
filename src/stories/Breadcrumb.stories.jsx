import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";

const meta = {
  title: "Atomes/Breadcrumb",
  component: Breadcrumb,
};

export default meta;

export const Playground = {
  args: {
    items: [
      { key: "home", title: "Home" },
      { key: "home2", title: <a href="/">Application Center</a> },
    ],
  },
};
