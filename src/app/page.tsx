"use client";
import Image from "next/image";
import { NextUIProvider } from "@nextui-org/react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
import { config as particlesConfig } from "./configs/particlesjs-config";
import { loadSlim } from "@tsparticles/slim";
import { BaseButton } from "./components/button";
import { useCallback, useEffect, useState } from "react";
import { MyNavbar } from "./components/Navbar";
import { HomePage } from "./Home/home";
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";
import { loadFull } from "tsparticles";
import Particles, { initParticlesEngine } from "@tsparticles/react";

export default function Home() {
  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine, true);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return (
    <div>
      <NextUIProvider>
        <ThemeProvider>
          <main className="p-2">
            {<Particles options={particlesConfig} />}

            {/* <main className="flex min-h-screen flex-col items-center justify-between "> */}
            <MyNavbar />
            <div className="px-10" style={{ backgroundColor: "transparent" }}>
              <HomePage />
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </NextUIProvider>
    </div>
  );
}
