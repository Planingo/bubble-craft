import { SignupPage } from "../components/LoginPage/SignupPage";

const meta = {
  title: "Pages/SignupPage",
  component: SignupPage,
};

export default meta;

export const Playground = {
  args: {
    onSubmit: () => console.log(),
    loading: false,
  },
};
