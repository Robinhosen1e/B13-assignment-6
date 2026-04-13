import React from 'react';
import { use } from 'react';
import CartInfo from './CartInfo';
import { useState } from 'react';
import Cartes from '../Cart (2)/Cartes';

const Cart = ({CartPromises}) => {

    const [isProducts , setNonProducts] = useState('Products');

    console.log(isProducts , setNonProducts);

    const cartData = use(CartPromises);
    console.log(cartData);

    const [selectedCart , setSelectedCart] = useState([]);
    return (
        <div className='w-10/12 mx-auto'>
            <div className='w-7/12 mx-auto text-center items-center justify-center'>
                <div>
                     <h1 className='font-extrabold text-5xl mb-2.5'>Premium Digital Tools</h1>
                       <p className='text-[#627382] text-[16px] my-4'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity. </p>
                </div>
                <div className='mb-10 mt-8'>
                
                    <button onClick={() => setNonProducts('Products')} className={`btn ${isProducts === 'Products' ?
                         "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-white text-blue-600"} 
                         font-bold btn rounded-3xl mr-4 `}>Products</button>
                    <button onClick={() => setNonProducts('seclected')} className={`btn ${isProducts === 'seclected' ?
                         "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-white text-blue-600"} 
                         font-bold btn rounded-3xl `}>Cart ({selectedCart.length})</button>
                </div>
            </div>
            {
                isProducts === 'Products' ? <div className='grid grid-cols-3 gap-11 w-10/12 mx-auto mb-32'>
                {
                     cartData.map(carts => <CartInfo key={carts.id} carts={carts} setSelectedCart={setSelectedCart} selectedCart={selectedCart} setNonProducts={setNonProducts} ></CartInfo>) 
                     
                }
            </div> : <div> <Cartes selectedCart={selectedCart} setSelectedCart={setSelectedCart} cartData={cartData} ></Cartes> </div>
            }
        </div>
    );
};

export default Cart;