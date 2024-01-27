import * as React from "react";
import { MyTooltip } from "../..";
import { ConnectionItem } from "@/app/utils";

export function ConnectionItemComp({
  icon,
  url,
  username,
  platform,
}: ConnectionItem) {
  return (
    <MyTooltip text={platform}>
      <div
        className="flex flex-col justify-center items-center p-5 rounded-lg border-lg cursor-pointer text-center w-min"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="flex flex-row justify-center my-2">{icon}</div>
        <a href={url} className="whitespace-nowrap">
          {username}
        </a>
      </div>
    </MyTooltip>
  );
}
