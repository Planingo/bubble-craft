import dayjs from "dayjs";
import { Calendar } from "../components/Calendar/Calendar";

const meta = {
  title: "Organismes/Calendar",
  component: Calendar,
};

export default meta;

export const Playground = {
  args: {
    timeZone: 'UTC',
    weekends:false,
    schedulerLicenseKey:"CC-Attribution-NonCommercial-NoDerivatives",
    dropEvents: [
      {
        key:"cours-10-1",
        title: <p>[Info 1]/[Cours] - Algorithme 1</p>,
      },
      {
        key:"cours-11-1",
        title: <p>[Droit 1]/[Cours] - Droit 1</p>,
      },
      {
        key:"cours-12-1",
        title: <p>[SVT 1]/[Cours] - Mathématiques</p>,
      },
      {
        key:"cours-13-1",
        title: <p>[SVT 1]/[Cours] - Anglais</p>,
      },
    ],
    value: dayjs(Date.now(), "YYYY-MM-DD"),
    events: [
      {
        title: "Cours 1",
        backgroundColor: "#115d8f",
        borderColor: "#115d8f",
        start: `2025-05-14T08:00:00`,
        end: `2025-05-14T10:00:00`,
      },
      {
        title: "Cours 2",
        backgroundColor: "#115d8f",
        borderColor: "#115d8f",
        start: `2025-05-14T10:00:00`,
        end: `2025-05-14T11:00:00`,
      },
      {
        title: "Cours 3",
        backgroundColor: "#115d8f",
        borderColor: "#115d8f",
        start: `2025-05-14T11:00:00`,
        end: `2025-05-14T12:00:00`,
      }
    ]
  },
};
