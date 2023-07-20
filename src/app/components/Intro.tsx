import React from "react";
import '../globals.css'
const Intro = () => {
  return (
    <div className="img-bg">
      <div className=" pb-20 text-white flex justify-center items-start flex-col h-screen">
        <h1 className="mx-32  text-[45px]">Creative Direction,</h1>
        <h1 className="mx-32 text-[45px] translate-y-[-14px] mb-4">Design & Photography</h1>
        <p className="mx-32 text-3xl translate-y-[-14px] text-white font-bold md:text-2xl  ">
        We are a digital multimedia production company with core interest in
        </p>
        <p className="mx-32 text-3xl translate-y-[-14px] text-white md:text-2xl font-bold">
        Photography, videography, digital design and print, event planning and management
        </p>
      </div>
    </div>
  );
};

export default Intro;
