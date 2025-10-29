import Image from "next/image";
import Link from "next/link";
import React from "react";
import bestsellBannerImg from "../../../public/bestsellBanner.png";
import BestSells from "./BestSells";
import PopularProductItems from "./PopularProductItems";

const BestDils = () => {
  return (
    <section className="pb-[43]">
      <div className="container">
        <div>
          <h2 className="sectn_heading">Daily Best Sells</h2>

          <ul className=" flex justify-end py-5 items-center  gap-2 md:gap-7">
            <li>
              <button className="text-primary font-bold text-base hover:text-brand ">
                Featured
              </button>
            </li>
            <li>
              <button className="text-primary font-bold text-base hover:text-brand ">
                Popular
              </button>
            </li>
            <li>
              <button className="text-primary font-bold text-base hover:text-brand ">
                New added
              </button>
            </li>
          </ul>
        </div>
        <div className="flex">
          <div className="w-378 h-4/5">
            <BestSells bg="/bestsellBanner.png">
              Bring nature into your home
            </BestSells>
          </div>
          <div className="flex lg:grid-cols-3 sm:grid-cols-2  xl:grid-cols-3 gap-x-6 gap-y-8">
            <PopularProductItems />
            <PopularProductItems />
            <PopularProductItems />
            <PopularProductItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestDils;
