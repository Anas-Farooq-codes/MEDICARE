
import logo from "./assets/mediprime.png";

// Animation
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      className="relative flex h-auto w-full flex-col items-center justify-center gap-16 overflow-hidden bg-[#131316] px-6 py-10 text-white md:h-[650px] md:px-1 md:pb-12 md:pt-16 xl:px-[112px]"
    >
      <div className="absolute left-[-216px] top-[-216px] h-[425px] w-[425px] rounded-[425px] bg-white blur-[350px]" />



<motion.img
  initial={{ opacity: 0 }}
  whileInView={{
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
      ease: [0.44, 0, 0.22, 0.99],
    },
  }}
  viewport={{
    amount: "some",
    once: true,
  }}
  src={logo}
  alt=""
  className="w-[1315.875px] pt-8 3xl:max-w-[1200px]"
/>

<div className="flex w-full flex-col items-center justify-center gap-12 3xl:max-w-[1200px]">
  <div className="grid grid-rows-6 w-full grid-cols-2 sm:grid-cols-3 place-content-center place-items-start gap-x-[32px] gap-y-[12px] font-bold text-[#949690] md:grid-cols-6 md:grid-rows-3">
  <p>Appointment</p>
<p>Schedule</p>
<p>Book</p>
<p>Government</p>
<p>Private</p>
<p>Doctors
<span
  className="ml-2 rounded-full border border-white/30 bg-white/10 py-[2px] px-[15px] text-center text-[12px] font-medium leading-[18px] text-white"
>
  New
</span>
</p>
<p>Pricing</p>
<p>First Aid</p>
<p>Help centre</p>
<p>Medicines</p>
<p>Place</p>
<p>Rooms</p>
<p>Tablets</p>
<p>Contact</p>
<p>Support</p>
<p>Comments</p>
<p>Reach Us</p>
<p>Contact</p>
  </div>
  <div className="w-full text-base font-medium leading-6 text-[#94969C] text-center sm:flex items-center justify-center gap-[5px]">
  <p>Copyright © 2024 <a href="https://www.linkedin.com/in/anas-farooq06/">Mediprime</a>. All Rights Reserved</p>
</div>
</div>

    </footer>
  );
};

export default Footer;
