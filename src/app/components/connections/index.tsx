import React from "react";
import { ConnectionItemComp } from "./ConnectionItem";
import { PiStackOverflowLogoThin, PiLinkedinLogoThin } from "react-icons/pi";
import { CiFacebook } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io5";
import { ConnectionItem } from "@/app/utils";

type Props = {};

function Connections({}: Props) {
  const connections: Array<ConnectionItem> = [
    {
      platform: "Stack Overflow",
      url: "",
      icon: <PiStackOverflowLogoThin color="white" size="35px" />,
      username: "hassamulla",
    },
    {
      platform: "GitHub",
      url: "",
      icon: <IoLogoGithub color="white" size="35px" />,
      username: "hassamUllah23",
    },
    {
      platform: "LinkedIn",
      url: "",
      icon: <PiLinkedinLogoThin color="white" size="35px" />,
      username: "Hassam Ullah",
    },
    {
      platform: "Facebook",
      url: "",
      icon: <CiFacebook color="white" size="35px" />,
      username: "Hassam Ullah",
    },
  ];
  return (
    <div
      id="connect"
      className="flex flex-row justify-center flex-wrap sm:flex-nowrap gap-x-0 sm:gap-x-3 md:gap-x-10"
    >
      {connections.map((element, index) => {
        return <ConnectionItemComp key={index} {...element} />;
      })}
    </div>
  );
}

export { Connections };
