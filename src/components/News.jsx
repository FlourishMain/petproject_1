import React from "react";
import { NewsSchema as Schema } from "../schemas/News.schema";
import { motion } from "framer-motion";
import { DownwardFloat } from "../variants/Utility.variant";

export default function News() {
  return (
    <div className="news px-[100px] py-[80px] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[20px]">
        {Schema.length &&
          Schema.map((e, i) => {
            return (
              <div
                className={`flex flex-col news__list-item
                    ${
                      i === 0 ? `md:col-span-2 text-[28.13px]` : `text-[22.5px]`
                    }
                `}
              >
                <img
                  src={require(`../assets/images/${e.img}`)}
                  className="w-full"
                />
                <h4 className="mt-[24px] font-[900] leading-[36px]">
                  {e.title}
                </h4>
                <div className="mt-[16px] w-[335px] text-[18px] font-[400] leading-[24.59px]">
                  {e.date}
                </div>
              </div>
            );
          })}
      </div>
      <motion.div
        className="news__view-more px-[32px] py-[57px] mt-[229px]"
        variants={DownwardFloat}
        animate="animate"
      >
        View More
      </motion.div>
    </div>
  );
}
