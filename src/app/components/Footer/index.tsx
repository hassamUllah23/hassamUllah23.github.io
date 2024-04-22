import React from "react";
import { Link } from "@nextui-org/react";
import { GoHeart } from "react-icons/go";
import { Connections } from "..";
import { resolveColor, resolveTheme } from "@/app/utils";
import { Contact } from "../Contact";
import { useTheme } from "next-themes";
import { FooterTechnologies } from "./FooterTechnologies";
import { TfiEmail } from "react-icons/tfi";
import { calendly, whatsAppButton } from "@/app/services/assets.service";
import { MdPhone } from "react-icons/md";

type Props = {};
function Footer({}: Props) {
  const { theme } = useTheme();
  return (
    <div className="mt-3 flex w-full flex-col rounded-lg pt-10 md:mt-20">
      <div className="mb-10 flex w-full flex-row flex-wrap justify-center gap-20">
        <div className="flex w-full flex-col items-center justify-start px-5 md:w-1/3 md:px-0">
          <Contact />
        </div>
        <div className="flex w-full flex-col items-center md:w-1/3">
          <div className="h-min w-full">
            <Connections />
          </div>
          <div className="flex w-full flex-col items-center gap-5 md:items-start">
            <Link href="https://calendly.com/hassamullah/30min" target="_blank">
              <div className="flex w-fit flex-row items-center justify-center gap-3 rounded-lg bg-white/10 p-2 md:justify-start">
                <img src={calendly.src} width={35} height={"auto"} alt="" />
                <p className="text-sm font-bold">Setup a meeting</p>
              </div>
            </Link>

            <div className="flex w-full flex-row justify-center md:justify-start">
              <Link href="https://wa.me/+923105187828" target="_blank">
                <img src={whatsAppButton.src} alt="" />
              </Link>
            </div>
            <div className="flex w-fit flex-row items-center justify-start gap-5">
              <MdPhone color="white" size={"20px"} />
              <p className="md:text-normal text-tiny sm:text-sm">
                +92 310 5187828
              </p>
            </div>
            <div className="flex w-fit flex-row items-center justify-start gap-5">
              <TfiEmail color="white" size={"20px"} />
              <p className="md:text-normal text-tiny sm:text-sm">
                malikhassamullah1@yahoo.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`align-center align-center flex w-full flex-row items-center justify-center gap-x-2`}
        style={{ fontSize: 16 }}
      >
        <p className="md:text-normal m-0 p-0 text-tiny sm:text-sm">{`Made with`}</p>
        <GoHeart
          size={25}
          className="m-0 p-0"
          style={{ color: resolveColor(resolveTheme(theme)) }}
        />
        <p className="md:text-normal m-0 p-0 text-tiny sm:text-sm">{`with`}</p>

        <Link
          className="md:text-normal m-0 p-0 text-tiny sm:text-sm"
          isExternal
          href="https://nextui.org/"
          showAnchorIcon
          // style={{ color: resolveColor(resolveTheme(theme)) }}
        >
          Next.js
        </Link>
      </div>

      <FooterTechnologies />
    </div>
  );
}

export { Footer };
