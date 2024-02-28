"use client";
import { FaHouseUser } from "react-icons/fa";
import { RiSpeakFill } from "react-icons/ri";
import { FaFlagUsa } from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
  zoomIn,
} from "../../../components/ui/motion";

function English() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div variants={zoomIn(0.2, 1)} className="flex items-center gap-6">
        <h1 className="text-xl">Natively speaks English.</h1>
        <div className="text-3xl border-2 border-black dark:border-inherit rounded-lg  w-fit p-2 animate-bounce">
          <FaFlagUsa />
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 1, 1)}
        className="flex items-center gap-6"
      >
        <h1 className="text-xl">
          Also can speak, read and write{" "}
          <span className="underline italic">some</span> Spanish.
        </h1>
        <div className="text-3xl border-2 border-black dark:border-inherit rounded-lg  w-fit p-2">
          <RiSpeakFill />
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 2, 1)}
        className="flex items-center gap-6"
      >
        <h1 className="text-xl">Fluent in Vietnamese.</h1>
        <div className="text-3xl border-2 border-black dark:border-inherit rounded-lg  w-fit p-2">
          <FaHouseUser />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default English;
