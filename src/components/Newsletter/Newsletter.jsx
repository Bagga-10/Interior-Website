import React from "react";
import { motion as _motion } from 'framer-motion';
import { SlideUp } from "../../animation/animate";

const Newsletter = () => {
  return (
    <div className="max-w-[500px] mx-auto space-y-5 py-14">
      <_motion.h1
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        className="text-3xl font-bold font-serif text-center"
      >
         Join Our Design Circle
      </_motion.h1>
      <_motion.p
        variants={SlideUp(0.4)}
        initial="initial"
        whileInView="animate"
        className="max-w-[300px] mx-auto text-gray-800 text-sm text-center"
      >
        Be the first to discover modern interiors, design tips, and exclusive offers curated for aesthetic minds.
      </_motion.p>
      {/* form here */}
      <_motion.div
        variants={SlideUp(0.6)}
        initial="initial"
        whileInView="animate"
        className="!mt-10 flex justify-center"
      >
        <input
          type="text"
          placeholder="Enter your email"
          className="px-4 py-4 ring-1 ring-gray-300"
        />
        <button className="bg-black text-white px-6 py-4 uppercase">
          Subscribe
        </button>
      </_motion.div>
    </div>
  );
};

export default Newsletter;
