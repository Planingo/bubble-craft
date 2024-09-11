import { Transfer } from "../components/Transfer/Transfer";

const meta = {
  title: "Organismes/Transfer",
  component: Transfer,
};

export default meta;

export const Playground = {
  args: {
    title: ["Source", "Target"],
    render: (item) => item.title,
    dataSource: Array.from({
      length: 20,
    }).map((_, i) => ({
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`,
    })),
  },
};
