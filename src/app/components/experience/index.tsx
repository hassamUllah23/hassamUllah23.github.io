import React, { useEffect } from "react";
import ScrollContainer from "@/app/components/ScrollContainer";
import { Chrono, TimelineItem } from "react-chrono";
import { useTheme } from "next-themes";
import { resolveColor, resolveTheme } from "@/app/utils";

type Props = {};

function Experience({}: Props) {
  const items: Array<TimelineItem> = [
    {
      title: "March 1st, 2022",
      cardTitle: "Codegenio",
      url: "https://www.linkedin.com/company/codinggenio/about/",
      cardSubtitle:
        "My first professional employment. Got to learn the importance of teamwork and trusting your peers to ensure achieving work-related milestones on time. Also learnt the importance of staying true to the standard practices in coding and overall work management.",
      cardDetailedText: [
        "- Wrote and maintained TypeScript code for full-scale Angular projects.",
        "- Learnt to utilize DevTools to maximize productivity.",
        "- Learnt Angular-Marerial and Ngx-Bootstrap modules for UI.",
      ],
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
    },

    {
      title: "January 1st, 2023",
      cardTitle: "Joined Krypto-Hive",
      url: "https://kryptohive.com/",
      cardSubtitle:
        "A services-based software development company with its primary focus around Web3 solutions, ranging from NFT Marketplace, to a Multi-Chain NFT Bridge.",
      cardDetailedText: [],
    },

    {
      title: "January 1st, 2024",
      cardTitle: "Joined Softteams a/s",
      url: "http://www.softteams.com/",
      cardSubtitle:
        "A services-based software development firm with its main focus on web development, specifically in elixir.",
      cardDetailedText: ["- I learned nest", "- I learned nest"],
    },
  ];

  const { theme } = useTheme();

  useEffect(() => {}, [theme]);
  return (
    <div id="experience">
      <ScrollContainer>
        <div style={{ width: "100%", height: "100%" }}>
          <Chrono
            mode={"VERTICAL_ALTERNATING"}
            items={items}
            theme={{
              color: "white",
              primary: "white",
              secondary: "white",
              cardBgColor: "white",
              titleColor: resolveColor(resolveTheme(theme)),
              cardTitleColor: resolveColor(resolveTheme(theme)),
              cardSubtitleColor: "black",
              cardContentColor: "black",
              cardDetailsColor: "black",
              cardHeight: "100px",
            }}
            activeItemIndex={-1}
            borderLessCards={true}
            hideControls
          ></Chrono>
        </div>
      </ScrollContainer>
    </div>
  );
}

export { Experience };
