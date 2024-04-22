import React from "react";
import { Link } from "@nextui-org/react";
import { Technologies } from "../Technologies";
import { Project } from "@/app/utils";
import { LongText } from "../../LongText";

type Props = {
  project: Project;
};

function ProjectDetail({ project }: Props) {
  const { title, description, url, images, technologies } = project;

  return (
    <div className="flex w-[400px] max-w-full flex-col gap-y-3 px-2 py-3">
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
      <LongText text={description} />
      <Technologies justify="start" technologies={technologies} />
      <div className="flex flex-row flex-wrap items-center justify-start">
        {images.map((element, index) => {
          return (
            <div className="h-[80px] w-1/3 p-1  transition transition-all transition-transform duration-500 ease-in-out hover:h-auto hover:w-full">
              <img
                key={index}
                src={element}
                className="h-full rounded border border-gray-600"
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
