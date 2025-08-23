import { AiTwotoneAppstore } from "react-icons/ai";
import PopularProductItems from "../Home/PopularProductItems";
import ShowProducts from "../ShowProducts";

const ShopProducts = async () => { 
const res=await fetch(`https://dummyjson.com/products?limit=15&skip=2`, {
  method: 'GET',
});
const products=await res.json();
console.log(products);

  return (
    <section className="pb-12">
      <div className="container">
        <div className="flex justify-between">
          <p>We found {products?.total} items for you!</p>
         <ShowProducts/>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
         {
          products.products.map((item)=>(
            <PopularProductItems key={item.id}  data={item}/>
          ))
         }
    
         
         
        </div>
      </div>
    </section>
  );
};

export default ShopProducts;
