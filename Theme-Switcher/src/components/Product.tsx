import React, { useState, useEffect } from 'react'; 
import axios from 'axios';

const Home2: React.FC = () =>  {
  const [data, setData] = useState<any[] | null>(null); // Added type for data
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // Added error state

  async function fetchData() { // Renamed to fetchData for clarity
    try {
      setLoading(true); // Set loading to true before fetch
      setError(null); // Clearing previous errors
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
      console.log("Fetched data:", res.data);
    } catch (err: any) {
      console.error("Error fetching data:", err);
      setError(err.message || "An unknown error occurred"); // Store error message
    } finally {
      setLoading(false); // Set loading to false after fetch completes (success or failure)
    }
  }

  useEffect(() => {
    fetchData(); // Call fetchData when the component mounts
  }, []); // Empty dependency array means this runs once on mount
  
   const handleDummyButtonClick = () => {
 
    alert('Dummy button clicked! This is a placeholder action.');
  };


  return (
      <div className="content-area">
      {/* Main content section with title, paragraph, and button */}
      <div className="main-content-card">
        <h1 className="content-title">
          Explore Our Featured Products
        </h1>
        <p className="content-paragraph">
          Welcome to our dynamic product showcase! Below, you'll find a selection of items
          fetched live from a public API. This page demonstrates responsive design,
          theme customization, and dynamic data loading.
        </p>
        <div className="button-container">
          <button
            onClick={handleDummyButtonClick}
            className="action-button"
          >
            Discover More
          </button>
        </div>
      </div>

      {/* Section for displaying product cards */}
      <h2 className="section-title">
        Our Latest Collection
      </h2>

      {loading && (
        <p className="loading-message">Loading products...</p>
      )}
      {error && (
        <p className="error-message">Error: {error}</p>
      )}

      {/* Conditionally render product cards if not loading and no error */}
      {!loading && !error && data && (
        <div className="product-grid">
          {data.map((product) => (
            <div
              key={product.id}
              className="product-card"
            >
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
                onError={(e) => {
                  // Fallback for broken images
                  e.currentTarget.src = 'https://placehold.co/300x200/cccccc/333333?text=Image+Not+Found';
                }}
              />
              <h3 className="product-card-title">{product.title}</h3>
              <p className="product-card-category">Category: {product.category}</p>
              <p className="product-card-price">${product.price.toFixed(2)}</p>
              <p className="product-card-description">{product.description}</p>
              <button className="product-card-button">
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
      {!loading && !error && (!data || data.length === 0) && (
        <p className="no-products-message">No products found.</p>
      )}
    </div>
  );
}



export default Home2;







