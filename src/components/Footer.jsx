import React from "react";
import Logo from "../assets/logos/union-system.png";
import { FooterSchema as Schema } from "../schemas/Footer.schema";

export default function Footer() {
  return (
    <div className="footer">
      <div className="px-[80px] py-[29px]">
        <img src={Logo} className="" />
      </div>
      <div className="flex">
        <div className="flex px-[80px] py-[40px] footer__nav-list">
          {Schema.navs.length &&
            Schema.navs.map((e) => {
              return (
                <div className="flex flex-col footer__nav-section">
                  <h1 className="xs-txt footer__section-head">{e.title}</h1>
                  <div className="mt-[24px] text-white">
                    {e.navs.length &&
                      e.navs.map((n) => {
                        return (
                          <div className="footer__nav">
                            <a href={n.link}>{n.title}</a>
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}
        </div>
        <div className="footer__location-section px-[60px] py-[40px]">
          <div className="flex flex-col footer__nav-section">
            <h1 className="xs-txt footer__section-head">location</h1>
            <div className="mt-[24px] text-white ">
              7 Saka Jojo Street,<br></br> Victoria Island, <br></br>Lagos,{" "}
              <br></br>Nigeria. <br></br>+234 1 270 0049<br></br> +234 1 279
              9661<br></br>
            </div>
            <div className="mt-[24px] text-white ">
              <a href="#">View on Google Map</a>
            </div>
          </div>
        </div>
        <div className="footer__twitter-section px-[60px] py-[40px]">
          <div className="flex flex-col footer__nav-section">
            <h1 className="xs-txt footer__section-head">twitter</h1>
            <div className="mt-[24px]">
              <div className="text-white w-[380px]">
                We are committed to delivering solutions tailored just for you.
                https://t.co/AY8P1DuWJN AGO
              </div>
              <div className="mt-[16px] text-white w-[380px]">
                4 WEEKS AGO Visit https://t.co/fUYmtaElz3 to learn more about
                how we are using technology to provide solutions 1 MONTH AGO
                International trade processes are document-centric, and Kachasi
                has significantly reduced its reliance on physical…
                https://t.co/7RKi2k9BJY 1 MONTH AGO
              </div>
              <div className="mt-[16px] text-white w-[380px]">
                1 MONTH AGO International trade processes are document-centric,
                and Kachasi has significantly reduced its reliance on physical…
                https://t.co/7RKi2k9BJY 1 MONTH AGO
              </div>
              <div className="mt-[16px] text-white w-[380px]">1 MONTH AGO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
