import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

    const EmptyCart = () => (
        <div className='py-[10rem] flex flex-col items-center'>
            <h6 className='text-xl md:text-3xl'>Your cart is still empty :(</h6>

            <Link to='/'>
                <p className='p-4 my-8 w-[300px] text-xl rounded-xl bg-yellow-100 hover:bg-yellow-200'>Start Adding Something!</p>
            </Link>
        </div>
    )

    const FilledCart = () => (
        <>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-12 '>
                {cart.line_items.map((item) => (

                    <div className='flex justify-between p-2 md:p-4 md:my-4 h-[200px] hover:shadow-teal-200 shadow-lg md:rounded-xl' key={item.id}>

                        <div className=''>
                            <img className='w-full h-full object-cover' src={item.image.url} />
                        </div>

                        <div className='flex flex-col gap-2 items-end'>

                            <h6 className='text-xl md:text-2xl font-bold'>{item.name}</h6>

                            <div className='flex'>
                                <button type='button' onClick={() => handleUpdateCartQty(item.id, { quantity: item.quantity + 1 })} className='text-xl px-2 cursor-pointer hover:text-teal-500'>+</button>
                                <div className='text-xl'>{item.quantity}</div>
                                <button type='button' onClick={() => handleUpdateCartQty(item.id, { quantity: item.quantity - 1 })} className='text-xl px-2 cursor-pointer hover:text-teal-500'>-</button>
                            </div>

                            <p>{item.line_total.formatted_with_symbol}</p>

                            <button type='button' onClick={() => handleRemoveFromCart(item.id)} className='bg-white text-red-500 hover:bg-red-500/90 hover:text-white rounded-xl w-[5rem]'>Remove</button>

                        </div>
                    </div>
                ))}
            </div>

            <div className='p-4 flex flex-col items-center gap-4'>

                <h6 className='text-2xl font-bold'>Subtotal : {cart.subtotal.formatted_with_symbol}</h6>

                <Link className='w-[80%] max-w-[500px]' to='/'>
                    <button className='w-full py-2 bg-yellow-200 hover:bg-yellow-100 text-black rounded-xl'>Continue Shopping!</button>
                </Link>

                <button type='button' onClick={() => handleEmptyCart()} className='w-[80%] max-w-[500px] py-2 bg-red-500/90 hover:bg-red-400 text-white rounded-xl'>Empty Cart</button>

                <button type='button' onClick={() => alert('Checkout page is not available for now! ') } className='w-[80%] max-w-[500px] py-2 bg-teal-500 hover:bg-teal-400 text-white rounded-xl'>Checkout</button>

            </div>

        </>
    )

    if (!cart.line_items) {
        return (
            <p className='pt-[200px] text-center'>Loading...</p>
        )
    }

    return (
        <div className='pt-[120px] max-w-[1240px] mx-auto text-center'>
            <h3 className='text-3xl md:text-4xl'>Your Shopping Cart</h3>

            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </div>
    )
}

export default Cart