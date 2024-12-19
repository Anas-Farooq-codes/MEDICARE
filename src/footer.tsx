
import logoWhite from "./assets/mediprime.png";

// Animation
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      className="relative flex h-auto w-full flex-col items-center justify-center gap-16 overflow-hidden bg-[#131316] px-6 py-10 text-white md:h-[650px] md:px-1 md:pb-12 md:pt-16 xl:px-[112px]"
    >
      <div className="absolute left-[-216px] top-[-216px] h-[425px] w-[425px] rounded-[425px] bg-white blur-[350px]" />
    </footer>
  );
};

export default Footer;
