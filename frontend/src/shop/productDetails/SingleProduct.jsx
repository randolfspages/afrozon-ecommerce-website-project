import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import ProductsData from '../../data/products.json'
import RatingStars from '../../components/RatingStars';


const SingleProduct = () => {
    const {id} = useParams();
        
    console.log(ProductsData.id);

  return (
    <>
    <section
        className="container section__container shadow-sm"
        style={{ marginTop: '154px' }}>
        <h2 className="section__header capitalize">Shop Products</h2>
        <div className='section__subheader space-x-2 flex items-center justify-center text-red-700'>
            <span className=''><Link to='/'>Home</Link></span>
            <MdKeyboardDoubleArrowRight />

            <span className=''><Link to='/'>Shop</Link></span>
            <MdKeyboardDoubleArrowRight />


            <span className=''><Link to='/'>Product Name</Link></span>
        </div>
    </section>

    <section className='section__container mt-8'>

        <div className='flex flex-col items-center md:flex-row gap-8'>
            {/* product image */}
            <div className='md:w-1/2 w-full'>
                <img src='https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                     alt=""
                     className='rounded-md w-full h-auto' />
            </div>

            <div className='md:w-1/2 w-full'>
                <h3 className='text-2xl font-semibold mb-4 '>Product Name</h3>
                <p className='text-xl text-red-700'>$100 <s>$130</s></p>
                <p className='text-gray-400 mb-4'>this is product description</p>

                <div>
                    <p><strong>Category</strong> accessories</p>
                    <p><strong>Color</strong> beige</p>
                    <div className='flex gap-1 items-center'>
                        <strong>Rating: </strong>
                        <RatingStars rating={'4'} />
                    </div>
                </div>

                <button className='mt-6 px-6 py-3 bg-red-700 text-stone-200 rounded-md'>
                    Add to Cart
                </button>
            </div>
        </div>
    </section>

    {/* Display Reviews */}
    {/* To do  */}
    <section className='section__container mt-8'>
            Reviews Here
    </section>

    </>
  )
}

export default SingleProduct