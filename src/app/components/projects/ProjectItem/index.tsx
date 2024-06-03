import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { ProjectDetail } from "../ProjectDetail";
import { Technologies } from "../Technologies";
import { Popup } from "../..";
import { Project } from "@/app/utils";
import { withTooltip } from "../../HOCs";

function ProjectItem(project: Project) {
  const { title, subtitle, cover, primaryTechnologies } = project;

  return (
    <Popup
      triggerComponent={
        <Card className="h-full min-h-full w-full bg-stone-950 p-1 py-4 shadow">
          <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
            <h4 className="text-lg font-bold uppercase">{title}</h4>
            <Technologies justify="start" technologies={primaryTechnologies} />
            <h4 className="w-full overflow-y-hidden truncate whitespace-nowrap py-3 text-tiny">
              {subtitle}
            </h4>
          </CardHeader>
          <CardBody className="w-full overflow-visible py-2 brightness-90">
            <Image
              alt="Card background"
              src={cover}
              width={"100%"}
              className="w-full rounded-xl object-cover "
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

const WrappedProjectItem = withTooltip(ProjectItem);
export { WrappedProjectItem };
