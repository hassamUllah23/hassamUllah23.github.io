import React from "react";
import { Tooltip } from "@nextui-org/react";

type WithTooltipProps = {
  tooltipText: string | undefined;
};

const withTooltip = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) => {
  const WithTooltip: React.FC<P & WithTooltipProps> = ({
    tooltipText,
    ...componentProps
  }) => {
    console.log({ tooltipText });
    return (
      <>
        {tooltipText ? (
          <Tooltip placement="bottom" content={tooltipText}>
            <WrappedComponent {...(componentProps as P)} />
          </Tooltip>
        ) : (
          <WrappedComponent {...(componentProps as P)} />
        )}
      </>
    );
  };

  return WithTooltip;
};
export { withTooltip };
