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
import { LongText } from "../LongText";

type Props = {};

type TimeLineData = {
  date: string;
  company: string;
  subtitle: string;
  jobTitle: string;
  bullets: Array<string>;
  url: string;
};

function Experience({}: Props) {
  const items: Array<TimeLineData> = [
    {
      date: "January 1st, 2024",
      company: "Softteams a/s",
      url: "http://www.softteams.com/",
      subtitle:
        "A services-based software development firm with its main focus on web development, specifically in Elixir programming language.",
      bullets: ["I learned nest", "I learned nest"],
      jobTitle: "Full Stack Developer",
    },
    {
      date: "January 1st, 2023",
      company: "Krypto-Hive",
      url: "https://kryptohive.com/",
      subtitle:
        "A services-based software development company with its primary focus around Web3 solutions, ranging from NFT Marketplace, to a Multi-Chain NFT Bridge.",
      bullets: [],
      jobTitle: "Full Stack Developer",
    },
    {
      date: "February 1st, 2022",
      company: "Protovoid Technologies",
      jobTitle: "MERN Stack Developer",
      url: "https://protovoid.com/",
      subtitle:
        "First employment as a Full-stack developer. Also the first experience with Nextjs and Nestjs",
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
      date: "March 1st, 2021",
      company: "Codegenio",
      url: "https://www.linkedin.com/company/codinggenio/about/",
      subtitle: `First professional employment, learned Angular 12 through CodeGenio training and collaboration with experienced devs. Emphasized teamwork, trust, and adherence to coding standards for timely project completion.`,
      bullets: [
        "Wrote and maintained TypeScript code for full-scale Angular projects.",
        "Learnt to utilize DevTools to maximize productivity.",
        "Learnt Angular-Marerial and Ngx-Bootstrap modules for UI.",
      ],
      jobTitle: "Angular Developer",
    },
    {
      date: "November 1st,",
      company: "DOTLESS",
      url: "https://www.linkedin.com/company/dotless-official/about/",
      subtitle: `Developed native Android applications with Java using Android Studio. Contributed to the development of high-quality Android applications from concept to deployment. Participated in the full software development lifecycle, including requirement analysis, design, coding, testing and debugging of Java based android applications, collaborating closely with senior developers, designers, and product manager.`,
      bullets: [
        "Wrote and maintained TypeScript code for full-scale Angular projects.",
        "Learnt to utilize DevTools to maximize productivity.",
        "Learnt Angular-Marerial and Ngx-Bootstrap modules for UI.",
      ],
      jobTitle: "Android Developer",
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
                  className="p-1 md:p-5"
                >
                  <span className="md:text-normal text-[10px] sm:text-sm">
                    {/* {element.date} -{" "} */}
                    <Link
                      href={element.url}
                      target="_blank"
                      isExternal
                      showAnchorIcon
                      className="md:text-normal text-[10px] sm:text-sm"
                    >
                      {element.company}
                    </Link>
                  </span>
                </TimelineOppositeContent>
                <TimelineSeparator sx={{ minHeight: "150px" }}>
                  <TimelineConnector />
                  <TimelineDot color="inherit" variant="outlined">
                    <LaptopMacIcon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
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
                  className="w-1/2 p-1 md:p-5"
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-medium font-bold">{element.jobTitle}</p>
                    <LongText
                      text={element.subtitle}
                      style="md:text-normal w-full text-[10px] sm:text-sm md:w-2/3"
                    />
                  </div>
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
