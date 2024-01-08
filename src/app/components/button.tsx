import React from "react";
import {Button} from "@nextui-org/react";

type Props = {
    label: string,
    onClick: any
}
function BaseButton({label, onClick}:Props) {
  return (
    <Button color="primary" onClick={onClick}>
      {label}
    </Button>
  );
}

export { BaseButton}
