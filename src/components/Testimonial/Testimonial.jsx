import { motion as _motion } from 'framer-motion';
import { SlideLeft, SlideUp } from "../../animation/animate";


const TestimonialData = [
  {
    id: 1,
    name: "Aarav Mehta",
    designation: "Interior Designer",
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=300&q=80",
    text: "Working with this team completely transformed my home. Their sense of style and attention to detail is truly unmatched in the industry.",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Arun Sharma",
    designation: "Architect",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80",
    text: "Their expertise in spatial design brought a unique character to our office space. Absolutely thrilled with the final outcome.",
    delay: 0.4,
  },
  {
    id: 3,
    name: "Divya Patel",
    designation: "Project Manager",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=300&q=80",
    text: "From planning to execution, everything was smooth and professional. Highly recommended for high-end interior projects in India.",
    delay: 0.6,
  },
];

const Testimonial = () => {
  return (
    <div className="py-14">
      {/* heading title */}
      <div className="space-y-4 text-center max-w-[550px] mx-auto mb-8">
        <_motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-4xl font-bold font-serif  "
        >
          Words from our coustomers
        </_motion.h1>
        <_motion.p
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-gray-800 text-sm max-w-[350px] mx-auto"
        >
          Bring your dream home to life with one-on-one design help & hand
          picked products
        </_motion.p>
      </div>
      {/* tesitomonial cards */}
    <div className="bg-gradient-to-br from-[#5a5a4f] to-[#0b0a09] p-12">

        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
          {TestimonialData.map((card) => {
            return (
              <_motion.div
                variants={SlideLeft(card.delay)}
                initial="initial"
                whileInView="animate"
                key={card.id}
                className="border-[1px] border-gray-500 px-5 py-10 text-white group hover:bg-white duration-300 rounded-lg shadow-lg"
              >
                {/* Upper section */}
                <div className="flex flex-row items-center gap-3">
                  <img
                    src={card.img}
                    alt=""
                    className="w-[60px] rounded-full"
                  />
                  <div>
                    <p className="text-sm font-bold group-hover:text-black">
                      {card.name}
                    </p>
                    <p className="text-gray-400 text-xs group-hover:text-black">
                      {card.designation}
                    </p>
                    <div className="text-xs mt-2">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                {/* Bottom section */}
                <div className="mt-5 border-t-2 border-gray-500/40 pt-5">
                  <p className="text-sm text-gray-300 group-hover:text-black duration-300">
                    {card.text}
                  </p>
                </div>
              </_motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;