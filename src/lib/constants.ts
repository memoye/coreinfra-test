import BuildingIcon from "@/assets/icons/building.svg?react";
import UserShieldIcon from "@/assets/icons/user-shield.svg?react";
import UserGroupIcon from "@/assets/icons/user-group.svg?react";
import SettingIcon from "@/assets/icons/setting.svg?react";
import CardPosIcon from "@/assets/icons/credit-card-pos.svg?react";
import CardAcceptIcon from "@/assets/icons/credit-card-accept.svg?react";
import ChartBarLineIcon from "@/assets/icons/chart-bar-line.svg?react";
import CreditCardIcon from "@/assets/icons/credit-card.svg?react";
import CreditCardNotFoundIcon from "@/assets/icons/credit-card-not-found.svg?react";
import ListIcon from "@/assets/icons/list.svg?react";
import LayersThreeIcon from "@/assets/icons/layers-three.svg?react";
import MapIcon from "@/assets/icons/map.svg?react";
import UserIcon from "@/assets/icons/user.svg?react";
import CreditCardShield from "@/assets/icons/credit-card-shield.svg?react";
import CreditCard2 from "@/assets/icons/credit-card-2.svg?react";
import CreditCardEdit from "@/assets/icons/credit-card-edit.svg?react";
import CreditCardPlus from "@/assets/icons/credit-card-plus.svg?react";

export const navData = {
  main: [
    {
      icon: BuildingIcon,
      title: "Branches",
      url: "/branches",
    },
    {
      icon: UserShieldIcon,
      title: "Roles",
      url: "/roles",
    },
    {
      icon: UserGroupIcon,
      title: "Users",
      url: "/users",
    },
    {
      icon: SettingIcon,
      title: "Card Scheme",
      url: "/card-scheme",
    },
    {
      icon: CardPosIcon,
      title: "Card Profile",
      url: "/card-profile",
    },
    {
      icon: CardAcceptIcon,
      title: "Card Request",
      url: "/card-request",
    },
    {
      icon: ChartBarLineIcon,
      title: "Stock",
      url: "/stock",
    },
    {
      icon: CreditCardIcon,
      title: "Cards",
      url: "/cards",
    },
    {
      icon: CreditCardNotFoundIcon,
      title: "Block/Unblock Card",
      url: "/card-status",
    },
    {
      icon: ListIcon,
      title: "Authorization List",
      url: "/authorization-list",
    },
    {
      icon: LayersThreeIcon,
      title: "Authorization Queue",
      url: "/authorization-queue",
    },
    {
      icon: MapIcon,
      title: "Trail",
      url: "/trail",
    },
    {
      icon: UserIcon,
      title: "Account",
      url: "/account",
    },
  ],
};

export const quickAccessLinks = [
  {
    title: "Manage a Card",
    url: "/cards",
    icon: CreditCardShield,
  },
  {
    title: "Issue Instant Card",
    url: "/cards/issue",
    icon: CreditCard2,
  },
  {
    title: "Issue Personalized Card",
    url: "/cards",
    icon: CreditCardEdit,
  },
  {
    title: "Review Card Requests",
    url: "/cards",
    icon: CreditCardPlus,
  },
];
