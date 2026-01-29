import React, { useState, useEffect } from 'react';
import './Shop.css';

const Shop = () => {
  // Dummy Product Data
  const productsData = [
    {
      id: 1,
      name: "Neon Cyber T-Shirt",
      price: 399,
      originalPrice: 599,
      rating: 4.5,
      reviews: 128,
      description: "Futuristic cyberpunk design with glowing accents",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      category: "t-shirts",
      isNew: true,
      discount: 25
    },
    {
      id: 2,
      name: "Holographic Hoodie",
      price: 499,
      rating: 4.8,
      reviews: 256,
      description: "Iridescent holographic finish with neon trim",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      category: "hoodies",
      isNew: true
    },
    {
      id: 3,
      name: "Digital Glitch Tee",
      price: 799,
      rating: 4.3,
      reviews: 89,
      description: "Glitch art design with neon color palette",
      image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop",
      category: "t-shirts",
      discount: 15
    },
    {
      id: 4,
      name: "Synthwave Jacket",
      price: 699,
      originalPrice: 999,
      rating: 4.9,
      reviews: 342,
      description: "Retro-futuristic jacket with LED lighting",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop",
      category: "jackets",
      isNew: true
    },
    {
      id: 5,
      name: "Matrix Code Sweater",
      price: 499,
      rating: 4.6,
      reviews: 178,
      description: "Green code pattern on black background",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
      category: "sweaters"
    },
    {
      id: 6,
      name: "Neon Night Runner",
      price: 899,
      rating: 4.4,
      reviews: 95,
      description: "Reflective neon stripes for night visibility",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
      category: "t-shirts"
    },
    {
      id: 7,
      name: "Cyberdeck Access Pack",
      price: 299,
      originalPrice: 34.99,
      rating: 4.7,
      reviews: 201,
      description: "Set of futuristic accessories",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      category: "accessories",
      discount: 30
    },
    {
      id: 8,
      name: "Quantum Leap Cap",
      price: 399,
      rating: 4.2,
      reviews: 67,
      description: "LED-embedded baseball cap",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
      category: "accessories",
      isNew: true
    },
    {
      id: 9,
      name: "Neon Grid Pullover",
      price: 599,
      originalPrice: 799,
      rating: 4.7,
      reviews: 156,
      description: "Geometric grid pattern with neon highlights",
      image: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?w=400&h=400&fit=crop",
      category: "sweaters",
      discount: 15
    },
    {
      id: 10,
      name: "Cyber Punk Vest",
      price: 799,
      rating: 4.5,
      reviews: 89,
      description: "Tactical vest with utility pockets",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
      category: "jackets"
    },
    {
      id: 11,
      name: "Digital Dreams Tee",
      price: 299,
      rating: 4.4,
      reviews: 112,
      description: "Abstract digital art print",
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop",
      category: "t-shirts"
    },
    {
      id: 12,
      name: "Retro Wave Hoodie",
      price: 699,
      originalPrice: 79.99,
      rating: 4.8,
      reviews: 234,
      description: "80s retro wave design with sunset gradient",
      image: "https://images.unsplash.com/photo-1578763460783-31b8947c428a?w=400&h=400&fit=crop",
      category: "hoodies",
      isNew: true,
      discount: 20
    }
  ];

  // State Management
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('neonStoreCart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('neonStoreCart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Get all unique categories
  const categories = ['all', ...new Set(productsData.map(p => p.category))];

  // Filter and sort products
  const filteredProducts = productsData
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.id - a.id;
        default:
          return a.id - b.id; // featured/default
      }
    });

  // Cart Functions
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    
    setIsCartOpen(true);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.id !== productId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Helper Functions
  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star full">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }
    
    return stars;
  };

  // Product Card Component
  const ProductCard = ({ product }) => {
    return (
      <div className="product-card glow-border fade-in">
        <div className="product-image-container">
          <div 
            className="product-image"
            style={{ 
              backgroundImage: `linear-gradient(45deg, rgba(255, 0, 255, 0.1), rgba(0, 255, 255, 0.1)), 
                              url(${product.image})` 
            }}
          >
            {product.isNew && <span className="new-badge">NEW</span>}
            {product.discount && (
              <span className="discount-badge neon-yellow">-{product.discount}%</span>
            )}
          </div>
        </div>

        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          
          <div className="product-rating">
            <div className="stars">
              {renderStars(product.rating)}
            </div>
            <span className="rating-count">({product.reviews})</span>
          </div>

          <p className="product-description">{product.description}</p>

          <div className="product-footer">
            <div className="price-container">
              <span className="price neon-yellow">₹{product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="original-price">₹{product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            <button 
              className="add-to-cart neon-button"
              onClick={() => addToCart(product)}
              aria-label={`Add ${product.name} to cart`}
            >
              <span className="button-text">Add to Cart</span>
              <span className="button-icon">+</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Cart Component
  const Cart = () => {
    const getTotalItems = () => {
      return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    if (!isCartOpen) return null;

    return (
      <>
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>
        <div className="cart-sidebar">
          <div className="cart-header">
            <h2 className="cart-title">
              <span className="neon-text">Your Cart</span>
              <span className="cart-count-badge">{getTotalItems()} items</span>
            </h2>
            <button 
              className="close-cart"
              onClick={() => setIsCartOpen(false)}
              aria-label="Close cart"
            >
              ×
            </button>
          </div>

          <div className="cart-items">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <div className="empty-cart-icon">🛒</div>
                <p className="empty-cart-text">Your cart is empty</p>
                <p className="empty-cart-subtext">Add some items to get started!</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="cart-item glow-border">
                  <div 
                    className="cart-item-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  
                  <div className="cart-item-info">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <p className="cart-item-price neon-yellow">${item.price.toFixed(2)}</p>
                    
                    <div className="cart-item-controls">
                      <div className="quantity-controls">
                        <button 
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      
                      <button 
                        className="remove-item"
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove item"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  
                  <div className="cart-item-total">
                    <span className="neon-yellow">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="cart-footer">
              <div className="cart-summary">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span className="free-shipping">FREE</span>
                </div>
                <div className="summary-row">
                  <span>Tax</span>
                  <span>${(calculateTotal() * 0.1).toFixed(2)}</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span className="total-price neon-yellow">
                    ${(calculateTotal() * 1.1).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="cart-actions">
                <button className="checkout-button neon-button">
                  Proceed to Checkout
                </button>
                <button 
                  className="clear-cart-button"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
              
              <p className="secure-checkout">
                🔒 Secure checkout • 256-bit SSL encryption
              </p>
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="shop-container">
      {/* Shop Header */}
      <section className="shop-header">
        <div className="container">
          <h1 className="shop-title neon-text">Premium Collection</h1>
          <p className="shop-subtitle">
            Discover our futuristic apparel collection with glowing neon designs
          </p>
          
          <div className="shop-stats">
            <div className="shop-stat">
              <span className="shop-stat-number neon-yellow">{productsData.length}</span>
              <span className="shop-stat-label">Premium Products</span>
            </div>
            <div className="shop-stat">
              <span className="shop-stat-number neon-cyan">4.8★</span>
              <span className="shop-stat-label">Avg. Rating</span>
            </div>
            <div className="shop-stat">
              <span className="shop-stat-number neon-magenta">24h</span>
              <span className="shop-stat-label">Fast Shipping</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-container">
            <div className="search-container">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                <span className="search-icon">🔍</span>
              </div>
            </div>

            <div className="filter-options">
              <div className="filter-group">
                <span className="filter-label">Category:</span>
                <div className="category-filters">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <span className="filter-label">Sort by:</span>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-dropdown"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          <div className="active-filters">
            {searchTerm && (
              <span className="active-filter">
                Search: "{searchTerm}"
                <button 
                  className="remove-filter"
                  onClick={() => setSearchTerm('')}
                >
                  ×
                </button>
              </span>
            )}
            {selectedCategory !== 'all' && (
              <span className="active-filter">
                Category: {selectedCategory}
                <button 
                  className="remove-filter"
                  onClick={() => setSelectedCategory('all')}
                >
                  ×
                </button>
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <div className="products-header">
            <h2 className="products-title">
              {filteredProducts.length} Products Found
            </h2>
            <button 
              className="cart-toggle-button neon-button"
              onClick={() => setIsCartOpen(true)}
            >
              <span className="cart-icon">🛒</span>
              <span className="cart-count">{getCartCount()}</span>
            </button>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-products-found">
              <div className="no-products-icon">🔍</div>
              <h3 className="no-products-title">No products match your search</h3>
              <p className="no-products-description">
                Try adjusting your filters or search terms
              </p>
              <button 
                className="reset-filters-button neon-button"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSortBy('featured');
                }}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Cart Component */}
      <Cart />
    </div>
  );
};

export default Shop;