import { LoginPage } from "../components/LoginPage/LoginPage";

const meta = {
  title: "Pages/LoginPage",
  component: LoginPage,
};

export default meta;

export const Playground = {
  args: {
    onSubmit: () => console.log(),
    loading: false,
  },
};
