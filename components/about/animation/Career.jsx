import { FaHeadset } from "react-icons/fa";
import { FaHeadSideCough } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { IoMdWine } from "react-icons/io";

import { AnimatePresence, motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
  zoomIn,
} from "../../../components/ui/motion";

function Career() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col items-center gap-9"
    >
      <div className="flex items-center gap-9 xl:gap-20">
        <motion.div
          variants={fadeIn("left", "tween", 1, 0.5)}
          className="text-4xl"
        >
          <GiKnifeFork />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 1.25, 0.5)}
          className="text-4xl"
        >
          <IoMdWine />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 1.5, 0.5)}
          className="text-4xl"
        >
          <FaHeadSideCough />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 1.75, 0.5)}
          className="text-4xl"
        >
          <FaHeadset />
        </motion.div>
      </div>
      <h1 className="text-xl text-center">
        Careers in the food and{" "}
        <span className="animate-pulse">customer service</span> industries.
      </h1>
      <motion.div
        variants={fadeIn("up", "tween", 2, 1)}
        className="flex flex-col items-center"
      >
        <div className="text-sm italic">Chumley's, New York</div>
        <div className="text-sm italic">An Choi, New York</div>
        <div className="text-sm italic">Haru, New York</div>
        <div className="text-sm italic">Payard Pattiserie, New York</div>
      </motion.div>
    </motion.div>
  );
}

export default Career;
