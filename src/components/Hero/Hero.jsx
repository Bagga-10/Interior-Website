import React from "react";
import HeroPng from "../../assets/hero.png";
import { motion as _motion } from 'framer-motion';
import { SlideUp } from "../../animation/animate";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px] gap-10">
          {/* Text section */}
          <div className="flex flex-col justify-center gap-7 md:pr-8 xl:pr-52 text-center md:text-left pt-20 md:pt-0 px-10">
            <_motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl font-bold font-serif"
            >
              SKETCH LUXURY INTERIOR DESIGN
            </_motion.h1>

            <_motion.p
              variants={SlideUp(0.5)}
              initial="initial"
              animate="animate"
              className="text-sm md:text-base text-gray-800 leading-7"
            >
              Bring your dream to life with one-on-one design help & hand picked
              products tailored to your style, space and budget.
            </_motion.p>
            <div className="space-x-4">
              <_motion.button
                variants={SlideUp(0.8)}
                initial="initial"
                animate="animate"
                className="primary-btn uppercase bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                Get started
              </_motion.button>
              <_motion.button
                variants={SlideUp(1.1)}
                initial="initial"
                animate="animate"
                className="primary-btn uppercase mt-4"
              >
                Contact Us
              </_motion.button>
            </div>
          </div>
          {/* Images section */}
          <div className="relative group w-fit mx-auto">
            {/* The Image */}
            <_motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              drag
              dragConstraints={{
                left: -100,
                right: 100,
                top: -100,
                bottom: 100,
              }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              src={HeroPng}
              alt="HeroImg"
              className="w-[80%] mt-[6rem] md:w-[700px] object-cover rounded-full"
            />

            {/* Popup on Hover */}
            <div className="absolute top-[10%] left-[50%] -translate-x-1/2 -translate-y-full bg-gray-400 px-3 py-1 text-sm text-black rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              You can drag this image
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
