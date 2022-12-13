import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BsBasketFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { searchAction } from '../redux/actions/search';
import Logo from '../assets/Logo/Logo.png'

const Navbar = () => {
    const dispatch = useDispatch();
    const { cardItems } = useSelector(state => state.card);
    
    const [search, setSearch] = useState("")
    
    const searchEngine = (e) => {
       if(e.key === "Enter"){
        dispatch(searchAction(search))
       }
    }

    return (
        <div className='flex items-center justify-between px-3 h-28'>
           <Link to="/"><div className='text-2xl italic font-bold'>
            <img src={Logo} alt="Logo" className='transition-all w-36 h-36 hover:w-44 hover:h-44' />
            </div></Link> 
            <div className='flex items-center space-x-4'>
                <input value={search} onKeyPress={searchEngine} onChange={e => setSearch(e.target.value)} className='p-3 border rounded-lg outline-none' type="text" placeholder="Search..." />
                <div className='relative' onClick={() => dispatch({type:"DRAWER", payload: true})}>
                    <BsBasketFill size={35} className="cursor-pointer" />
                    <span className='absolute px-2 text-sm text-white bg-red-600 rounded-full -top-2 -right-3'>{cardItems?.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar