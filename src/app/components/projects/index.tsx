import React from "react";
import { ProjectItem } from "./ProjectItem";
import {
  df1,
  df2,
  dfiance,
  fahwa,
  telegram,
  tg1,
  tg2,
  tg3,
  th1,
  th2,
  th3,
  xp_bridge_1,
  xpr1,
  xpr2,
  xpr3,
  xpr4,
} from "@/app/services/assets.service";
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
      url: "https://explorer.xp.network/",
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
      subtitle: "A ChatGPT-based conversation generation tool for Telegram.",
      description:
        "A browser-based user interface that generates conversations through ChatGPT and populates them in Telegram chat groups using TelegramBot API and Puppeteer.",
      cover: tg1.src,
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
      images: [tg1.src, tg2.src, tg3.src],
    },

    {
      title: "XP-Rush",
      subtitle: "A NFT ",
      description:
        "A Web3 based game that revolves around collecting and moving NFTs from one blockchain to another using XP Netowrk's NFT bridge.",
    cover: xpr3.src,
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
      images: [xpr1.src, xpr2.src, xpr3.src],
    },

    {
      title: "Tec Helper",
      subtitle:
        "A freelance platform to connect customers with IT service rpoviders.",
      description:
        "A platform where customers can acquire services from Tec Helpers i.e. freelance IT service providers by making online appointments enabled through Agora SDK's video calling feature.",
      cover: th1.src,
      url: "http://tec-helper.de/",
      technologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.node,
        TechnologiesEnum.mongo,
        TechnologiesEnum.agora,
      ],
      primaryTechnologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.node,
        TechnologiesEnum.mongo,
      ],
      images: [th1.src, th2.src, th3.src],
    },

    {
      title: "Fahwa.io",
      subtitle: "AI-based content creation tool.",
      description:
        "A content generation tool for Arabic and English language, useful for creating a wide range of content ranging from LinkedIn post, emails, Instagram post captions, Twitter threads etc.",
      cover: fahwa.src,
      url: "https://fahwa.io/",
      technologies: [
        TechnologiesEnum.nest,
        TechnologiesEnum.next,
        TechnologiesEnum.mongo,
        TechnologiesEnum.firebase,
      ],
      primaryTechnologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.node,
        TechnologiesEnum.mongo,
      ],
      images: [fahwa.src],
    },

    {
      title: "DFiance Admin Portal",
      subtitle: "Admin portal for a Web3-based card game.",
      description:
        "DFiance is a Web3-based card game where you can buy and upgrade cards using digital currencies and.",
      cover: dfiance.src,
      url: "https://dfiance.com/",
      technologies: [
        TechnologiesEnum.nest,
        TechnologiesEnum.next,
        TechnologiesEnum.mongo,
        TechnologiesEnum.ethers,
        TechnologiesEnum.web3,
      ],
      primaryTechnologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.nest,
        TechnologiesEnum.mongo,
      ],
      images: [dfiance.src, df1.src, df2.src],
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
