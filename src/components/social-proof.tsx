import brand1 from "../assets/brand_1.png";
import brand2 from "../assets/brand_2.png";
import brand4 from "../assets/brand_4.png";
import brand6 from "../assets/brand_6.png";
import brand8 from "../assets/brand_8.png";
import brand3 from "../assets/brand_3.png";

import { motion } from "framer-motion";

const SocialProof = () => {
  const brands = [brand1, brand2, brand4, brand6, brand8, brand3];
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: 0.2,
          ease: [0.44, 0, 0.56, 1],
        },
      }}
      viewport={{
        amount: "some",
        once: true,
      }}
      className="flex w-full flex-col items-center justify-center gap-12 py-16 overflow-hidden"
    >
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.44, 0, 0, 1],
          },
        }}
        className="text-[18px] font-bold leading-[26px] tracking-[-0.216px] text-[#2f2b43]/60"
      >
        Trusted By the best
      </motion.p>
      <div className="relative w-full overflow-hidden">
        <motion.div
          initial={{ x: "0%" }}
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-[200%] gap-8"
        >
          {/* Render brand images twice for smooth looping */}
          {brands.concat(brands).map((brand, index) => (
            <img
              key={index}
              src={brand}
              alt={`brand-${index}`}
              className="w-[180px] mx-4"
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SocialProof;
