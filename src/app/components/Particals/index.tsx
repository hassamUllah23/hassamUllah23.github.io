"use client";

import { darkConfig } from "@/app/configs/particles.config";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useState, useEffect } from "react";
import { loadFull } from "tsparticles";

const MyParticles = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    let body = document.querySelector("body");
    if (body) {
      body.setAttribute("data-theme", "dark");
      body.style.backgroundColor = "transparent";
    }
    initParticlesEngine(async (engine) => {
      await loadFull(engine, true);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return init ? <Particles {...darkConfig} /> : null;
};

export default MyParticles;
