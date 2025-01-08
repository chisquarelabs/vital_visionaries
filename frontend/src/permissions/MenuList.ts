import { icons } from "../assets/icons/IconLists";

//for sidebar
export const MenuList = [
  {
    name: "DashBoard",
    type: "item",
    path: "/dashBoard",
    icon: icons.main,
  },
  {
    name: "Masters",
    type: "group",
    icon: icons.main,
    children: [
      {
        name: "User List",
        type: "item",
        path: "/userList",
        icon: icons.sub,
      }
    ],
  },
];
