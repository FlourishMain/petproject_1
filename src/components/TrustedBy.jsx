import React from "react";
import { keyGen } from "../libs/Utils.lib";
import { TrustedSchema as Schema } from "../schemas/Trusted.schema";
import { motion } from "framer-motion";
import {
  HeadTextVariant,
  LogoIntroVariant,
  LogoGroupVariant,
} from "../variants/TrustedBy.variant";

export default function TrustedBy() {
  return (
    <div className="trusted-by px-[100px] py-[80px]">
      <motion.h1
        className=" font-[400] md:text-[54.93px] text-[40px] md:leading-[50.03px]"
        variants={HeadTextVariant}
        initial="initial"
        whileInView="animate"
      >
        Trusted By:
      </motion.h1>
      <motion.div
        className="trusted-by__list grid grid-cols-2 md:grid-cols-4 gap-[30px] justify-center md:mt-[67px] mt-[40px]"
        variants={LogoGroupVariant}
        whileInView="animate"
      >
        {Schema.length &&
          Schema.map((e, i) => {
            return (
              <motion.div
                key={keyGen(8)}
                variants={LogoIntroVariant}
                className={i >= 4 ? "md:mt-[72px]" : ""}
              >
                <img
                  src={require(`../assets/logos/${e}`)}
                  className="md:w-[250px] w-[200px] md:h-[80px]"
                  key={keyGen(8)}
                  alt={`${e}`}
                />
              </motion.div>
            );
          })}
      </motion.div>
    </div>
  );
}
