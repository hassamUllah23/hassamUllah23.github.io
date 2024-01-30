import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";
import { Element } from "react-scroll";
import { Link } from "@nextui-org/react";

type Props = {};

type TimeLineData = {
  date: string;
  company: string;
  subtitle: string;
  bullets: Array<string>;
  url: string;
};

function Experience({}: Props) {
  const items: Array<TimeLineData> = [
    {
      date: "March 1st, 2022",
      company: "Codegenio",
      url: "https://www.linkedin.com/company/codinggenio/about/",
      subtitle:
        "My first professional employment. Got to learn the importance of teamwork and trusting your peers to ensure achieving work-related milestones on time. Also learnt the importance of staying true to the standard practices in coding and overall work management.",
      bullets: [
        "Wrote and maintained TypeScript code for full-scale Angular projects.",
        "Learnt to utilize DevTools to maximize productivity.",
        "Learnt Angular-Marerial and Ngx-Bootstrap modules for UI.",
      ],
    },

    {
      date: "July 1st, 2022",
      company: "Joined Protovoid Technologies",
      url: "https://protovoid.com/",
      subtitle:
        "A services-based software development firm with its main focus on web development, specifically in elixir.",
      bullets: [
        "Built deployment-ready back-end with Nestjs and Nodejs",
        "Learnt Docker basics to utilize containerization for CI/CD.",
        "Learnt to integrate Stripe and PayPal payment gateway to enable in-app-payments.",
        "Learnt to use GitHub web and desktop clients to maintain and re-use code effectively.",
        "Learnt deployment on AWS and DigitalOcean Instances.",
        "Learnt AWS S3 service for file storage.",
      ],
    },

    {
      date: "January 1st, 2023",
      company: "Joined Krypto-Hive",
      url: "https://kryptohive.com/",
      subtitle:
        "A services-based software development company with its primary focus around Web3 solutions, ranging from NFT Marketplace, to a Multi-Chain NFT Bridge.",
      bullets: [],
    },

    {
      date: "January 1st, 2024",
      company: "Joined Softteams a/s",
      url: "http://www.softteams.com/",
      subtitle:
        "A services-based software development firm with its main focus on web development, specifically in elixir.",
      bullets: ["I learned nest", "I learned nest"],
    },
  ];

  return (
    <div id="experience">
      <Element name="experience">
        <Timeline position="right">
          {items.map((element, index) => {
            return (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "end",
                  }}
                >
                  <span className="text-tiny sm:text-sm md:text-normal">
                    {element.date} -{" "}
                    <Link href={element.url} target="_blank" isExternal showAnchorIcon>
                      {element.company}
                    </Link>
                  </span>
                </TimelineOppositeContent>
                <TimelineSeparator sx={{ minHeight: "150px" }}>
                  <TimelineConnector />
                  <TimelineDot color="inherit" variant="outlined">
                    <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                    py: "12px",
                    px: 2,
                  }}
                  className="w-1/2"
                >
                  <Typography className="text-tiny sm:text-sm md:text-normal w-full md:w-2/3">
                    {element.subtitle}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Element>
    </div>
  );
}

export { Experience };
