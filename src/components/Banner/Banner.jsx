import React from "react";
import Banner3 from "../../assets/banner3.png";
import { SlideUp } from "../../animation/animate";
import { motion as _motion } from 'framer-motion';


const Banner = () => {
  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* image section */}
          <div className="flex flex-col justify-center  ">
            <_motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Banner3}
              alt=""
              className="w-[95%] md:w-full  mx-auto rounded-full"
            />
          </div>
          {/* text section */}
          <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px] ">
            <_motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold font-serif"
            >
              We Believe that a team makes any project better
            </_motion.h1>
            <_motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-800 text-sm leading-7"
            >
              Transform your living room into a stylish, functional space with simple yet impactful design choices. From color schemes to furniture placement, these tips will help you create a space that reflects your personality and lifestyle.{" "}
            </_motion.p>
            <div>
              <_motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                Discover Now
              </_motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
