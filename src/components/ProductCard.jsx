import React from 'react'

import { MdOutlineAddShoppingCart } from 'react-icons/md'

const ProductCard = ({ product, handleAddToCart }) => {

  return (
    <div className='flex flex-col shadow-lg rounded-2xl px-4 py-8 mb-4 hover:shadow-teal-300 hover:border-teal-300'>

      <img className='p-4 w-full h-full object-cover pb-8' src={product.image.url} alt={product.id}/>
      <h4 className='py-2 text-3xl text-[#393E46] font-bold'>{product.name}</h4>
      <p dangerouslySetInnerHTML={{ __html: product.description }} className='py-2 text-slate-500'></p>

      <div className='flex justify-between py-2'>
        <p className='text-xl font-bold'>RM {product.price.raw}</p>
        <MdOutlineAddShoppingCart size={20} onClick={() => handleAddToCart(product.id, 1)} className='cursor-pointer text-teal-800 hover:text-teal-500/70' />
      </div>

    </div>
  )
}

export default ProductCard