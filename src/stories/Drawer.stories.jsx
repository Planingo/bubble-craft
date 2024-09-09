import { Drawer } from "../components/Drawer/Drawer";

const meta = {
  title: "Molécules/Drawer",
  component: Drawer,
};

export default meta;

export const Playground = {
  args: {
    title: "Basic Drawer",
    placement: "right",
    children: (
      <>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </>
    ),
    open: true,
  },
};
