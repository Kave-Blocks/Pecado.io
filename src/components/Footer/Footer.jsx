import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="relative flex-col bg-white-bg min-h-[50vh] flex justify-center items-center p-5 tablet:p-0">
      <div className="mx-auto flex flex-col tablet:flex-row max-w-screen-desktop w-full">
        <div className="flex-[1] flex flex-col gap-y-2 tablet:gap-y-5">
          <img src="/logo.svg" alt="" className="w-32" />
          <div className="flex flex-col gap-y-2">
            <p className="text-[24px] tablet:text-[32px]">+18885519375</p>
            <p className="text-blue text-[24px] tablet:text-[32px]">ai.x@ashtreebv.com</p>
            <Socials />
          </div>
        </div>
        <div className="flex-[1] flex flex-col gap-y-5 justify-center items-start tablet:items-end">
          <div className="flex flex-col gap-y-5">
            <p className="text-[16px] tablet:text-[24px] font-Montserrat font-semibold">
              Staylime Inc. 541
              <br /> Jefferson Ave, Suite 100
              <br /> Redwood City, CA 94063
            </p>
            <button className="btn text-white bg-primary-bg w-[max-content]">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
