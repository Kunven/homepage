import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun, FaLinkedin, FaGithub } from "react-icons/fa";

let  lang_en = require('../translation/en.json')
let lang = lang_en
export default function Topbar(props:any) {  
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)    
  }, [])
  if(!mounted) return null    
  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarItem>
            <Link color="foreground" href="https://www.linkedin.com/in/kunven/" target="_blank">
              <FaLinkedin size="25px"/>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="https://github.com/Kunven" target="_blank">
              <FaGithub size="25px"/>
            </Link>
          </NavbarItem>
      </NavbarContent>
      <NavbarContent className=" sm:flex gap-4" justify="end">
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
        <NavbarItem className="mt-1">
          <Link color="foreground" href="#">
            {theme == 'dark' ? <FaMoon onClick={() => setTheme('light')}/>
             :  <FaSun onClick={() => setTheme('dark')}/>}
          </Link>                    
        </NavbarItem>        
      </NavbarContent>      
    </Navbar>
  )
}
