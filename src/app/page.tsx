"use client";
import Topbar from "../components/Topbar";
import {Card, CardBody,CardHeader, Button, Link} from "@nextui-org/react";
import Image from 'next/image'
let  lang = require('../translation/en.json')  
export default function Home() {

  return (
    <div className="bg-gradient-to-r from-red-600 to-orange-500">
      <Topbar/>
      <div className="bg-gradient-to-r from-red-600 to-orange-500 m-5">
        <Card id="home">          
          <CardBody className="grid grid-cols-2  content-center max-w-full mx-auto px-8 justify-center h-full">
            <div className="align-middle my-20">
              <p className="text-6xl">Hello! My name is <span className="text-red-600">Luis</span> And I'm a FullStack Developer!</p>
              <p className="text-3xl mt-5">I made this website as a way of showing my skills. I've developed web, desktop and mobile applications with various technologies over the years. I've also used cloud technologies like AWS and Google Cloud</p>
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
                    href="/CV.pdf"
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
                src="/pfp.png"
              />
            </div>                      
          </CardBody>
        </Card>
        <Card className="mt-5" id="aboutMe">          
          <CardBody className="mx-32 my-20">
          <p className="text-6xl underline underline-offset-8 decoration-red-600">About me</p>          
          </CardBody>
        </Card>
      </div>      
    </div>    
  )
}
