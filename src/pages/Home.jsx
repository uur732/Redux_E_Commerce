import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard';
import { productsAction } from '../redux/actions/products';
import { searchAction } from '../redux/actions/search';


const Home = () => {
  const {products} = useSelector(state => state.products);
  const dispatch = useDispatch();
  const { search } = useSelector(state => state.search);

  useEffect(()=>{
      dispatch(productsAction())
      dispatch(searchAction())
  },[dispatch])

  console.log("products", products);
  return (
    <div className='flex flex-wrap justify-center'>
      {
        search.length > 0 ? 
        search.map((prd, i) => (
          <ProductCard key={i} prd={prd} />
        )) :
        products && products.map((prd, i)=>(
          <ProductCard key={i} prd={prd} />
        ))
      }
    </div>
  )
}

export default Home