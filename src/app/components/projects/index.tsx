import React from "react";
import { ProjectItem } from "./ProjectItem";
import { telegram, xp_bridge_1 } from "@/app/services/assets.service";
import { Project, TechnologiesEnum } from "@/app/utils";
import { Element } from "react-scroll";

type Props = {};

export function Projects({}: Props) {
  const projects: Array<Project> = [
    {
      title: "XP-Bridge",
      subtitle: "A cross-chain NFT bridge",
      description: "description here",
      cover: xp_bridge_1.src,
      url: "https://bridge.xp.network/",
      technologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.redux,
        TechnologiesEnum.web3,
        TechnologiesEnum.ethers,
        TechnologiesEnum.aws_s3,
      ],
      primaryTechnologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.node,
        TechnologiesEnum.ethereum,
      ],
      images: [xp_bridge_1.src],
    },

    {
      title: "Telegram",
      subtitle:
        "A ChatGPT-based conversation generation tool for Telegram. A ChatGPT-based conversation generation tool for Telegram. A ChatGPT-based conversation generation tool for Telegram.",
      description:
        "A browser-based user interface that generates conversations through ChatGPT and populates them in Telegram chat groups using TelegramBot API and Puppeteer. A browser-based user interface that generates conversations through ChatGPT and populates them in Telegram chat groups using TelegramBot API and Puppeteer. A browser-based user interface that generates conversations through ChatGPT and populates them in Telegram chat groups using TelegramBot API and Puppeteer.",
      cover: telegram.src,
      url: "",
      technologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.vite,
        TechnologiesEnum.redux,
        TechnologiesEnum.node,
        TechnologiesEnum.mongo,
        TechnologiesEnum.docker,
        TechnologiesEnum.aws_ec2,
        TechnologiesEnum.socket,
        TechnologiesEnum.pm2,
        TechnologiesEnum.chatGpt,
        TechnologiesEnum.puppeteer,
        TechnologiesEnum.telegram,
      ],
      primaryTechnologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.node,
        TechnologiesEnum.mongo,
      ],
      images: [],
    },
  ];

  return (
    <Element name="projects">
      <div
        id="projects"
        className="flex flex-row justify-center items-stretch flex-wrap py-1 gap-3"
      >
        {projects.map((project, index) => {
          return (
            <div className="w-full sm:w-1/3 md:w-1/4">
              <ProjectItem key={index} {...project} />
            </div>
          );
        })}
      </div>
    </Element>
  );
}
