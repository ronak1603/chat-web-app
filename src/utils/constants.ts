import chatIcon from "../assets/icons/chatIcon.svg";
import group from "../assets/icons/group.svg";
import privacy from "../assets/icons/privacy.svg";
import { Poppins } from "next/font/google";
export const HEADER_NAV_LINKS = [
  { label: "Demos", link: "/#" },
  { label: "About", link: "/#" },
  { label: "Blog", link: "/#" },
  { label: "Pages", link: "/#" },
  { label: "Contact Us", link: "/#" },
];

export const FEATURES = [
  {
    Heading: "Real-Time Messaging",
    icon: chatIcon,
    desc: "Enables users to send and receive messages instantly.",
  },
  {
    Heading: "Keep Safe and Private",
    icon: privacy,
    desc: "Secures user accounts and ensures that conversations are private",
  },
  {
    Heading: "Group Chats and Channels",
    icon: group,
    desc: "Allows multiple users to participate in a single conversation or channel",
  },
];

export const fonts = {
  primaryFont: "Poppins",
};
