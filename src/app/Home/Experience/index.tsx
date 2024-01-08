import ScrollContainer from "@/app/components/ScrollContainer";
import {
  codegenio_logo,
  khive_logo,
  protvoid_logo,
  softteams_logo,
} from "@/app/services/assets.service";
import React from "react";
import { Chrono, TimelineItem } from "react-chrono";

type Props = {};

export default function Experience({}: Props) {
  const items: Array<TimelineItem> = [
    {
      title: "March 1st, 2022 - Joined Codegenio",
      cardTitle: "Codegenio",
      url: "https://www.linkedin.com/company/codinggenio/about/",
      // date:"2023-01-05",
      cardSubtitle:
        "My first professional employment. Got to learn the importance of teamwork and trusting your peers to ensure achieving work-related milestones on time. Also learnt the importance of staying true to the standard practices in coding and overall work management.",
      cardDetailedText: [
        "- Wrote and maintained TypeScript code for full-scale Angular projects.",
        "- Learnt to utilize DevTools to maximize productivity.",
        "- Learnt Angular-Marerial and Ngx-Bootstrap modules for UI.",
      ],
      media: {
        type: "IMAGE",
        source: {
          url: codegenio_logo.src,
        },
      },
    },

    {
      title: "July 1st, 2022",
      cardTitle: "Joined Protovoid Technologies",
      url: "https://protovoid.com/",
      cardSubtitle:
        "A services-based software development firm with its main focus on web development, specifically in elixir.",
      cardDetailedText: [
        "- Built deployment-ready back-end with Nestjs and Nodejs",
        "- Learnt Docker basics to utilize containerization for CI/CD.",
        "- Learnt to integrate Stripe and PayPal payment gateway to enable in-app-payments.",
        "- Learnt to use GitHub web and desktop clients to maintain and re-use code effectively.",
        "- Learnt deployment on AWS and DigitalOcean Instances.",
        "- Learnt AWS S3 service for file storage.",
      ],
      media: {
        type: "IMAGE",
        source: {
          url: protvoid_logo.src,
        },
      },
    },

    {
      title: "January 1st, 2023",
      cardTitle: "Joined Krypto-Hive",
      url: "https://kryptohive.com/",
      cardSubtitle:
        "A services-based software development company with its primary focus around Web3 solutions, ranging from NFT Marketplace, to a Multi-Chain NFT Bridge.",
      cardDetailedText: [],
      media: {
        type: "IMAGE",
        source: {
          url: khive_logo.src,
        },
      },
    },

    {
      title: "January 1st, 2024",
      cardTitle: "Joined Softteams a/s",
      url: "http://www.softteams.com/",
      cardSubtitle:
        "A services-based software development firm with its main focus on web development, specifically in elixir.",
      cardDetailedText: ["- I learned nest", "- I learned nest"],
      media: {
        type: "IMAGE",
        source: {
          url: softteams_logo.src,
        },
      },
    },
  ];
  return (
    <>
      <ScrollContainer>
        <div style={{ width: "100%", height: "100%" }}>
          <Chrono
            items={items}
            mode={"VERTICAL_ALTERNATING"}
            slideItemDuration={3000}
            theme={{
              primary: "white",
              secondary: "lightgreen",
              cardBgColor: "whitesmoke",
              titleColor: "green",
              cardTitleColor: "green",
              titleColorActive: "white",
              cardHeight: "100px",
            }}
            allowDynamicUpdates
            enableDarkToggle
            enableOutline
            slideShow
          >
            <div className="chrono-icons">
              <img src="image1.svg" alt="image1" />
              <img src="image2.svg" alt="image2" />
            </div>
          </Chrono>
        </div>
      </ScrollContainer>
    </>
  );
}
