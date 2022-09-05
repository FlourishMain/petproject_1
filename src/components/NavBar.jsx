import { motion } from "framer-motion";
import React from "react";
import Logo from "../assets/logos/union-system.png";
import Menu from "../assets/svgs/menu.svg";
import { LogoVariant, NavVariant } from "../variants/NavBar.variant";

function NavBar({}) {
  return (
    <div className="nav-bar w-full px-[100px] py-[22px]">
      <motion.img
        src={Logo}
        className="nav-bar__logo w-[161.81px] h-[48px]"
        variants={LogoVariant}
        initial="initial"
        animate="animate"
      ></motion.img>
      <motion.div
        className="nav-bar__navs-con flex"
        variants={NavVariant}
        initial="initial"
        animate="animate"
      >
        <div className="sm-txt text-white">Product</div>
        <div className="sm-txt text-white">Services</div>
        <div className="sm-txt text-white">Contact</div>
        <div>
          <img src={Menu} className="nav-bar__logo w-[20px] h-[20px]" />
        </div>
      </motion.div>
    </div>
  );
}

export default NavBar;
