import React from 'react'
import { RiCloseLargeFill } from "react-icons/ri";




const CartModal = ({products, isOpen, onClose}) => {

    
  return (
    <div className={`fixed z-[1000] inset-0 bg-black bg-opacity-50 transition-opacity
    ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    style={{transition: 'opacity 300ms'}}>
        
        <div className={`fixed right-0 top-0 md:w-1/3 w-full bg-white h-full overflow-y-auto
            transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            style={{transition:'transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}>

                <div className='p-4 mt-4'>
                    <div className='flex justify-between items-center mb-4'>
                        <h4 className='text-xl font-semibold'>Your Cart</h4>
                        <button onClick={() => onClose()} 
                                className='text-red-400 hover:text-red-700'>
                                <RiCloseLargeFill className='w-5 h-5'/>
                        </button>
                    </div>

                    <div>
                        {
                            products.length === 0 ? (<div>Your cart is empty</div>) 
                            : (products.map((item, index) => (
                                <div key={index}>
                                    <div>
                                        <span className='mr-4 px-1 bg-red-700 rounded-full text-white'>0{index + 1}</span>
                                        <img src={item.image} alt="" className='size-12 object-cover mr-4' />
                                    </div>
                                </div>
                               ))
                            )
                        }
                    </div>

                </div>
        </div>
    </div>
  )
}

export default CartModal