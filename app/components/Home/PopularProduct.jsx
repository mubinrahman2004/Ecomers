import React from "react";
import PopularProductItems from "./PopularProductItems";



const PopularProduct = async() => {
   const res= await fetch(" https://api.escuelajs.co/api/v1/products",{
    method: "GET",
})
const data = await res.json();
console.log(data);
  return (
    <section>
      <section className="pb-12">
        <div className="container">
          <div className="flex justify-between flex-col md:flex-row gap-7 items-center md:items-end">
            <h2 className="sectn_heading">Popular Products</h2>
            <ul className="flex flex-wrap text-base font-light text-primary gap-2 md:gap-7">
              <li>
                <button className="hover:text-brand cursor-pointer">All</button>
              </li>
              <li>
                <button className="hover:text-brand cursor-pointer">
                  Milks & Dairies
                </button>
              </li>
              <li>
                <button className="hover:text-brand cursor-pointer">
                  Coffes & Teas
                </button>
              </li>
              <li>
                <button className="hover:text-brand cursor-pointer">
                  {" "}
                  Pet Foods
                </button>
              </li>
              <li>
                <button className="hover:text-brand cursor-pointer">
                  Vegetables
                </button>
              </li>
              <li>
                <button className="hover:text-brand cursor-pointer">
                  Fruits
                </button>
              </li>
            </ul>
          </div>
          <div className="pt-11 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-8">
          {
            data.map((item)=>{
              <PopularProductItems key={item.id} catagory={item}/>

            })
          }
           
          </div>
        </div>
      </section>
    </section>
  );
};

export default PopularProduct;
