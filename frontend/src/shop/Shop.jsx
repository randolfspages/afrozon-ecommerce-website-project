import React, { useEffect, useState } from 'react';
import productsData from '../data/products.json';
import ProductCards from './ProductCards';
import ShopFiltering from './ShopFiltering'
import { useFetchAllProductsQuery } from '../redux/features/products/productsApi';


const filters = {
  categories: ['all', 'accessories', 'dress', 'jewellery', 'cosmetics'],
  colors: ['all', 'black', 'red', 'gold', 'blue', 'silver', 'beige', 'green'],
  priceRange: [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: '$100-$200', min: 100, max: 200 },
    { label: '$200 and above', min: 200, max: Infinity },
  ],
};

const Shop = () => {
  const [filterState, setFilterState] = useState({
    category: 'all',
    color: 'all',
    priceRange: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  const {category, color, priceRange} = filterState;
  const [minPrice, maxPrice] = priceRange.split('_').map(Number)

  const {data: {products= [], totalPages, totalProducts} = {}, error, isLoading} = useFetchAllProductsQuery({
    category: category !== 'all' ? category : '',
    color: color !== 'all' ? color: '',
    minPrice: isNaN(minPrice) ? '' : minPrice,
    maxPrice: isNaN(maxPrice) ? '' : maxPrice,
    page: currentPage, 
    limit: productsPerPage
  })

  // Clear the filters
  const clearFilters = () => {
    setFilterState({
      category: 'all',
      color: 'all',
      priceRange: '',
    });
  };

  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error loading products.</div>

  const startProduct = (currentPage - 1) * productsPerPage + 1;
  const endProduct = startProduct + products.length - 1;

  return (
    <>
      <section
        className="container section__container shadow-sm"
        style={{ marginTop: '154px' }}
      >
        <h2 className="section__header capitalize">Shop Products</h2>
        <p className="section__subheader">
          Discover the Hottest Picks: Elevate Your Style with our Curated
          Collection of Trending Women's Fashion Products.
        </p>
      </section>

      <section className="section__container">
        <div className="flex flex-col md:flex-row md:gap-12 gap-8">
          {/* // left side */}
          <ShopFiltering 
          filters={filters} 
          filterState={filterState} 
          setFilterState={setFilterState}
          clearFilters={clearFilters} 
          />

          <div>
            <h3 className="text-xl font-medium mb-4">
              Available products: {products.length}
            </h3>
            <ProductCards products={products} />
            
            
            {/* Pagination Controls */}
            <div className='mt -6 flex justify-center'>
                <button className='px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2'>
                  Previous
                </button>

                {
                  [...Array(totalPages)].map((_, index) => (
                    <button 
                    key={index}
                    className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}
                                rounded-md mx-1`}
                    >{index + 1}</button>
                  
                  ))
                <button className='px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2'>
                  Next
                </button>
            </div>

          </div>
        </div>
      </section>

     
    </>
  );
};

export default Shop;
