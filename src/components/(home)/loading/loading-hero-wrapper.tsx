"use client";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

import { MagicPenIcon, StarIcon } from "@/assets/icons";
import ImageGlobeV3 from "@/components/(home)/loading/image-globe.v3";
import { Button } from "@/components/ui/button";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

export default function HeroLoadingWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const [progress, setProgress] = useState<number>(70);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 8;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="">
      <div className="w-full  h-screen relative ">
        <Canvas
          camera={{ position: [0, 0, 20], fov: 60 }}
          className="w-full h-full z-10 relative"
        >
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <ImageGlobeV3 progress={progress} />
          <EffectComposer>
            <Bloom />
          </EffectComposer>
        </Canvas>
        <div className="w-full h-full flex items-center justify-center absolute top-0 left-0">
          {/* bg-overlay-primary  bg-[#6A69D580] left-[45%]  rounded-full  absolute top-[5%] -z-10 blur-[100px] md:block hidden  rotate-[-10deg] */}
          <div className="relative w-full mx-auto">
            <div className="bg-overlay-primary bg-slate-500/50  backdrop-blur-3xl left-[45%]  rounded-full max-w-[350px] rotate-45 w-full h-[200px] max-h-[200px]  top-[50%] mx-auto flex items-center justify-center -z-10 blur-[100px]" />
          </div>
        </div>
      </div>
      <motion.div
        className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: progress >= 100 ? 1 : 0 }}
        transition={{ duration: 2.5, delay: 1.5 }}
      >
        <div className="flex items-center justify-center text-blue-300 gap-2 ">
          <div className="w-5 h-5 ">
            <MagicPenIcon />
          </div>
          <p>Welcome to BUU.FUN</p>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
          Unleash Your Imagination in 3D
        </h1>
        <p className="text-xl max-w-2xl text-center">
          Transform ideas into fully animated 3D models with BUU.FUN&apos;s
          advanced AI technology
        </p>

        <Button className="px-2 group py-2 h-[40px] rounded-[10px]">
          <div className="w-6 h-6 icon-blue-with-shadow blue-icon-gradient-background blue-icon-filter-effect rounded-md flex items-center justify-center">
            <StarIcon />
          </div>
          Try Now
        </Button>
      </motion.div>
      {progress >= 100 ? children : null}
    </div>
  );
}
