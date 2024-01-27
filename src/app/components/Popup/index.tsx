import React, { PropsWithChildren } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

type Props = {
  triggerComponent: any;
};

function Popup({ triggerComponent, children }: Props & PropsWithChildren) {
  return (
    <div className="flex flex-wrap gap-4">
      <Popover
        style={{ backgroundColor: "transparent" }}
        containerPadding={15}
        triggerScaleOnOpen
        placement="bottom"
        backdrop={"blur"}
      >
        <PopoverTrigger>{triggerComponent}</PopoverTrigger>
        <PopoverContent
          className="w-max p-0 m-0"
          style={{ backgroundColor: "transparent" }}
        >
          {children}
        </PopoverContent>
      </Popover>
    </div>
  );
}

export { Popup };
