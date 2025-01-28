"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { Orbitron } from "next/font/google";
import { Scroll } from "../Scroll";
import { animateScroll as scroll } from "react-scroll";
import { calendly } from "@/app/services/assets.service";
import { MyTooltip } from "../Tooltip";
// import { ThemeSelector } from "../ThemeSelector";

const orbitron = Orbitron({ weight: "400", subsets: ["latin"] });

function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems: Array<{ label: string; target: string }> = [
    {
      label: "Projects",
      target: "projects",
    },
    {
      label: "Skills",
      target: "skills",
    },
    {
      label: "Experience",
      target: "experience",
    },
  ];

  const handleButtonClick = () => {
    scroll.scrollToBottom();
  };

  return (
    <Navbar
      style={{ backgroundColor: "transparent" }}
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      shouldHideOnScroll
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand className={`${orbitron.className}`}>
        <h1 className="capitalize">Hassam Ullah</h1>
      </NavbarBrand>
      <NavbarContent className="hidden flex-1 sm:flex" justify="center">
        {menuItems.map((element, index) => {
          {
            return (
              <Scroll key={index} target={element.target}>
                <NavbarItem>
                  <span className="font-semibold text-white">
                    {element.label}
                  </span>
                </NavbarItem>
              </Scroll>
            );
          }
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <ThemeSelector /> */}
        <Scroll target={"contact"}>
          <NavbarItem>
            <div className="flex w-max flex-row items-center gap-3">
              <MyTooltip text={"Setup a meeting"}>
                <a
                  href="https://calendly.com/hassamullah/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={calendly.src} width={35} height={"auto"} alt="" />
                </a>
              </MyTooltip>
              <Button
                onClick={handleButtonClick}
                variant="flat"
                color="default"
              >
                Get in touch
              </Button>
            </div>
          </NavbarItem>
        </Scroll>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <Scroll key={index} target={item.target}>
            <NavbarMenuItem
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              {item.label}
            </NavbarMenuItem>
          </Scroll>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export { MyNavbar };
