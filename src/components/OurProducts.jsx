import React from "react";
import { keyGen } from "../libs/Utils.lib";
import { OurProductsSchema as Schema } from "../schemas/OurProducts.schema";

export default function OurProducts() {
  return (
    <div className="our-products md:py-[80px] py-[60px] text-white">
      <h4 className="md:pl-[100px] pl-[40px] font-[900] md:text-[28.13px] text-[22.13px] leading-[38.43px]">
        Our products
      </h4>
      <h2 className="md:pl-[100px] pl-[40px] font-[400] md:text-[43.95px] text-[28.95px] md:leading-[60.04px] md:mt-[24px] mt-[12px]">
        Proven Systems That Scale With Our Clients
      </h2>
      <div className="our-products__list-wrapper relative overflow-hidden">
        <div className="our-products__list flex relative left-[-300px] mt-[40px]">
          {Schema.length &&
            Schema.map((e) => {
              return (
                <div
                  className="p-[24px] w-[fit-content] pb-[41px] bg-white text-black our-products__list-item"
                  key={keyGen(8)}
                >
                  <div className="flex flex-col">
                    <img
                      className="w-[68px] height-[34px]"
                      src={e.logo && require(`../assets/logos/${e.logo}`)}
                      alt={e.logo}
                    />
                    <div className="mt-[16px] w-[335px] text-[18px] font-[900] leading-[24.59px]">
                      {e.title}
                    </div>
                    <div className="mt-[16px] w-[335px] sm-txt ">{e.body}</div>
                    <a
                      href={e.url}
                      className="mt-[24px] w-[335px] text-[11.52px] font-[400] leading-[15.74px] our-products__learn-more"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
