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
import { Sacramento } from "next/font/google";
import { Scroll } from "../Scroll";
// import { ThemeSelector } from "../ThemeSelector";

const sacremento = Sacramento({
  weight: "400",
  subsets: ["latin"],
});

function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems: Array<{ label: string; target: string }> = [
    {
      label: "Experience",
      target: "experience",
    },
    {
      label: "Projects",
      target: "projects",
    },
    {
      label: "Connect",
      target: "contact",
    },
  ];

  return (
    <Navbar
      style={{ backgroundColor: "transparent" }}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand className={`${sacremento.className}`}>
        <h1 className="font-bold">Hassam Ullah</h1>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex flex-1" justify="center">
        {menuItems.map((element, index) => {
          {
            return (
              <Scroll key={index} target={element.target}>
                <NavbarItem>
                  <span className="text-white font-semibold">
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
            <Button color="default" variant="flat">
              Get in touch
            </Button>
          </NavbarItem>
        </Scroll>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <Scroll key={index} target={item.target}>
            <NavbarMenuItem>{item.label}</NavbarMenuItem>
          </Scroll>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export { MyNavbar };
