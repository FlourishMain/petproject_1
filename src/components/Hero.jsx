import React from "react";
import HeroBg from "../assets/images/hero-section-bg.jpg";
import HeroSideImg from "../assets/images/hero-side-img.png";
import DownwardArrow from "../assets/svgs/downward-arrow.svg";
import ForwardArrow from "../assets/svgs/forward-arrow.svg";

export default function Hero() {
  return (
    <div className="hero text-white">
      <div className="hero__intro-section flex justify-between">
        <div className="hero__text-wrapper">
          <h1 className="xl-txt">
            Africa's Leading Trade Finance Software Company
          </h1>
          <p className="sm-txt mt-[35px]">
            Delivering forward-thinking trade finance software solutions to
            African banks and <br></br> corporations to automate and digitize
            their trade operations.
          </p>
          <div className="text-[22.50px] items-center flex mt-[74px] mb-[87px]">
            Let's Go <img src={DownwardArrow} className="w-[24px] h-[24px]" />
          </div>
        </div>
        <img
          src={HeroSideImg}
          alt
          className="hero__hero-side-img h-[355px] w-[185.3px]"
        />
      </div>
      <div className="hero__mid-section w-full h-[700px]"></div>
      <div className="hero__end-section">
        <p className="text-[22px] leading-[36px]">
          Union Systems Limited (USL) is Africa’s leading trade finance software
          company. For over 20 years, the company has been delivering future
          thinking trade finance software solutions to banks and corporates in
          Africa to achieve full automation and digitization of their trade
          operations. Our trade finance software solutions deliver growth,
          profitability, and regulatory compliance to banks and corporates.
        </p>

        <div className="text-[22.50px] items-center flex mt-[56px]">
          Let's Go <img src={ForwardArrow} className="w-[24px] h-[24px]" />
        </div>
      </div>
    </div>
  );
}
