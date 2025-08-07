import Image from "next/image";
import React from "react";
import mangoImg from "../../../public/mango.png";
import { FaStar } from "react-icons/fa";

const TopSellsItem = () => {
  return (
    <section>
      <div className="flex gap-4 items-center cursor-pointer">
        <div>
          <Image
            width={50}
            height={50}
            src={mangoImg}
            alt="mango"
            placeholder="blur"
            layout="responsive"
            className="w-full h-full"
          />
        </div>
        <div className="w-[250] ">
          <p className="text-primary font-semibold text-base ">Nestle Original Coffee-Mate Coffee Creamer</p>
          <div className=" flex items-center gap-2">
            <FaStar className="text-xl text-amber-600"/>
            <p className="text-primary font-semibold text-base ">(4.0)</p>
          </div>
          <div className=" flex items-center gap-2">
            <p className="text-secondary hover:text-brand text-xl ">$32.85 </p>
            <p className="text-secondary hover:text-brand text-xl">$33.8</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellsItem;
