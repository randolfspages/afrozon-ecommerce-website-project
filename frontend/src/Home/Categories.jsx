import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {

    const categories = [
        {name:'accessories', path:'/categories/:accessories', image:'/category-1.jpg'},
        {name:'dress', path:'/categories/:dresses', image:'/category-2.jpg'},
        {name:'jewellery', path:'/categories/:jewelleries', image:'/category-3.jpg'},
        {name:'cosmetics', path:'/categories/:comestics', image:'/category-4.jpg'},

    ]
  return (
    <>
    <div className='product__grid'>
        {
            categories.map((category) => (
                <Link key={category.name} to={`/categories/${category.name}`} className='categories__card'>
                    <img src={category.image} alt={category.name} />
                    <h4>{category.name}</h4>
                </Link>
            ))
        }
    </div>

    </>
  )
}

export default Categories