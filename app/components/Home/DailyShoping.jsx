import React from "react";
import { IoSendSharp } from "react-icons/io5";
import ShopingCardItem from "./ShopingCardItem";

const DailyShoping = () => {
  return (
    <section className="pb-20">
      <div className="container">
        <div
          className="px-6 py-14 lg:p-24 bg-no-repeat bg-cover rounded-4xl bg-center md:bg-right"
          style={{ backgroundImage: "url('/dailyshoping.png')" }}
        >
          <h1 className="font-bold text-2xl md:text-3xl lg:text-7xl text-primary max-w-2xl">
            Stay home & get your daily needs from our shop
          </h1>
          <div className="flex gap-2 md:gap-4 flex-col md:flex-row  pt-5 md:pt-10 cursor-pointer">
            <p className="pt-5 md:pt-10 pb-5 md:pb-16 text-base lg:text-xl font-normal text-secondary">
              Start You'r Daily Shopping with
            </p>
            <p className="pt-5 md:pt-10 pb-5 md:pb-16 text-base lg:text-xl font-normal text-secondary hover:text-brand">
              Nest Mart
            </p>
          </div>
          <div className="bg-white rounded-full max-w-md flex items-center gap-1 pl-2">
            <IoSendSharp className="text-2xl text-secondary" />

            <input
              type="email"
              placeholder="Your emaill address"
              className="w-full outline-0"
            />

            <button className="py-2 px-3 md:py-6 md:px-10 bg-brand rounded-4xl text-white text-base cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap justify-center gap-2 mt-10 cursor-pointer">
        <ShopingCardItem/>
        <ShopingCardItem/>
        <ShopingCardItem/>
        <ShopingCardItem/>
        <ShopingCardItem/>
      </div>
    </section>
  );
}
export default DailyShoping;
