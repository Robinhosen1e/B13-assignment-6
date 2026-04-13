import React from 'react';
import { toast } from 'react-toastify';

const Cartes = ({setSelectedCart , selectedCart ,}) => {

   const handleDeleteButton = (item) => {
  setSelectedCart((prevSelectedCart) =>
    prevSelectedCart.filter((cartItem) => cartItem.name !== item.name)
    
  );
  toast(`Remove Successfully`)
};

const total = selectedCart.reduce((sum, item) => {
  return sum + item.price;
}, 0);

    return (
         <div>
            { selectedCart.length === 0 ?
            <div className=' p-52 border-2 mb-20 border-gray-300 rounded-2xl flex  text-center justify-center items-center gap-3 flex-col' >
                <h2 className='font-bold text-4xl text-gray-600'>No Player Select Yet</h2>
                <p className=' text-gray-400 '>Go to Available tap to select player</p>
            </div>
               : <div className=' border-2 mb-20 border-gray-300 p-10 rounded-2xl  justify-center items-center'>
                 <h2 className='text-3xl mb-3 font-medium '>Your Card</h2>

                 {
                    selectedCart.map((selects , index) => {
                    return <div key={index} className='flex justify-between items-center gap-6 py-4 px-4 rounded-2xl mb-3 bg-[#e9ecf1e0]'>
                        <div className='flex items-center gap-4'>
                            <img className='py-3 px-3 rounded-4xl bg-white ' src={selects.icon} alt="" />
                            <div>
                               <h2 className='flex items-center text-2xl text-[#101727] font-medium gap-1.5'> {selects.name}</h2>

                               <p className='text-[#627382] font-medium text-xl'>${selects.price}</p>
                            </div>
                        </div>
                        <button className='btn text-red-500 rounded-2xl ' onClick={() => handleDeleteButton(selects)} >
                            <h2>Remove</h2>
                        </button>
                    </div>
                })
                 }
                 <div className='flex justify-between py-6'>
                    <h2 className=' text-xl mb-3 font-medium '>Total:</h2>
                    <h2 className='text-xl font-bold'>${total}</h2>
                 </div>
                 
                 <button 
                 onClick={() => {
    if (selectedCart.length > 0) {
      toast.success("Thank you! Your order has been placed successfully. 🛍️"); 

      setSelectedCart([]); 
    }
  }}
                 className='btn w-full rounded-4xl py-6 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-medium text-xl'>Proceed to Checkout</button>
               </div>
            }
        </div>
    );
};

export default Cartes;