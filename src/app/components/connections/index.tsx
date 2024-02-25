import React from "react";
import { ConnectionItemComp } from "./ConnectionItem";
import { PiStackOverflowLogoThin, PiLinkedinLogoThin } from "react-icons/pi";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { ConnectionItem } from "@/app/utils";

type Props = {};

function Connections({}: Props) {
  const iconSize = "25px";
  const connections: Array<ConnectionItem> = [
    {
      url: "https://stackoverflow.com/users/21012810/hassam-ullah",
      icon: <PiStackOverflowLogoThin color="white" size={iconSize} />,
      username: "hassamulla",
    },
    {
      url: "https://github.com/hassamUllah23",
      icon: <IoLogoGithub color="white" size={iconSize} />,
      username: "hassamUllah23",
    },
    {
      url: "https://www.linkedin.com/in/hassam-ullah/",
      icon: <PiLinkedinLogoThin color="white" size={iconSize} />,
      username: "Hassam Ullah",
    },
    {
      url: "",
      icon: <CiFacebook color="white" size={iconSize} />,
      username: "Hassam Ullah",
    },
    {
      url: "https://wa.me/+923105187828",
      icon: <FaWhatsapp color="white" size={iconSize} />,
      username: "+92-310-5187828",
    },
  ];
  return (
    <div
      id="connect"
      className="flex flex-row flex-wrap justify-evenly gap-x-3 sm:flex-nowrap md:justify-start md:gap-x-10"
    >
      {connections.map((element, index) => {
        return <ConnectionItemComp key={index} {...element} />;
      })}
    </div>
  );
}

export { Connections };
