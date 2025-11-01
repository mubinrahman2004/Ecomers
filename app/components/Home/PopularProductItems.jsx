import React from "react";
import productImg from "../../../public/product.png";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

import { CiShoppingCart } from "react-icons/ci";
import Image from "next/image";

const PopularProductItems = (catagory) => {
  return (
    <section>
      <div className="block p-2 md:p-6 border border-[#5ea5eb] rounded-2xl w-fit group relative overflow-hidden">
        <div className="absolute top-0 left-0 bg-amber-500 text-white text-xs px-2 py-1 rounded-br-xl">
          <p>sale</p>
        </div>
        <Image
          width={50}
          height={50}
          // layout="responsive" <--- এটি মুছে দিন
          src={catagory.image || productImg} // ফলব্যাক হিসাবে null ব্যবহার করুন
          blurDataURL={catagory.image || productImg}
          alt="product"
        />
        <h4 className="text-xs font-normal text-secondary">Hodo Foods</h4>
        <Link
          href="/"
          className="text-primary font-bold text-sm md:text-base hover:text-brand transition-all"
        >
          {catagory.slug}
        </Link>
        <div className="flex gap-3 py-2.5">
          <ul className="flex text-amber-400">
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
          </ul>
          <p className="text-xs font-normal text-secondary">(4.0)</p>
        </div>
        <p className="text-sm font-normal text-secondary">
          By <span className="text-brand">{catagory.price}</span>
        </p>
        <div className="flex flex-col md:flex-row gap-2 justify-between pt-6">
          <h4 className="text-sm md:text-lg font-bold text-brand flex gap-2">
            $54.85
            <span className="text-base line-through text-secondary ">
              $28.85
            </span>
          </h4>
          <button className=" flex items-center justify-center text-brand font-bold text-lg p-1 rounded-sm bg-[#DEF9EC] cursor-pointer gap-3">
            <CiShoppingCart className="text-2xl" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularProductItems;
