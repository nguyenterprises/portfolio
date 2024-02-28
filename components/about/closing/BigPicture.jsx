"use client";
import { FcBinoculars } from "react-icons/fc";
import { BsSunriseFill } from "react-icons/bs";
import { FcPicture } from "react-icons/fc";
import { GiCrystalGrowth } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";

import { AnimatePresence, motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
  zoomIn,
} from "../../../components/ui/motion";

function BigPicture() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col items-center gap-20"
    >
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <motion.div
          variants={zoomIn(0.5, 1)}
          className="flex flex-col items-center p-4 w-[200px] h-[150px] text-center font-semibold"
        >
          <div className="text-8xl">
            <FcBinoculars />
          </div>
          <div>Experience lets me see</div>
        </motion.div>
        <motion.div
          variants={zoomIn(1, 1)}
          className="flex flex-col items-center p-4 w-[200px] h-[150px] text-center font-semibold"
        >
          <div className="text-8xl">
            <FcPicture />
          </div>
          <div>the big picture</div>
        </motion.div>
        <motion.div
          variants={zoomIn(1.5, 1)}
          className="flex flex-col items-center p-4 w-[200px] h-[150px] text-center font-semibold"
        >
          <div className="text-8xl text-yellow-400 dark:text-yellow-300">
            <BsSunriseFill />
          </div>
          <div>of the company's vision</div>
        </motion.div>
      </div>
      <motion.div
        variants={zoomIn(2.5, 1)}
        className="flex items-center border-2 border-black dark:border-inherit rounded-lg p-5 text-lg font-semibold text-center gap-3"
      >
        <div className="text-4xl text-green-500 dark:text-green-400">
          <BsCashCoin />
        </div>
        <div className="flex-flex-wrap">
          Contributing to the company's growth and future
        </div>
        <div className="text-4xl text-rose-500 dark:text-rose-400">
          <GiCrystalGrowth />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default BigPicture;
// Experience allows me to see the big picture of the company's vision and
// potential. It gives my work and performance to be directly aligned with
// the company's mission and goals.
