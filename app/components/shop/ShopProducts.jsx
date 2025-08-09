import { AiTwotoneAppstore } from "react-icons/ai";
import PopularProductItems from "../Home/PopularProductItems";

const ShopProducts = () => {
  return (
    <section className="pb-12">
      <div className="container">
        <div className="flex justify-between">
          <p>We found 10 items for you!</p>
          <div className="flex items-center gap-2 p-2 border border-[#CACACA] rounded">
            <AiTwotoneAppstore />
            <label htmlFor="show">Show: </label>
            <select id="show">
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="150">150</option>
              <option value="200">200</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
          <PopularProductItems />
          <PopularProductItems />
          <PopularProductItems />
          <PopularProductItems />
          <PopularProductItems />
          <PopularProductItems />
          <PopularProductItems />
          <PopularProductItems />
          <PopularProductItems />
          <PopularProductItems />
          <PopularProductItems />
          <PopularProductItems />
          <PopularProductItems />
          <PopularProductItems />
          <PopularProductItems />
          <PopularProductItems />
          <PopularProductItems />
          <PopularProductItems />
          <PopularProductItems />
          <PopularProductItems />
         
         
        </div>
      </div>
    </section>
  );
};

export default ShopProducts;
