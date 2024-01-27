import React, { PropsWithChildren, useEffect } from "react";
import { Link as ScrollLink, scrollSpy } from "react-scroll";

type Props = {
  target: string;
};

function Scroll({ target, children }: Props & PropsWithChildren) {
  useEffect(() => {
    scrollSpy.update();
    return () => {};
  }, []);

  return (
    <ScrollLink
      to={target}
      activeClass="active"
      spy={true}
      smooth={true}
      offset={50}
      duration={800}
      className="cursor-pointer"
    >
      {children}
    </ScrollLink>
  );
}

export { Scroll };
