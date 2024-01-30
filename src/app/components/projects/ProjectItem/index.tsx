import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { ProjectDetail } from "../ProjectDetail";
import { Technologies } from "../Technologies";
import { Popup } from "../..";
import { Project } from "@/app/utils";

export function ProjectItem(project: Project) {
  const { title, subtitle, cover, primaryTechnologies } = project;

  return (
    <Popup
      triggerComponent={
        <Card className="py-4 w-full shadow h-full p-1 min-h-full bg-stone-950">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-lg uppercase">{title}</h4>
            <Technologies justify="start" technologies={primaryTechnologies} />
            <h4 className="text-tiny py-3 overflow-y-hidden whitespace-nowrap truncate w-full">
              {subtitle}
            </h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 w-full">
            <Image
              alt="Card background"
              src={cover}
              width={"100%"}
              className="rounded-xl object-cover w-full"
              style={{ maxHeight: "100px", width: "100%" }}
            />
          </CardBody>
        </Card>
      }
    >
      <ProjectDetail project={project} />
    </Popup>
  );
}
