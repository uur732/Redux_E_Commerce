import React from 'react'

const ProductCard = ({prd}) => {
  return (
    <div className='hover:border-cyan-600 w-1/5 h-[350px] border rounded-lg m-2 flex flex-col items-center p-1 space-y-2'>
      <img onClick={()=>window.location = `detail/${prd.id}`} src={prd?.image} alt={prd?.title} className="object-cover h-32" />
      <div className='h-16 mt-2 font-bold text-center'>{(prd?.title).substring(0, 30)}</div>
      <div className='text-sm text-center opacity-70'>{(prd?.description).substring(0, 45)}</div>
      <div className='text-lg font-bold'>{prd?.price} $</div>
      <button onClick={()=>window.location = `detail/${prd.id}`}  className='w-full p-2 text-white rounded-lg bg-cyan-600'>ADD TO CART</button>
    </div>
  )
}

export default ProductCard