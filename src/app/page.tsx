"use client";
import Topbar from "../components/Topbar";
import {Card, CardBody, Button, Link} from "@nextui-org/react";
import Image from 'next/image'
import { SiNextdotjs, SiTypescript, SiReact, SiAwsamplify, SiVuedotjs, SiAngularjs, SiAmazonaws, SiFastapi, 
  SiPostgresql, SiMongodb,SiBlazor, SiGooglemaps, SiLoopback, SiExpress, SiCsharp,SiLinkedin, SiGithub, 
  SiTailwindcss, SiFirebase } from "react-icons/si";

let  lang = require('../translation/en.json')  
export default function Home() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-orange-500">
      <Topbar/>
      <div className="bg-gradient-to-r from-red-600 to-orange-500 m-5">
        <Card id="home">          
          <CardBody className="grid grid-cols-2  content-center max-w-7xl mx-auto px-8 justify-center h-full">
            <div className="align-middle my-20">
              <p className="text-6xl">Hello! My name is <span className="text-red-600">Luis</span> And I&apos;m a FullStack Developer!</p>
              <p className="text-3xl mt-5">I made this website as a way of showing my skills. I&apos;ve developed web, desktop and mobile applications with various technologies over the years. I&apos;ve also used cloud technologies like AWS and Google Cloud</p>
              <div className="my-4 -mx-1 flex space-x-2">
                <Button
                  as={Link}
                  href="#contact"
                  className="bg-gradient-to-r from-red-600 to-orange-500 "
                >
                  Hire me!
                </Button>
                  <Button
                    as={Link}
                    href="https://drive.google.com/file/d/1-I7HW0HncenV3wZ2c03p5Bix_uNgfb_l/view?usp=drive_link"
                    target="_blank"
                    color="default" variant="bordered"
                  >
                    Download CV
                  </Button>
              </div>
            </div>
            <div className="ml-32 mt-10">
              <Image
                className="rounded-full bg-gradient-to-r from-red-600 to-orange-500"
                width={400}
                height={400}
                alt="Failed Load"
                src="/homepage/pfp.png"
              />
            </div>                      
          </CardBody>
        </Card>
        <Card className="mt-5" id="aboutMe">          
          <CardBody className="content-center max-w-7xl mx-auto px-8 justify-center h-full my-20">
            <p className="text-6xl underline underline-offset-8 decoration-red-600">About me</p>  
            <div className="grid grid-cols-2  content-center mx-auto justify-center h-full">
              <p className="text-3xl mt-5">
                I&apos;m a very <span className="text-red-600">passionate</span> developer. I have been tinkering with computers and software since basically forever, so I basically <span className="text-red-600">love</span> what I do.
                That love and passion allows me to be very <span className="text-red-600">detailed</span> when I write code to my clients.
              </p>
              <div className="grid grid-cols-1 grid-rows-2">
                <p className="text-3xl mt-5 ml-5">
                  This website was developed, and it&apos;s being maintained by me. It uses the following techologies:                  
                </p>
                <p className="text-3xl mt-5 mx-auto grid grid-cols-5 grid-rows-1 gap-x-10">
                  <SiNextdotjs size="2em" title="Next"/>
                  <SiReact size="2em" title="React"/>
                  <SiTypescript size="2em" title="Typescript"/>
                  <SiAwsamplify size="2em" title="AWS Amplify"/>
                  <SiTailwindcss size="2em" title="Tailwind"/>
                </p>
              </div>             
            </div>        
          </CardBody>
        </Card>
        <Card className="mt-5" id="skills">          
          <CardBody className="content-center max-w-7xl mx-auto px-8 justify-center h-full my-20">
            <p className="text-6xl underline underline-offset-8 decoration-red-600">Skills</p>
            <div className="grid grid-cols-1  content-center mx-auto justify-center h-full gap-4">
              <p className="text-3xl mt-5">
                I&apos;ve used a lot of frameworks, libraries, public APIs, technologies over the years. Here&apos;s a short list of the ones that I consider noteworthy.
              </p>              
              <div className="text-4xl mt-5 grid grid-cols-4 mx-auto grid-rows-1 gap-x-44 gap-y-12">
                  <SiReact size="2em" title="React"/><SiVuedotjs size="2em" title="Vue"/><SiAngularjs size="2em" title="Angular"/><SiNextdotjs size="2em" title="Next"/>                  
                  <SiTypescript size="2em" title="Typescript"/><SiFirebase size="2em" title="Firebase"/><SiAmazonaws size="2em" title="Amazon Web Services"/><SiFastapi size="2em" title="FastAPI"/>                  
                  <SiLoopback size="2em" title="Loopback"/><SiExpress size="2em" title="Express"/><SiBlazor size="2em" title="Blazor"/><SiCsharp size="2em" title="C Sharp"/>
                  <SiPostgresql size="2em" title="PostgreSQL"/><SiMongodb size="2em" title="MongoDB"/><SiTailwindcss size="2em" title="Tailwind"/><SiGooglemaps size="2em" title="Google Maps API"/>
                </div>
            </div>        
          </CardBody>
        </Card>
        <Card className="mt-5" id="contact">
          <CardBody className="content-center max-w-7xl mx-auto px-8 justify-center h-full my-20">
            <p className="text-6xl underline underline-offset-8 decoration-red-600">Contact</p>
            <div className="grid grid-cols-1 gap-4">
              <p className="text-4xl mt-5">
                Want to contact me? Find me on my socials
              </p>
              <div className="text-4xl mt-5 grid grid-cols-2 grid-rows-1 gap-x-44 mx-auto">                  
                    <Button
                      className="bg-gradient-to-r from-red-600 to-orange-500 "
                      as={Link}
                      size="lg"
                      target="_blank"
                      href="https://www.linkedin.com/in/kunven/"
                      >                      
                      <SiLinkedin size="2em" title="LinkedIn"/>
                    </Button>
                    <Button
                      className="bg-gradient-to-r from-red-600 to-orange-500"
                      as={Link}
                      size="lg"
                      target="_blank"
                      href="https://github.com/Kunven"
                      >                      
                      <SiGithub size="2em" title="GitHub"/>
                    </Button>
                  
                </div>
                
            </div>
            <div className="grid grid-cols-1 gap-4">
              <p className="text-4xl mt-5">
                Want my work history, and detailed info about my skills? Download my CV
              </p>
              <div className="text-4xl mt-5 grid grid-cols-1 grid-rows-1 gap-x-44 mx-auto">                  
                  <Button
                    className="bg-gradient-to-r from-red-600 to-orange-500 "
                    as={Link}
                    href="https://drive.google.com/file/d/1-I7HW0HncenV3wZ2c03p5Bix_uNgfb_l/view?usp=drive_link"
                    size="lg"
                    target="_blank"
                    color="default"
                  >
                    Here&apos;s my CV!
                  </Button>

                </div>
                
            </div>
            <div className="grid grid-cols-1 gap-4">
              <p className="text-4xl mt-5">
                I look forward to hearing from you!
              </p>              
            </div>
          </CardBody>
        </Card>        
      </div>      
    </div>    
  )  
}