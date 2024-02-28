"use client";
import {
  FaHardHat,
  FaHatCowboy,
  FaHatWizard,
  FaRedhat,
  FaSnapchatGhost,
  FaEquals,
} from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";

import { AnimatePresence, motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
  zoomIn,
} from "../../../components/ui/motion";

function MixHats() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col items-center gap-9"
    >
      <div className="flex items-center flex-wrap sm:flex-row justify-center gap-9 xl:gap-20 pb-9">
        <motion.div
          variants={fadeIn("left", "tween", 1, 0.5)}
          className="flex flex-col items-center gap-1"
        >
          <div className="text-4xl md:text-5xl text-yellow-400">
            <FaHardHat />
          </div>
          <div className="text-xs">Operations</div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 1.25, 0.5)}
          className="flex flex-col items-center gap-1"
        >
          <div className="text-4xl md:text-5xl text-green-500 dark:text-green-400">
            <FaHatCowboy />
          </div>
          <div className="text-xs">Customer Service</div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 1.5, 0.5)}
          className="flex flex-col items-center gap-1"
        >
          <div className="text-4xl md:text-5xl text-indigo-500 dark:text-indigo-400">
            <FaHatWizard />
          </div>
          <div className="text-xs">Development</div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 1.75, 0.5)}
          className="flex flex-col items-center gap-1"
        >
          <div className="text-4xl md:text-5xl text-blue-500 dark:text-blue-400">
            <FaRedhat />
          </div>
          <div className="text-xs">Sales</div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 2, 0.5)}
          className="flex flex-col items-center gap-1"
        >
          <div className="text-4xl md:text-5xl text-red-500 dark:text-red-400">
            <FaSnapchatGhost />
          </div>
          <div className="text-xs">Security & Privacy</div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("down", "tween", 2, 1)}
        className="flex items-center gap-6"
      >
        <div className="border-2 border-black dark:border-inherit rounded-lg flex flex-col items-center justify-center p-4 w-[150px] h-[110px] text-center font-semibold">
          <div>Accomplished</div>
          <div>& Experienced</div>
        </div>
        <div className="text-2xl">
          <FaEquals />
        </div>
        <div className="border-2 border-black dark:border-inherit rounded-lg p-4 flex flex-col items-center justify-center w-[150px] h-[110px] text-center font-semibold">
          <div>Ability</div>
          <div>To Wear</div>
          <div>Many Hats</div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("down", "tween", 3.5, 1)}
        className="text-xl flex"
      >
        <FaArrowDownLong />
        <FaArrowDownLong />
        <FaArrowDownLong />
      </motion.div>
      <motion.div
        variants={fadeIn("down", "tween", 4.5, 1)}
        className="flex flex-col items-center border-2 border-black dark:border-inherit rounded-lg p-5 text-lg font-semibold text-center"
      >
        <div>To Serve A Growing Organization</div>
        <div>Where I Am Needed</div>
      </motion.div>
    </motion.div>
  );
}

export default MixHats;
