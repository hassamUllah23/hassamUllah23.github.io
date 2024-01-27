import React from "react";
import { Link } from "@nextui-org/react";
import { Slider } from "./Slider";
import { Technologies } from "../Technologies";
import { Project } from "@/app/utils";

type Props = {
  project: Project;
};

function ProjectDetail({ project }: Props) {
  const { title, description, url, images, technologies } = project;

  return (
    <div className="flex flex-col gap-y-3 max-w-[300px]">
      {url && url?.length > 0 ? (
        <Link
          className="m-0 p-0 font-bold"
          href={url}
          showAnchorIcon
          isExternal
        >
          {title}
        </Link>
      ) : (
        <h4 className="font-bold">{title}</h4>
      )}
      <p>{description}</p>
      <Technologies justify="start" technologies={technologies} />
      <Slider images={images} />
    </div>
  );
}

export { ProjectDetail };
