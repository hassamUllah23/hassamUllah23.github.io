import React from "react";
import { Link } from "@nextui-org/react";
import { GoHeart } from "react-icons/go";
import { Connections } from "..";
import { resolveColor, resolveTheme } from "@/app/utils";
import { Contact } from "../Contact";
import { useTheme } from "next-themes";
import { FooterTechnologies } from "./FooterTechnologies";

type Props = {};
function Footer({}: Props) {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col w-full py-10 my-3 rounded-lg ">
      <div className="flex flex-row w-full">
        <div className="w-full md:w-1/2 p-5 flex-flex-col justify-start items-center">
          <Contact />
        </div>
        <div className="w-full h-min md:w-1/2 p-5">
          <Connections />
        </div>
      </div>

      <div
        className={`flex flex-row justify-center align-center align-center gap-x-2 w-full`}
        style={{ fontSize: 16 }}
      >
        <p className="m-0 p-0">{`Made with`}</p>
        <GoHeart
          size={25}
          className="m-0 p-0"
          style={{ color: resolveColor(resolveTheme(theme)) }}
        />
        <p className="m-0 p-0">{`with`}</p>

        <Link
          className="m-0 p-0"
          isExternal
          href="https://nextui.org/"
          showAnchorIcon
          style={{ color: resolveColor(resolveTheme(theme)) }}
        >
          Next.js
        </Link>
      </div>

      <FooterTechnologies />
    </div>
  );
}

export { Footer };
