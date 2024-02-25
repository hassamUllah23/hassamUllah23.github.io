import * as React from "react";
import { MyTooltip } from "../..";
import { ConnectionItem } from "@/app/utils";

export function ConnectionItemComp({ icon, url, username }: ConnectionItem) {
  return (
    <MyTooltip text={username}>
      <a href={url} target="blank">
        <div className="border-lg flex w-min cursor-pointer flex-col items-center justify-center rounded-lg text-center">
          <div className="my-2 flex flex-row flex-wrap justify-center">
            {icon}
          </div>
        </div>
      </a>
    </MyTooltip>
  );
}
