"use client";
import { cn } from "@/lib/utils";
import React from "react";

import MagicButton from "@/components/ui/MagicButton";
import { TextGenerateEffect } from "@/components/ui/TextGenerate";
import { Spotlight } from "@/components/ui/Spotlight";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50cw]" fill="blue" />
        <div>
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )}
          />
          {/* Radial gradient for the container to give a faded look */}
          <div className="h-screen w-full pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
          {/* <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
            Backgrounds
            </p> */}
        </div>
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 ">
              Dynamic Web Magic with Next.js
            </h2>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              duration={3}
              filter={false}
              words={"Transforming Concepts into Seamless User Experiences"}
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi, I&apos;m Simon, a Full Stack Software Engineer based in New
              York City
            </p>

            <a href="#about">
              <MagicButton
                title={"Show my work"}
                icon={<FaLocationArrow />}
                position="right"
                handleClick={() => console.log("poof")}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
