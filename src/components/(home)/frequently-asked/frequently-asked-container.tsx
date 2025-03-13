"use client";
import FrequentlyAskedIcon from "@/assets/icons/frequently-asked";
import Bounded from "@/components/ui/Bounded";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MinusCircle, PlusCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);
export default function FrequentlyAskedContainer() {
  useGSAP(() => {
    gsap.fromTo(
      ".accordion-container",
      {
        filter: "blur(10px)",
        rotate: "6deg",
        y: 100,
      },
      {
        rotate: "0deg",
        y: 0,
        filter: "blur(0px)",
        duration: 2,
        stagger: 0.2,
        ease: "power4.inOut",
      }
    );
  });

  return (
    <div className="w-full h-screen relative">
      <div className="w-[176px] h-[334px]   violet-gradient -left-[70px] top-[30%]  rounded-full  absolute  -z-10  md:block hidden  rotate-[-10deg]" />

      <Bounded className="max-w-screen-2xl w-full h-full  flex items-center justify-between">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex items-center  gap-2">
            <FrequentlyAskedIcon />
            <h1 className="blue-text-clip bg-clip-text text-transparent">
              FAQ
            </h1>
          </div>
          <div>
            <h1 className="grayish-text-gradient  max-w-max text-6xl tracking-tighter font-medium">
              Frequently <br /> Asked Questions
            </h1>
          </div>
          <p className="text-white/60">
            Read answers to the most common questions about BUU.FUN
          </p>
        </div>
        <div className="w-full">
          <Accordion type="single" className="flex  flex-col gap-4" collapsible>
            <AccordionItem
              value="item-1"
              className="rgb-muted accordion-container px-6 py-2 rounded-2xl border-b-0"
            >
              <AccordionTrigger
                icon={
                  <>
                    <PlusCircle className="fill-white group-[&[data-state=open]]:hidden stroke-black stroke-2" />
                    <MinusCircle className="fill-white group-[&[data-state=closed]]:hidden stroke-black stroke-2" />
                  </>
                }
                className="text-lg text-white"
              >
                What file formats does BUU.FUN support for export?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <motion.div
                  initial={{
                    y: 40,
                  }}
                  animate={{
                    y: 0,
                    transition: { duration: 0.5 },
                  }}
                >
                  Yes. It adheres to the WAI-ARIA design pattern.
                </motion.div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="rgb-muted accordion-container px-6 py-2 rounded-2xl border-b-0"
            >
              <AccordionTrigger
                icon={
                  <>
                    <PlusCircle className="fill-white group-[&[data-state=open]]:hidden stroke-black stroke-2" />
                    <MinusCircle className="fill-white group-[&[data-state=closed]]:hidden stroke-black stroke-2" />
                  </>
                }
                className="text-lg text-white"
              >
                How does the Roblox Studio integration work?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <motion.div
                  initial={{
                    y: 40,
                  }}
                  animate={{
                    y: 0,
                    transition: { duration: 0.5 },
                  }}
                >
                  {" "}
                  Yes. It adheres to the WAI-ARIA design pattern.
                </motion.div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="rgb-muted accordion-container px-6 py-2 rounded-2xl border-b-0"
            >
              <AccordionTrigger
                icon={
                  <>
                    <PlusCircle className="fill-white group-[&[data-state=open]]:hidden stroke-black stroke-2" />
                    <MinusCircle className="fill-white group-[&[data-state=closed]]:hidden stroke-black stroke-2" />
                  </>
                }
                className="text-lg text-white"
              >
                Can I use BUU.FUN for commercial projects?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <motion.div
                  initial={{
                    y: 40,
                  }}
                  animate={{
                    y: 0,
                    transition: { duration: 0.5 },
                  }}
                >
                  BUU.FUN offers a seamless platform to create stunning 3D
                  objects from text prompts or images. With features like
                  auto-rigging, texture remeshing, and animation, your creations
                  are ready for any project{" "}
                </motion.div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Bounded>
    </div>
  );
}
