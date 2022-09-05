import React from "react";
import ArrowForward from "../assets/svgs/forward-arrow.svg";
import { LetsTalkVariant } from "../variants/LetsTalk.variant";
import { motion } from "framer-motion";

export default function LetsTalk() {
  return (
    <div className="lets-talk">
      <motion.h1
        className="xxl-txt text-center"
        variants={LetsTalkVariant}
        initial="initial"
        animate="animate"
      >
        Let's Talk
      </motion.h1>
      <div className="mt-[37px] p-[60px] rounded-full border-solid border-[2px]">
        <img src={ArrowForward} className="w-[80px] h-[80px]" />
      </div>
    </div>
  );
}
