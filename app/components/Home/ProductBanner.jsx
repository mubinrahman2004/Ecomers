import React from 'react'
import ProductBaneerItems from './ProductBaneerItems'

const ProductBanner = ({}) => {
  return (
    <section className='pb-12'>
      <div className="container flex flex-col sm:flex-row gap-6">
          <ProductBaneerItems bg="/product-banner.png">
          Everyday Fresh & Clean with Our Products
        </ProductBaneerItems>
        <ProductBaneerItems bg="/product-banner.png">
          Make your Breakfast Healthy and Easy
        </ProductBaneerItems>
        <ProductBaneerItems bg="/product-banner.png">
          The best Organic Products Online
        </ProductBaneerItems>
      </div>
    </section>
  )
}

export default ProductBanner