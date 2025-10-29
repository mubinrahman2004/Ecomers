import React from "react";
import TopSellsItem from "./TopSellsItem";

const TopSell = () => {
  return (
    <section className="pb-[100]">
      <div className="container">
        <div className="flex justify-between items-center">
          <h2 className="text-primary hover:text-brand cursor-pointer font-bold">
            Top Selling
          </h2>
          <h2 className="text-primary hover:text-brand cursor-pointer font-bold">
            Trending Products
          </h2>
          <h2 className="text-primary hover:text-brand cursor-pointer font-bold">
            Recently added
          </h2>
          <h2 className="text-primary hover:text-brand cursor-pointer font-bold">
            Top Rated
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
            <TopSellsItem/>
            <TopSellsItem/>
            <TopSellsItem/>
            <TopSellsItem/>
            <TopSellsItem/>
            <TopSellsItem/>
            <TopSellsItem/>
            <TopSellsItem/>
            <TopSellsItem/>
            <TopSellsItem/>
            <TopSellsItem/>
            <TopSellsItem/>
        </div>
      </div>
    </section>
  );
};

export default TopSell;
