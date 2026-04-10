import React from 'react';
import { use } from 'react';
import CartInfo from './CartInfo';

const Cart = ({CartPromises}) => {

    const cartData = use(CartPromises);
    console.log(cartData);
    return (
        <div className='w-10/12 mx-auto'>
            <div className='grid grid-cols-3 gap-11 w-9/12 mx-auto mb-32'>
                {
                    cartData.map(carts => <CartInfo key={carts.id} carts={carts}></CartInfo>)
                }
            </div>
        </div>
    );
};

export default Cart;