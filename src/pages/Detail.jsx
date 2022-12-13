import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { productActionDetail } from '../redux/actions/products';
import {AiOutlinePlus, AiOutlineLine} from 'react-icons/ai';
import { productsCard } from '../redux/actions/card';


const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector(state => state.product);

  const [count, setCount] = useState(1);

  useEffect(() => {
    dispatch(productActionDetail(id))
  }, [dispatch])

  const increment = (stock) => {
    if(count <= stock){
      setCount(count + 1)
    }
  }

  const decrement = () => {
    if(count > 0){
      setCount(count - 1)
    }
  }

  const addCard = () => {
    dispatch(productsCard(id, count))
    dispatch({type: "DRAWER", payload: true})
  }
  
  console.log("product", product);
  return (
    <div className='flex space-y-6'>
      <img src={product?.image} alt={product?.title} className="w-1/3" />
      <div className='flex-col w-2/3 space-y-6 text-center'>
        <div className='text-2xl font-bold'>{product?.title}</div>
        <div className='text-lg font-semibold leading-loose tracking-wide capitalize opacity-70'>{product?.description}</div>
        <div className='text-2xl font-bold capitalize'>Category: {product?.category}</div>
        <div className='text-xl font-bold'>Rating: {product?.rating?.rate}/5 - Stock: {product?.rating?.count}/1000</div>
        <div className='text-2xl font-bold'>{product?.price}$</div>
        <button onClick={addCard} className='w-2/5 h-16 text-2xl text-white border rounded-lg active:bg-black bg-cyan-600'>ADD TO CART</button>
      
        <div className='flex items-center space-x-4 ml-72'>
          <AiOutlineLine className='p-1 border rounded-full cursor-pointer' onClick={decrement} size={35} />
          <span className='text-2xl font-bold'>{count}</span>
          <AiOutlinePlus className='p-1 border rounded-full cursor-pointer' onClick={()=>increment(product?.rating?.count)} size={35} />
        </div>

      </div>
    </div>
  )
}

export default Detail