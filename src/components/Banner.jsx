import React from "react";

//import image
import { HouseBanner } from "../assets/img";

//import search
import Search from "./Search";
const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700">Rent</span> Your Dream House with
            Us
          </h1>
          <p className="max-w-[480px] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            quas placeat voluptatum porro assumenda facilis! Blanditiis
            temporibus cumque animi a iure. Rem harum dolor aspernatur amet
            perspiciatis praesentium ab quam!
          </p>
        </div>
        <div className="items-end justify-end flex-1 hidden lg:flex">
          <img src={HouseBanner} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
