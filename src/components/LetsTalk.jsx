import React from "react";
import ArrowForward from "../assets/svgs/forward-arrow.svg";

export default function LetsTalk() {
  return (
    <div className="lets-talk">
      <h1 className="xxl-txt text-center">Let's Talk</h1>
      <div className="mt-[37px] p-[60px] rounded-full border-solid border-[2px]">
        <img src={ArrowForward} className="w-[80px] h-[80px]" />
      </div>
    </div>
  );
}
