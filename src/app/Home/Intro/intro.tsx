import React from "react";
import { Image } from "@nextui-org/image";
import picture from "../../../assets/picture.jpeg";
import { Typewriter } from "react-simple-typewriter";
import { Dancing_Script, Gulzar, Orbitron } from "next/font/google";
import { Snippet } from "@nextui-org/react";
import { saveAs } from "file-saver";
import { TechnologiesEnum } from "@/app/utils/enums.utils";
// import { picture } from "@/services/assets.service";

type Props = {};
// const inter = Dancing_Script({ weight: "400", subsets: ["latin"] });
const gulzar = Gulzar({ weight: "400", subsets: ["latin"] });
const orbitron = Orbitron({ weight: "400", subsets: ["latin"] });

function Intro({}: Props) {
  const handleDownload = () => {
    const fileUrl = "src/assets/picture.jpeg";
    saveAs(fileUrl, "image.jpeg"); // Adjust filename as needed
  };

  const technologies: Array<TechnologiesEnum> = [
    TechnologiesEnum.react,
    TechnologiesEnum.node,
    TechnologiesEnum.express,
    TechnologiesEnum.mongo,
  ];
  return (
    <main>
      <div
        className={`flex flex-row justify-center content-center w-full`}
        style={{ height: "80vh" }}
      >
        <div className="flex flex-col justify-center content-center w-full">
          <div className="flex flex-row justify-center pb-10">
            <h1
              style={{
                fontSize: 75,
                fontWeight: "bolder",
              }}
            >
              Full Stack Developer
            </h1>
          </div>

          <div
            className={`w-full ${gulzar.className} flex flex-row justify-center`}
            style={{ fontSize: "50px" }}
          >
            <p>{`Hassam   |   حسام`}</p>
          </div>

          <div className="flex flex-row justify-center gap-x-10 content center my-10">
            {technologies.map((technology, index) => {
              return (
                <div key={index} className={`${orbitron.className}`}>
                  <h3>{technology}</h3>
                </div>
              );
            })}
          </div>

          <div
            className="w-full flex flex-row justify-center"
            style={{ cursor: "pointer" }}
            onClick={handleDownload}
          >
            <Snippet className="w-1/3" disableCopy>
              npm i -g my-resume
            </Snippet>
          </div>

        </div>
      </div>
    </main>
  );
}

export { Intro };
