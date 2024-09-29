import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { LuUser2 } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Banner = () => {
  
  const products = useSelector((state) => state.cart.products);
   console.log(products);


  return (
    
    <div>
        <div className='px-4 mx-auto fixed top-0 right-0 left-0 bg-white' style={{zIndex:'100', marginTop:'74px', padding:'0',}}>
              <div className='py-6 relative flex justify-evenly space-x-10' style={{}}>
                <span>
                  <Link to='/search'><IoIosSearch className='h-7 w-7' /></Link>
                </span>

                <span>
                  <button>
                    <AiOutlineShopping className='h-7 w-7 relative' />
                    <div className='absolute top-3 right-45 text-xs inline-block px-1.5 bg-red-700 text-stone-200' style={{borderBottomLeftRadius:'6px', borderBottomRightRadius:'6px'}}>{products.length}</div>
                  </button>
                </span>

                <span>
                  <Link><LuUser2 className='h-7 w-7' /></Link>
                </span>
          </div>
        </div>
    </div>

    
  )
}

export default Banner