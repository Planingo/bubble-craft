import { Popconfirm } from "../components/Popconfirm/Popconfirm";

const meta = {
  title: "Molécules/Popconfirm",
  component: Popconfirm,
};

export default meta;

export const Playground = {
  args: {
    title: "Supprimer la tâche",
    description: "Es-tu sûr de vouloir supprimer cette tâche ?",
    okText: "Oui",
    cancelText: "Non",
    children: <a href="/">Delete</a>,
    onConfirm: (e) => console.log(e),
    onCancel: (e) => console.log(e),
  },
};
