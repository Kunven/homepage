"use client";
import Topbar from "../components/Topbar";
import {Card, CardBody, Button, Link} from "@nextui-org/react";
import Image from 'next/image'
let  lang = require('../translation/en.json')  
export default function Home() {

  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-500">
      <Topbar/>
      <div className="bg-gradient-to-r from-red-500 to-orange-500 m-5">
        <Card id="home">          
          <CardBody className="my-20 mx-20">
            <div className="grid grid-cols-2">
              <div className="align-middle my-40">
                <p className="text-6xl">Hello! My name is <span className="text-red-500">Luis</span> And I'm a FullStack Developer!</p>
                <p className="text-3xl mt-5">I made this website as a way of showing my skills. I've developed web, desktop and mobile applications with various technologies over the years. I've also used cloud technologies like AWS and Firebase</p>
                <div className="my-4 -mx-1 flex space-x-2">
                  <Button
                    as={Link}
                    href="#"
                    className="bg-gradient-to-r from-red-500 to-orange-500 "
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
              <div className="ml-32 mt-20">
                <Image
                  className="rounded-full bg-gradient-to-r from-red-500 to-orange-500"
                  width={400}
                  height={400}
                  alt="Failed Load"
                  src="/pfp.png"
                />
              </div>
            </div>            
          </CardBody>
        </Card>
        
      </div>      
    </div>    
  )
}
