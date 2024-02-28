"use client";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdOutlineGrading } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
  zoomIn,
} from "../../../components/ui/motion";

function School() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col items-center gap-9"
    >
      <motion.div
        variants={zoomIn(0.2, 1)}
        className="flex items-center gap-9 xl:gap-20"
      >
        <div className="text-5xl">
          <FaMoneyCheckAlt />
        </div>
        <div className="text-5xl">
          <FaGraduationCap />
        </div>
        <div className="text-5xl">
          <MdOutlineGrading />
        </div>
      </motion.div>
      <motion.h1 variants={fadeIn("up", "tween", 1, 1)} className="text-xl">
        Schooled in Finance.
      </motion.h1>
      <motion.div
        variants={fadeIn("up", "tween", 2, 1)}
        className="flex flex-col items-center"
      >
        <div className="text-base">St. John's University, New York</div>
        <div className="text-sm italic">Bachelors in Finance</div>
      </motion.div>
    </motion.div>
  );
}

export default School;
