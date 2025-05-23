import React from "react";
import Banner1 from "../../assets/banner2.png";
import { SlideUp } from "../../animation/animate";
import { motion as _motion } from 'framer-motion';


const Banner2 = () => {
  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* text section */}
          <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px]">
            <_motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold font-serif"
            >
            Tips for Designing a Modern Living Room
            </_motion.h1>
            <_motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-800 text-sm leading-7"
            >
                Discover simple design strategies to transform your living room into a stylish and functional space. From choosing the right colors to adding personalized decor, these tips will help you create a space that feels both modern and inviting.{" "}
            </_motion.p>
            <_motion.div
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="flex gap-3"
            >
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font-bold font-serif">15</p>
                <p className="text-gray-800 text-sm">Years of Experience</p>
              </div>
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font-bold font-serif">350</p>
                <p className="text-gray-800 text-sm">Happy Clients</p>
              </div>
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font-bold font-serif">34</p>
                <p className="text-gray-800 text-sm">Award Gained</p>
              </div>
            </_motion.div>
            <div>
              <_motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                Contact Us
              </_motion.button>
            </div>
          </div>
          {/* image section */}
          <div className="flex flex-col justify-center  ">
            <_motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Banner1}
              alt=""
              className="w-[95%] md:w-full mx-auto rounded-full"

            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
