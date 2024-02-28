import { GoGraph } from "react-icons/go";
import { MdAttachMoney } from "react-icons/md";

import { AnimatePresence, motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
  zoomIn,
} from "../../../components/ui/motion";

function Brief() {
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
        <div className="text-3xl">
          <GoGraph />
        </div>
        <div className="bg-amber-950 dark:bg-slate-50 text-white dark:text-amber-950 text-4xl font-semibold rounded p-1 ring-4 ring-amber-800">
          JPM
        </div>
        <div className="text-3xl">
          <MdAttachMoney />
        </div>
      </motion.div>
      <motion.h1
        variants={fadeIn("left", "tween", 2)}
        className="text-xl text-center"
      >
        Previously worked in asset management.
      </motion.h1>
      <motion.div
        variants={fadeIn("left", "tween", 2.75, 1)}
        className="flex flex-col items-center"
      >
        <div className="text-base">JP Morgan</div>
        <div className="text-sm italic">Portfolio Anaylsis</div>
        <div className="text-sm italic">Duration - 4 Years</div>
      </motion.div>
    </motion.div>
  );
}

export default Brief;
