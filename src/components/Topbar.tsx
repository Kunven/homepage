import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

let  lang = require('../translation/en.json')  
export default function Topbar() {  
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)    
  }, [])
  if(!mounted) return null

  return (
    <Navbar>
      <NavbarBrand>
        Aqui va el logo
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#home">
            {lang.home}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#aboutMe" color="foreground">
            {lang.about_me}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#skills">
            {lang.skills}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contact">
            {lang.contact}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            {theme == 'dark' ? <FaMoon onClick={() => setTheme('light')}/>
             :  <FaSun onClick={() => setTheme('dark')}/>}
          </Link>                    
        </NavbarItem>
      </NavbarContent>      
    </Navbar>
  )
}
