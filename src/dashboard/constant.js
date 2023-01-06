import {
  create_campaign,
  dashboard,
  logout,
  payment,
  profile,
  withdraw,
} from "../assets/index";

export const navlink = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/dashboard",
  },
  {
    name: "campaign",
    imgUrl: create_campaign,
    link: "/create-campaign",
  },
  {
    name: "payment",
    imgUrl: payment,
    link: "/",
    disabled: true,
  },
  {
    name: "withdraw",
    imgUrl: withdraw,
    link: "/",
    disabled: true,
  },
  {
    name: "profile",
    imgUrl: profile,
    link: "/profile",
  },
  {
    name: "logout",
    imgUrl: logout,
    link: "/",
    disabled: true,
  },
];
