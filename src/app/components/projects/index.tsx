"use client";
import React, { useState } from "react";
import { WrappedProjectItem as ProjectItem } from "./ProjectItem";
import {
  df1,
  df2,
  dfiance,
  fahwa1,
  fahwa2,
  fahwa3,
  fahwa4,
  fahwa5,
  fahwa6,
  fahwa7,
  fahwa8,
  fahwa9,
  tg1,
  tg2,
  tg3,
  th1,
  th2,
  th3,
  xp_bridge_1,
  xpr1,
  xpr2,
  xpr3,
  xpr4,
  esg1,
  esg2,
  esg3,
  esg4,
  esg5,
  esg6,
  dropp3,
  dropp2,
  dropp1,
} from "@/app/services/assets.service";
import { Project, TechnologiesEnum } from "@/app/utils";
import { Element } from "react-scroll";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Card,
  CardHeader,
  Button,
  CardBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { title } from "process";
import { Technologies } from "./Technologies";
import { Slider } from "./ProjectDetail/Slider";

type Props = {};

export function Projects({}: Props) {
  const projects: Array<Project> = [
    {
      title: "dropp.inc",
      subtitle: "An AI Generation Platform.",
      description: `Dropp, a GenAI platform that allows users to generate content using AI seemlessly seamless with affordable AI/Web3 capabilities.       
      
      You can even earn dropp coins by completing easy tasks and climb up the weekly Leaderboards to win Solana NFTs. 
      
      Visit the website https://www.dropp.inc/ for more details.`,
      cover: dropp2.src,
      url: "https://www.dropp.inc/",
      technologies: [
        TechnologiesEnum.docker,
        TechnologiesEnum.kubernetes,
        TechnologiesEnum.next,
        TechnologiesEnum.nest,
        TechnologiesEnum.microservices,
        TechnologiesEnum.rabbitmq,
        TechnologiesEnum.kafka,
        TechnologiesEnum.bullmq,
      ],
      primaryTechnologies: [
        TechnologiesEnum.ai,
        TechnologiesEnum.next,
        TechnologiesEnum.nest,
        TechnologiesEnum.mongo,
      ],
      images: [dropp1.src, dropp2.src, dropp3.src],
    },
    {
      title: "E-SG Cloud",
      subtitle: "A financial reporting solution for enterprise organizations.",
      description: `E-SG Cloud is an E-S-G(Environmental Social & Governmental) reporting solution based on reporting standards defined by EFRAG (European Financial Reporting Advisory Group), an organisation that is responsible for ensuring that International Financial Reporting Standards are responsive to European needs and concerns.

      It makes it easy for you to follow EU standards and handle the complexity of ESG-reporting by giving you a central platform to align the ESG reporting process and store documentation, enabling you to stay ahead of reporting requirements with accurate data ready for audit and your customers.
      
      Visit the website https://app.e-sg.cloud/ or Book a demo at https://e-sg.cloud/`,
      cover: esg1.src,
      url: "https://app.e-sg.cloud/",
      technologies: [
        TechnologiesEnum.elixir,
        TechnologiesEnum.phoenix,
        TechnologiesEnum.liveView,
        TechnologiesEnum.ecto,
        TechnologiesEnum.alpine,
        TechnologiesEnum.tailwind,
        TechnologiesEnum.psql,
      ],
      primaryTechnologies: [
        TechnologiesEnum.elixir,
        TechnologiesEnum.phoenix,
        TechnologiesEnum.psql,
      ],
      images: [esg1.src, esg2.src, esg3.src, esg4.src, esg5.src, esg6.src],
    },
    {
      title: "XP-Bridge",
      subtitle: "A cross-chain NFT bridge",
      description: `XP-Network Cross-Chain NFT Bridge is the world's most powerful Cross-Chain NFT Bridge with the largest list of supported Blockchains and Wallets. It enables users to transfer NFTs between a number of EVM and Non-EVM blockchains through a user-friendly UI developed with React and Node.js. 

      It supports a number of vastly adopted chains like Ethereum, Solana, Algorand, Tron, Aptos, VeChain etc. It also supports a number of vastly adopted Web3 wallets like MetaMask, Phantom Temple Wallet, AlgoSigner, TronLink etc, to enable users to easily connect to their concerned wallet and transfer NFTs.
      
      Visit the website at https://bridge.xp.network/ or view the documentation at https://docs.xp.network/`,
      cover: xp_bridge_1.src,
      url: "https://explorer.xp.network/",
      technologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.redux,
        TechnologiesEnum.web3,
        TechnologiesEnum.ethers,
        TechnologiesEnum.aws_s3,
      ],
      primaryTechnologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.node,
        TechnologiesEnum.ethereum,
      ],
      images: [xp_bridge_1.src],
    },

    {
      title: "Telegram",
      subtitle: "A ChatGPT-based conversation generation tool for Telegram.",
      description:
        "A browser-based user interface that generates conversations through ChatGPT and populates them in Telegram chat groups using TelegramBot API and Puppeteer.",
      cover: tg1.src,
      url: "",
      technologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.vite,
        TechnologiesEnum.redux,
        TechnologiesEnum.node,
        TechnologiesEnum.mongo,
        TechnologiesEnum.docker,
        TechnologiesEnum.aws_ec2,
        TechnologiesEnum.socket,
        TechnologiesEnum.pm2,
        TechnologiesEnum.chatGpt,
        TechnologiesEnum.puppeteer,
        TechnologiesEnum.telegram,
      ],
      primaryTechnologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.node,
        TechnologiesEnum.mongo,
      ],
      images: [tg1.src, tg2.src, tg3.src],
    },

    {
      title: "XP-Rush",
      subtitle: "A NFT ",
      description:
        "A Web3 based game that revolves around collecting and moving NFTs from one blockchain to another using XP Netowrk's NFT bridge.",
      cover: xpr3.src,
      url: "",
      technologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.vite,
        TechnologiesEnum.redux,
        TechnologiesEnum.node,
        TechnologiesEnum.mongo,
        TechnologiesEnum.docker,
        TechnologiesEnum.aws_ec2,
        TechnologiesEnum.socket,
        TechnologiesEnum.pm2,
        TechnologiesEnum.chatGpt,
        TechnologiesEnum.puppeteer,
        TechnologiesEnum.telegram,
      ],
      primaryTechnologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.node,
        TechnologiesEnum.mongo,
      ],
      images: [xpr1.src, xpr2.src, xpr3.src],
    },

    {
      title: "Tec Helper",
      subtitle:
        "A freelance platform to connect customers with IT service rpoviders.",
      description:
        "A platform where customers can acquire services from Tec Helpers i.e. freelance IT service providers by making online appointments enabled through Agora SDK's video calling feature.",
      cover: th1.src,
      url: "http://tec-helper.de/",
      technologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.node,
        TechnologiesEnum.mongo,
        TechnologiesEnum.agora,
      ],
      primaryTechnologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.node,
        TechnologiesEnum.mongo,
      ],
      images: [th1.src, th2.src, th3.src],
    },

    {
      title: "Fahwa.io",
      subtitle: "AI-based Arabic and English content creation tool.",
      description: `A content generation tool for Arabic and English language, useful for creating a wide range of content ranging from LinkedIn post, emails, Instagram post captions, Twitter threads etc.
        
        Features include Content generation, Spell checking, Paraphrasing etc.
        
        Also, the ChatGPT HTTP API integrated in it allows users to utilize the full power of ChatGPT inside our application.`,
      cover: fahwa1.src,
      url: "https://fahwa.io/",
      technologies: [
        TechnologiesEnum.nest,
        TechnologiesEnum.next,
        TechnologiesEnum.mongo,
        TechnologiesEnum.firebase,
      ],
      primaryTechnologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.node,
        TechnologiesEnum.mongo,
      ],
      images: [
        fahwa1.src,
        fahwa2.src,
        fahwa3.src,
        fahwa4.src,
        fahwa5.src,
        fahwa6.src,
        fahwa7.src,
        fahwa8.src,
        fahwa9.src,
      ],
    },

    {
      title: "DFiance Admin Portal",
      subtitle: "Admin portal for a Web3-based card game.",
      description:
        "DFiance is a Web3-based card game where you can buy and upgrade cards using digital currencies.",
      cover: dfiance.src,
      url: "https://dfiance.com/",
      technologies: [
        TechnologiesEnum.nest,
        TechnologiesEnum.next,
        TechnologiesEnum.mongo,
        TechnologiesEnum.ethers,
        TechnologiesEnum.web3,
      ],
      primaryTechnologies: [
        TechnologiesEnum.react,
        TechnologiesEnum.nest,
        TechnologiesEnum.mongo,
      ],
      images: [dfiance.src, df1.src, df2.src],
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelect = (project: Project) => {
    setSelectedProject(() => project);
  };

  return (
    <Element name="projects">
      <div
        id="projects"
        className="flex flex-row flex-wrap items-stretch justify-center gap-3 py-1"
      >
        {projects.map((project, index) => {
          return (
            <div
              className="w-full sm:w-1/3 md:w-1/4"
              onClick={() => {
                handleSelect(project);
                onOpen();
              }}
            >
              <ProjectItem
                key={index}
                {...project}
                tooltipText={project.subtitle}
              />
            </div>
          );
        })}

        <Modal isOpen={isOpen} size={"4xl"} onClose={onClose}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {selectedProject?.title}
                </ModalHeader>
                <ModalBody>
                  {selectedProject && (
                    <div className="flex w-full flex-col gap-x-2">
                      <div className="w-full pb-5">
                        <Technologies
                          justify="start"
                          technologies={selectedProject?.primaryTechnologies}
                        />
                        {/* <h4 className="w-full overflow-y-hidden truncate whitespace-nowrap py-3 text-tiny">
                          {selectedProject?.description}
                        </h4> */}
                        <p className="pt-4 text-small">
                          {selectedProject?.description}
                        </p>{" "}
                      </div>
                      <div className="max-h[500px] w-full">
                        <Slider
                          images={selectedProject?.images}
                          maxHeight={500}
                        />
                      </div>
                    </div>

                    // <Card className="h-full min-h-full w-full bg-stone-950 p-1 py-4 shadow">
                    //   <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
                    //     <h4 className="text-lg font-bold uppercase">
                    //       {selectedProject?.title}
                    //     </h4>
                    //     <Technologies
                    //       justify="start"
                    //       technologies={selectedProject?.primaryTechnologies}
                    //     />
                    //     <h4 className="w-full overflow-y-hidden truncate whitespace-nowrap py-3 text-tiny">
                    //       {selectedProject?.subtitle}
                    //     </h4>
                    //   </CardHeader>
                    //   <CardBody className="w-full overflow-visible py-2 brightness-90">
                    //     {/* <Image
                    //   alt="Card background"
                    //   src={cover}
                    //   width={"100%"}
                    //   className="w-full rounded-xl object-cover "
                    //   style={{ maxHeight: "100px", width: "100%" }}
                    // /> */}
                    //   </CardBody>
                    // </Card>
                  )}
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </Element>
  );
}
