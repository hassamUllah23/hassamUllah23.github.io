import React from "react";
import { ProjectItem } from "./ProjectItem";
import { Project } from "@/app/utils/types.utils";
import { TechnologiesEnum } from "@/app/utils/enums.utils";
import { xp_bridge_1 } from "@/app/services/assets.service";

type Props = {};

export default function ({}: Props) {
  const projects: Array<Project> = [
    {
      title: "XP-Bridge",
      cover: xp_bridge_1.src,
      url: "https://bridge.xp.network/",
      technologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.redux,
        TechnologiesEnum.web3,
        TechnologiesEnum.ethers,
        TechnologiesEnum.aws_s3
      ],
      images: [xp_bridge_1.src]
    },
    {
      title: "XP-Bridge",
      cover: "",
      url: "",
      technologies: [],
      images: []
    },

    {
      title: "XP-Bridge",
      cover: undefined,
      url: "dsds",
      technologies: [],
      images: []
    },
  ];
  return (
    <div className="flex flex-row justify-center gap-x-5 flex-wrap w-full py-10">
      {projects.map((project, index) => {
        return <ProjectItem key={index} {...project} />;
      })}
    </div>
  );
}
