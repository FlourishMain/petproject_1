import React from "react";
import { keyGen } from "../libs/Utils.lib";
import { TrustedSchema as Schema } from "../schemas/Trusted.schema";

export default function TrustedBy() {
  return (
    <div className="trusted-by px-[100px] py-[80px]">
      <h1 className=" font-[400] text-[54.93px] leading-[75.03px]">
        Trusted By:
      </h1>
      <div className="trusted-by__list grid grid-cols-4 justify-center mt-[67px]">
        {Schema.length &&
          Schema.map((e, i) => {
            return (
              <div key={keyGen(8)} className={i >= 4 ? "mt-[72px]" : ""}>
                <img
                  src={require(`../assets/logos/${e}`)}
                  className="w-[250px] h-[100px]"
                  key={keyGen(8)}
                  alt={`${e}`}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
