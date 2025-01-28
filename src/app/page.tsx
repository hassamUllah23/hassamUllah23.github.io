"use client";
// import { useEffect } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";
import {
  MyNavbar,
  Experience,
  Footer,
  Intro,
  Projects,
  Counts,
  Skills,
} from "./components";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFull } from "tsparticles";
import { ThemeProvider, useTheme } from "next-themes";
import { ThemesEnum } from "./utils";
import { Divider } from "./components/Divider";
import { Element } from "react-scroll";
import MyParticles from "./components/Particals";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { theme } = useTheme();

  // const [init, setInit] = useState(false);
  // useEffect(() => {
  //   let body = document.querySelector("body");
  //   if (body) {
  //     body.setAttribute("data-theme", "dark");
  //     body.style.backgroundColor = "transparent";
  //   }
  //   initParticlesEngine(async (engine) => {
  //     await loadFull(engine, true);
  //   }).then(() => {
  //     // setInit(true);
  //   });
  // }, []);

  // useEffect(() => {
  //   console.info("THEME CHANGED");
  // }, [theme]);
  return (
    <ThemeProvider themes={Array.from(Object.values(ThemesEnum))}>
      <NextUIProvider>
        <main
          className={`${inter.className} ${theme}`}
          style={{ backgroundColor: "transparent" }}
        >
          <MyNavbar />
          <div
            className="px-3 sm:px-5 md:px-20"
            style={{ backgroundColor: "transparent" }}
          >
            <MyParticles />
            {/* {init && <Particles {...darkConfig} />} */}
            <Intro />
            <Counts />
            <Element name="projects">
              <Divider title="Projects" />
            </Element>
            <Projects />
            <Element name="skills">
              <Divider title="Skills" />
            </Element>
            <Skills />
            <Element name="experience">
              <Divider title="Work Experience" />
            </Element>
            <Experience />
          </div>
          <Element name="contact">
            <Footer />
          </Element>
        </main>
      </NextUIProvider>
    </ThemeProvider>
  );
}
