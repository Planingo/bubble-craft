import { CalendarOutlined } from "../Icon/icon/CalendarOutlined";
import { CompanyOutlined } from "../Icon/icon/CompanyOutlined";
import { ExperimentOutlined } from "../Icon/icon/ExperimentOutlined";
import { ScheduleOutlined } from "../Icon/icon/ScheduleOutlined";
import { SettingOutlined } from "../Icon/icon/SettingOutlined";
import { ShopOutlined } from "../Icon/icon/ShopOutlined";
import { TagOutlined } from "../Icon/icon/TagOutlined";
import { TagsOutlined } from "../Icon/icon/TagsOutlined";
import { TeamOutlined } from "../Icon/icon/TeamOutlined";
import { UserOutlined } from "../Icon/icon/UserOutlined";
import { Roles } from "../Roles/roles";

export const path = [
  {
    key: "studentcalendar",
    to: "/student-calendar",
    title: "app.navigation.my.calendar",
    icon: <ScheduleOutlined />,
    role: Roles.STUDENT,
  },
  {
    key: "professorcalendar",
    to: "/professor-calendar",
    title: "app.navigation.my.calendar",
    icon: <ScheduleOutlined />,
    role: Roles.PROFESSOR,
  },
  {
    key: "companycalendars",
    to: "/company-calendars",
    title: "app.navigation.my.calendar",
    icon: <ScheduleOutlined />,
    role: Roles.COMPANY,
  },
  {
    key: "student",
    to: "/students",
    title: "app.navigation.students",
    icon: <UserOutlined />,
    role: Roles.PLANING_KEEPER,
  },
  {
    key: "professor",
    to: "/professors",
    title: "app.navigation.professors",
    icon: <TeamOutlined />,
    role: Roles.PLANING_KEEPER,
  },
  {
    key: "calendar",
    to: "/calendars",
    title: "app.navigation.calendars",
    icon: <CalendarOutlined />,
    role: Roles.PLANING_KEEPER,
  },
  {
    key: "lesson",
    to: "/lessons",
    title: "app.navigation.lessons",
    icon: <TagOutlined />,
    role: Roles.PLANING_KEEPER,
  },
  {
    key: "module",
    to: "/modules",
    title: "app.navigation.modules",
    icon: <TagsOutlined />,
    role: Roles.PLANING_KEEPER,
  },
  {
    key: "pathway",
    to: "/pathways",
    title: "app.navigation.pathways",
    icon: <ExperimentOutlined />,
    role: Roles.PLANING_KEEPER,
  },
  {
    key: "room",
    to: "/rooms",
    title: "app.navigation.rooms",
    icon: <ShopOutlined />,
    role: Roles.PLANING_KEEPER,
  },
  {
    key: "company",
    to: "/companies",
    title: "app.navigation.companies",
    icon: <CompanyOutlined />,
    role: Roles.PLANING_KEEPER,
  },
  {
    key: "settings",
    to: "/settings",
    title: "app.navigation.settings",
    icon: <SettingOutlined />,
    role: Roles.SUPER_ADMIN,
  },
];
