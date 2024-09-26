
import React, {useState, useEffect} from 'react'
import axios from 'axios'



const App = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((res)=>setProduct(res.data))
    .catch((err)=>console.err('Error in fetching products:', err));
  },[]);

  const addToCart=(product)=>{
    setProduct(([...cart, product]));
  }

  return (
      <div className=" p-2  mt-6  bg-green-500 text-white ">
      <button className="text-3xl font-bold  mb-4">Ez Shoping</button>
      
    </div>
  );
}


export default App