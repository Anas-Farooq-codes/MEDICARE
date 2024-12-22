import logo from "./assets/mediprime-logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav
      className="fixed left-0 right-0 top-[19px] z-50 mx-[24px] flex h-[65px] items-center justify-between rounded-[32px] bg-white/10 px-6 shadow-[0_57px_96px_-8px_rgba(87,92,95,0.25)] outline outline-4 -outline-offset-[4px] outline-white/[38%] backdrop-blur-[4px] md:mx-[40px] md:h-[80px] md:px-8 xl:mx-[95px] 3xl:mx-auto 3xl:max-w-[1250px]"
    >
      <div>
        <a href="/">
          <img
            src={logo}
            alt=""
            className="w-[120px] cursor-pointer md:w-[142px]"
          />
        </a>
      </div>
      {/* ...rest of the code for the right side of the navbar ... */}
    </nav>
  );
};

export default Navbar