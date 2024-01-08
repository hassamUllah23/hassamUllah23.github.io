import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Switch,
} from "@nextui-org/react";
import { Sacramento } from "next/font/google";
import { MoonIcon } from "./moon";
import { SunIcon } from "./sun";
import { useTheme } from 'next-themes'

const sacremento = Sacramento({
  weight: "400",
  subsets: ["latin"],
});

function MyNavbar() {

  const { theme, setTheme } = useTheme()

  const toggleDarkMode = (isSelected:boolean)=>{
    setTheme( isSelected ? 'dark' : 'light')
  }
  return (
    <Navbar style={{backgroundColor:'transparent'}}>
      <NavbarBrand className={`${sacremento.className}`}>
        <h1 className="font-bold">Hassam Ullah</h1>
      </NavbarBrand>
      <NavbarContent className="" justify="end">
        <Switch
          defaultSelected
          onValueChange={toggleDarkMode}
          size="sm"
          color="default"
          startContent={<SunIcon />}
          endContent={<MoonIcon />}
        />
        <NavbarItem>
          <Link color="foreground" href="#">
            Projects
          </Link>
        </NavbarItem>
        {/* <NavbarItem isActive> */}
        <NavbarItem>
          <Link href="#" color="foreground" aria-current="page">
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Connect
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export { MyNavbar };
