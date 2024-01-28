import React from "react";
import { Link } from "@nextui-org/react";
import { GoHeart } from "react-icons/go";
import { Connections } from "..";
import { resolveColor, resolveTheme } from "@/app/utils";
import { Contact } from "../Contact";
import { useTheme } from "next-themes";
import { FooterTechnologies } from "./FooterTechnologies";
import { TfiEmail } from "react-icons/tfi";
import { whatsAppButton } from "@/app/services/assets.service";
import { MdPhone } from "react-icons/md";

type Props = {};
function Footer({}: Props) {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col w-full pt-10 mt-3 md:mt-20 rounded-lg">
      <div className="flex flex-row w-full mb-10 flex-wrap">
        <div className="w-full md:w-1/2 p-5 flex flex-col justify-start items-center">
          <Contact />
        </div>
        <div className="flex flex-col w-full md:w-1/2 items-start px-5">
          <div className="w-full h-min  py-5">
            <Connections />
          </div>
          <div className="flex flex-col gap-5 items-center w-full">
            <div className="flex flex-row justify-center sm:justify-start">
              <Link href="https://wa.me/+923105187828" target="_blank">
                <img src={whatsAppButton.src} alt="" />
              </Link>
            </div>
            <div className="flex flex-row justify-start items-center gap-5">
              <MdPhone color="white" size={"20px"} />
              <p>+92 310 5187828</p>
            </div>
            <div className="flex flex-row justify-start items-center gap-5">
              <TfiEmail color="white" size={"20px"} />
              <p>malikhassamullah1@yahoo.com</p>
            </div>
          </div>
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
