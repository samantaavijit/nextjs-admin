import {
  MdDashboard,
  MdCalendarToday,
  MdPerson,
  MdTextFields,
  MdTableChart,
  MdPieChart,
  MdOutlineCircle,
  MdLock,
} from "react-icons/md";

export const ADMIN_NAV_MENU = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        icon: MdDashboard,
        url: "/admin",
        items: [],
      },
      {
        title: "Calendar",
        url: "/admin/calendar",
        icon: MdCalendarToday,
        items: [],
      },
      {
        title: "Profile",
        url: "/admin/profile",
        icon: MdPerson,
        items: [],
      },
      {
        title: "Forms",
        icon: MdTextFields,
        items: [
          {
            title: "Form Elements",
            url: "/forms/form-elements",
          },
          {
            title: "Form Layout",
            url: "/forms/form-layout",
          },
        ],
      },
      {
        title: "Tables",
        url: "/tables",
        icon: MdTableChart,
        items: [
          {
            title: "Tables",
            url: "/tables",
          },
        ],
      },
      {
        title: "Pages",
        icon: MdTextFields,
        items: [
          {
            title: "Settings",
            url: "/pages/settings",
          },
        ],
      },
    ],
  },
  {
    label: "OTHERS",
    items: [
      {
        title: "Charts",
        icon: MdPieChart,
        items: [
          {
            title: "Basic Chart",
            url: "/charts/basic-chart",
          },
        ],
      },
      {
        title: "UI Elements",
        icon: MdOutlineCircle,
        items: [
          {
            title: "Alerts",
            url: "/ui-elements/alerts",
          },
          {
            title: "Buttons",
            url: "/ui-elements/buttons",
          },
        ],
      },
      {
        title: "Authentication",
        icon: MdLock,
        items: [
          {
            title: "Sign In",
            url: "/auth/sign-in",
          },
        ],
      },
    ],
  },
];
