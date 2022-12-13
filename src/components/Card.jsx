import React, { useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../redux/actions/card';

const Card = () => {
  const dispatch = useDispatch();
  const { cardItems } = useSelector(state => state.card);

  const deleteCard = (id) => {
    dispatch(removeCart(id))
  }

  console.log("cardItems", cardItems)
  return (
    <div className='fixed top-0 right-0 z-50 w-1/3 h-full p-3 bg-white border'>
      <div className='flex items-center justify-between h-20'>
        <h1 className='text-2xl'>CART:</h1>
        <AiOutlineClose onClick={() => dispatch({ type: "DRAWER", payload: false })} size={25} className="cursor-pointer" />
      </div>
      {
        cardItems?.map((card, i) => (
          <div key={i} className='flex items-center justify-between py-4 mt-2 border-b h-28'>
            <img className='h-24' src={card?.image} alt={card?.title} />
            <div className='w-44'>
              <div className='text-sm font-bold'>{(card?.title).substring(0, 30)}... ({card?.qty})</div>
              <div className='text-xs opacity-70'>{(card?.description).substring(0, 85)}...</div>
            </div>
            <div className='text-lg font-bold'>{card?.price} $</div>
            <div onClick={()=>deleteCard(card.id)} className='w-20 p-2 text-center text-white bg-red-500 rounded-lg cursor-pointer'>DELETE</div>
          </div>
        ))
      }
    </div>
  )
}

export default Card