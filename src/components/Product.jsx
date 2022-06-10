import React from 'react'
import ProductCard from './ProductCard'

const Product = ({ products, handleAddToCart }) => {

    return (
        <div id='products' className='max-w-[1240px] mx-auto my-16 px-0 md:px-8'>

            <h3 className='pb-8 md:pb-16 pl-4 text-center'>Products</h3>

            <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-4'>

                {products.map((product) => (
                    <ProductCard 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    />
                ))}

            </div>

        </div>
    )
}

export default Product