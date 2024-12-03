import brand1 from "../assets/brand_1.png";
import brand2 from "../assets/brand_2.png";
import brand4 from "../assets/brand_4.png";
import brand6 from "../assets/brand_6.png";
import brand8 from "../assets/brand_8.png";
import brand3 from "../assets/brand_3.png";

// Animation 

import { motion } from "framer-motion";

const SocialProof = () => {
  return (
    <motion.section
    initial={{opacity: 0}}
    whileInView={{
      opacity:1,
      transition: {
        duration: 0.6,
        delay:0.2,
        ease: [0.44, 0, 0.56, 1]
      },
    }}
    viewport={{
      amount: "some",
      once: true,
    }}
     className="flex w-full flex-col items-center justify-center gap-12 py-16">
      <motion.p
      initial={{opacity: 0, y:50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.44, 0, 0, 1],
        },
      }}
      className="text-[18px] font-bold leading-[26px] tracking-[-0.216px] text-[#9984f0]">
         Endorsed by Top Professionals
      </motion.p>
      <motion.div
      initial={{opacity: 0.8,}}
      whileInView={{
        opacity:1,
        y:0,
        transition: {
          duration: 0.8,
          ease: [0.44, 0, 0, 1],
        }
      }}
       className="flex flex-wrap items-center justify-evenly gap-0">
        <img src={brand1} alt="logo" className="w-[120px] mx-4" />
        <img src={brand2} alt="logo" className="w-[120px] mx-4" />
        <img src={brand4} alt="logo" className="w-[120px] mx-4" />
        <img src={brand6} alt="logo" className="w-[120px] mx-4" />
        <img src={brand8} alt="logo" className="w-[120px] mx-4" />
        <img src={brand3} alt="logo" className="w-[120px] mx-4" />
      </motion.div>
    </motion.section>
  );
};

export default SocialProof;
