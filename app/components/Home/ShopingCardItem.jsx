import Image from "next/image";
import React from "react";
import shopingiconImg from "../../../public/shopingicon.png"; // Assuming this is the correct path to the image

const ShopingCardItem = () => {
  return (
    <section className="pb-20">
      <div className="container">
        <div className="flex p-[30]  gap-3 rounded-xl bg-gray-300 w-fit ">
          <Image
            width={50}
            height={50}
            placeholder="blur"
            layout="relative"
            src={shopingiconImg}
            alt="shopingicon"
          />
          <div>
            <p className="text-base text-secondary font-semibold">
              Best prices & offers
            </p>
            <p className="text-base text-secondary font-semibold">
              Orders $50 or more
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopingCardItem;
