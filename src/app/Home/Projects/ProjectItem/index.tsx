import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { Project } from "@/app/utils/types.utils";

export function ProjectItem({ title, cover: image, url }: Project) {
  // const navigate = ()
  // const handleClick = ()=>{

  // }
  return (
    <Card
      isFooterBlurred
      className="w-1/4"
      style={{height:"300px"}}
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">{title}</p>
        <h4 className="text-white/90 font-medium text-xl">
          Your checklist for better sleep
        </h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={image}
      />
      {
        url &&       <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 flex flex-row justify-end w-full">
        {/* <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="/images/breathing-app-icon.jpeg"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Breathing App</p>
            <p className="text-tiny text-white/60">Get a good night's sleep.</p>
          </div>
        </div> */}
        <Button radius="full" size="md">
          <a href={url} target="_blank">
            Visit Site
          </a>
        </Button>
      </CardFooter>
 
      }
    </Card>
  );
}
