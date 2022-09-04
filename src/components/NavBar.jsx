import React from "react";
import Logo from "../assets/logos/union-system.png";
import Menu from "../assets/svgs/menu.svg";

function NavBar({}) {
  return (
    <div className="nav-bar w-full px-[100px] py-[22px]">
      <img
        src={Logo}
        className="nav-bar__logo w-[161.81px] h-[48px]"
      />
      <div className="nav-bar__navs-con flex">
        <div className="sm-txt text-white">Product</div>
        <div className="sm-txt text-white">Services</div>
        <div className="sm-txt text-white">Contact</div>
        <div>
          <img
            src={Menu}
            className="nav-bar__logo w-[20px] h-[20px]"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
