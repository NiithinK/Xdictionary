import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component
import ProductCard from '../components/ProductCard'; // Import the ProductCard component
import FilterBox from '../components/FilterBox'; // Import the FilterBox component
import './Home.css'; // Import the CSS file for styling

const Home = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [totalItems, setTotalItems] = useState(0);
    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setTotalItems(data.length);
                setPopularProducts(data.slice(0, 10)); // Get top 10 popular products
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    return (
        <>
            <Navbar />
            <div className="banner">
                <h2 className="bannerName">Discover Our Products</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, fugit. Reprehenderit quos officiis esse modi neque, tempore iusto nisi quisquam atque earum. Iusto rerum illum explicabo distinctio quaerat aperiam sed!</p>
            </div>
            <div className="content-header">
                        <div className="breadcrumb">
                            <span className="item-count">{totalItems} ITEMS</span>
                            <span className="filter-toggle" onClick={toggleFilter}>
                                {showFilter ? '<   Hide Filter' : '>   Show Filter'}
                            </span>
                        </div>
                        <div className="recommended-filter">
                            <select>
                                <option value="recommended">Recommended</option>
                                <option value="newest">Newest First</option>
                                <option value="popular">Popular</option>
                                <option value="priceHigh">Price High to Low</option>
                                <option value="priceLow">Price Low to High</option>
                            </select>
                        </div>
                    </div>
            <div className="content">
                <FilterBox showFilter={showFilter} />
                <div className="content-main">
                    
                    <div className="popular-products">
                        
                        <div className={`product-grid ${showFilter ? 'three-columns' : 'four-columns'}`}>
                            {popularProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                    {/* Add the rest of your page content here */}
                </div>
            </div>
        </>
    );
};

export default Home;
