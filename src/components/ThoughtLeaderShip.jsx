import React from "react";
import { keyGen } from "../libs/Utils.lib";
import { ThoughtLeaderShipSchema as Schema } from "../schemas/ThoughtLeadership.schema";

export default function ThoughtLeaderShip() {
  return (
    <div className="thought-leadership py-[80px] px-[100px]">
      <h4 className="ml-txt">Thought LeaderShip</h4>
      <p className=" md:mt-[24px] mt-[18px] md:text-[35.16px] text-[25.13px] font-[400] md:leading-[48.03px] leading-[38.03px]">
        Stay ahead of the curve with our latest industry insight
      </p>
      <div className="thought-leadership__list">
        {Schema.length &&
          Schema.map((e) => {
            return (
              <div key={keyGen(8)} className="w-[400px]">
                <img
                  src={require(`../assets/images/${e.img}`)}
                  className="w-full h-[415px]"
                />
                <div className="lg-txt mt-[16px]">{e.title}</div>
                <div className="md-txt mt-[16px]">{e.body}</div>
                <div className="xs-txt mt-[24px]">{e.date}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
