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
    <div className="flex flex-col gap-y-3 w-[400px] max-w-full py-3 px-2">
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
      <div className="flex flex-row justify-start items-center flex-wrap">
        {images.map((element, index) => {
          return (
            <div className="transition transition-all transition-transform  duration-500 ease-in-out h-[80px] w-1/3 p-1 hover:w-full hover:h-auto">
              <img
                key={index}
                src={element}
                className="rounded border border-gray-600 h-full"
              />
            </div>
          );
        })}
      </div>
      {/* <Slider images={images} /> */}
    </div>
  );
}

export { ProjectDetail };
