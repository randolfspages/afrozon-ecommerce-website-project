import React, { useEffect, useState } from 'react';
import productsData from '../data/products.json';
import ProductCards from './ProductCards';
import ShopFiltering from './ShopFiltering'


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
  const [products, setProducts] = useState(productsData);
  const [filterState, setFilterState] = useState({
    category: 'all',
    color: 'all',
    priceRange: '',
  });

  // filtering function
  const applyFilters = () => {
    let filteredProducts = productsData;

    // filter by category
    if (filterState.category && filterState.category !== 'all') {
      filteredProducts = filteredProducts.filter(
        (products) => products.category === filterState.category
      );
    }

    if (filterState.color && filterState.color !== 'all') {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === filterState.color
      );
    }

    // filter by price
    if (filterState.priceRange) {
      const [minPrice, maxPrice] = filterState.priceRange.split('-').map(Number);
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }

    setProducts(filteredProducts);
  };

  useEffect(() => {
    applyFilters();
  }, [filterState]);

  // Clear the filters
  const clearFilters = () => {
    setFilterState({
      category: 'all',
      color: 'all',
      priceRange: '',
    });
  };

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
          </div>
        </div>
      </section>

     
    </>
  );
};

export default Shop;
