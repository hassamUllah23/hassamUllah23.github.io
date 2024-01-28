import * as React from "react";
import { MyTooltip } from "../..";
import { ConnectionItem } from "@/app/utils";

export function ConnectionItemComp({ icon, url, username }: ConnectionItem) {
  return (
    <MyTooltip text={username}>
      <a href={url} target="blank">
        <div className="flex flex-col justify-center items-center rounded-lg border-lg cursor-pointer text-center w-min">
          <div className="flex flex-row justify-center flex-wrap my-2">
            {icon}
          </div>
        </div>
      </a>
    </MyTooltip>
  );
}
