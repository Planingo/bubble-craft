import { Form } from "antd";

import { UserOutlined } from "../components/Icon/icon";
import { Input } from "../components/Input/Input";
import { RefinementList } from "../components/RefinementList/RefinementList";

const meta = {
  title: "Templates/RefinementList",
  component: RefinementList,
};

export default meta;

export const Playground = {
  args: {
    isGrid: true,
    firstActionText: "ajouter un truc",
    setIsGrid: console.log,
    FirstActionIcon: UserOutlined,
    FirstForm: (
      <Form
        onValuesChange={(values) => console.log(values)}
        layout="vertical"
        hideRequiredMark
      >
        <Form.Item
          name="lastName"
          label="Nom"
          rules={[{ required: true, message: "Merci de renseigner le nom" }]}
        >
          <Input placeholder="Potter" />
        </Form.Item>
      </Form>
    ),
    onFirstAction: console.log,
    firstActioning: console.log,
    secondActionText: "editer un truc",
    SecondActionIcon: UserOutlined,
    SecondForm: (
      <Form
        onValuesChange={(values) => console.log(values)}
        layout="vertical"
        hideRequiredMark
      >
        <Form.Item
          name="lastName"
          label="Nom"
          rules={[{ required: true, message: "Merci de renseigner le nom" }]}
        >
          <Input placeholder="Potter" />
        </Form.Item>
      </Form>
    ),
    onSecondAction: console.log,
    secondActioning: console.log,
  },
};
