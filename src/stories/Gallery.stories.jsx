import { Form, Input } from "antd";

import { Gallery } from "../components";

const meta = {
  title: "Pages/Gallery",
  component: Gallery,
};

export default meta;

export const Playground = {
  args: {
    name: "lesson",
    loading: false,
    datas: [
      {
        id: "1",
        name: "Métamorphose",
        tags: ["Coucou", "Pouet"],
        actions: {
          downloadTitle: {
            id: "download.calendar.student",
            values: `Anne`,
          },
          cloudTitle: {
            id: "send.calendar.student",
            values: `Anne`,
          },
          deleteTitle: {
            id: "archived.student",
            values: `Anne`,
          },
        },
        link: `/lessons/1`,
        title: "Métamorphose",
        alt: "Métamorphose",
        src: `https://avatars.bugsyaya.dev/285/1`,
      },
      {
        id: "2",
        name: "Métamorphose",
        tags: ["Coucou", "Pouet"],
        actions: {
          downloadTitle: {
            id: "download.calendar.student",
            values: `Anne`,
          },
          cloudTitle: {
            id: "send.calendar.student",
            values: `Anne`,
          },
          deleteTitle: {
            id: "archived.student",
            values: `Anne`,
          },
        },
        link: `/lessons/1`,
        title: "Métamorphose",
        alt: "Métamorphose",
        src: `https://avatars.bugsyaya.dev/285/2`,
      },
      {
        id: "3",
        name: "Métamorphose",
        tags: ["Coucou", "Pouet"],
        actions: {
          downloadTitle: {
            id: "download.calendar.student",
            values: `Anne`,
          },
          cloudTitle: {
            id: "send.calendar.student",
            values: `Anne`,
          },
          deleteTitle: {
            id: "archived.student",
            values: `Anne`,
          },
        },
        link: `/lessons/1`,
        title: "Métamorphose",
        alt: "Métamorphose",
        src: `https://avatars.bugsyaya.dev/285/3`,
      },
      {
        id: "4",
        name: "Métamorphose",
        tags: ["Coucou", "Pouet"],
        actions: {
          downloadTitle: {
            id: "download.calendar.student",
            values: `Anne`,
          },
          cloudTitle: {
            id: "send.calendar.student",
            values: `Anne`,
          },
          deleteTitle: {
            id: "archived.student",
            values: `Anne`,
          },
        },
        link: `/lessons/1`,
        title: "Métamorphose",
        alt: "Métamorphose",
        src: `https://avatars.bugsyaya.dev/285/4`,
      },
      {
        id: "5",
        name: "Métamorphose",
        tags: ["Coucou", "Pouet"],
        actions: {
          downloadTitle: {
            id: "download.calendar.student",
            values: `Anne`,
          },
          cloudTitle: {
            id: "send.calendar.student",
            values: `Anne`,
          },
          deleteTitle: {
            id: "archived.student",
            values: `Anne`,
          },
        },
        link: `/lessons/1`,
        title: "Métamorphose",
        alt: "Métamorphose",
        src: `https://avatars.bugsyaya.dev/285/5`,
      },
      {
        id: "6",
        name: "Métamorphose",
        tags: ["Coucou", "Pouet"],
        actions: {
          downloadTitle: {
            id: "download.calendar.student",
            values: `Anne`,
          },
          cloudTitle: {
            id: "send.calendar.student",
            values: `Anne`,
          },
          deleteTitle: {
            id: "archived.student",
            values: `Anne`,
          },
        },
        link: `/lessons/1`,
        title: "Métamorphose",
        alt: "Métamorphose",
        src: `https://avatars.bugsyaya.dev/285/6`,
      },
    ],
  },
};

export const Empty = {
  args: {
    Add: () => (
      <Form
        name="Formulaire lesson"
        onValuesChange={console.log}
        layout="vertical"
        requiredMark
      >
        <Form.Item
          name="name"
          label="Nom"
          rules={[{ required: true, message: "Please enter user name" }]}
        >
          <Input placeholder="Please enter user name" />
        </Form.Item>
      </Form>
    ),
    name: "lesson",
    loading: false,
    datas: [],
  },
};
