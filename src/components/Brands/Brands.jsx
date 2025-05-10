import React from "react";
import { motion as _motion } from 'framer-motion';
import Brand1 from "../../assets/brand/1.png";
import Brand2 from "../../assets/brand/2.png";
import Brand3 from "../../assets/brand/3.png";
import Brand4 from "../../assets/brand/4.png";
import Brand5 from "../../assets/brand/5.png";
import { bounce, SlideLeft } from "../../animation/animate";
const Brands = () => {
  return (
    <>
      <div className="container py-14">
        <div className="flex flex-wrap justify-center  lg:justify-between gap-6  ">
          <_motion.img
            
            variants={bounce(1)}
            initial="initial"
            whileInView={"animate"}
            src={Brand1}
            alt="brand"
            className="w-[110px] md:w-[200px] mix-blend-multiply"
          />
          <_motion.img
            variants={bounce(0.4)}
            initial="initial"
            whileInView={"animate"}
            src={Brand2}
            alt="brand"
            className="w-[110px] md:w-[200px] mix-blend-multiply"
          />
          <_motion.img
            variants={bounce(0.6)}
            initial="initial"
            whileInView={"animate"}
            src={Brand3}
            alt="brand"
            className="w-[110px] md:w-[200px] mix-blend-multiply"
          />
          <_motion.img
            variants={bounce(0.8)}
            initial="initial"
            whileInView={"animate"}
            src={Brand4}
            alt="brand"
            className="w-[110px] md:w-[200px] mix-blend-multiply"
          />
          <_motion.img
            variants={bounce(1.0)}
            initial="initial"
            whileInView={"animate"}
            src={Brand5}
            alt="brand"
            className="w-[110px] md:w-[200px] mix-blend-multiply"
          />
        </div>
      </div>
    </>
  );
};

export default Brands;
