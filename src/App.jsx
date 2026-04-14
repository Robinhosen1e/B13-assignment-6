
import './App.css'
import Banner from './component/banner/Banner'
import Nevber from './component/nevber/Nevber'
import './component/font/icons';
import Counter from './component/counter/Counter';
import Cart from './component/cart/Cart';
import { Suspense, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import GrideAccountCreate from './component/gide line container/GrideAccountCreate';
import Pricing from './component/Pricing Section/Pricing';
import Footer from './component/footer/footer';



const fetchCart = async() => {
const res = await fetch('../public/data.json');
return res.json() ;}


function App() {

  const CartPromises = fetchCart();
   const [selectedCart , setSelectedCart] = useState([]);

  return (
    <>
      <Nevber></Nevber>
      <Banner></Banner>
      <Counter></Counter>

      <Suspense fallback={<span className='font-medium text-3xl text-center'> Data is loading</span>}>
       <Cart CartPromises={CartPromises} selectedCart={selectedCart} setSelectedCart={setSelectedCart}></Cart>
      </Suspense>


  <GrideAccountCreate />


       <Pricing></Pricing>

       <Footer></Footer>

      <ToastContainer />
    </>
  )
}

export default App
