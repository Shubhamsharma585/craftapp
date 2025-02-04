import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../../constants';
import { StarFill, StarHalf, Star, Share } from 'react-bootstrap-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ProductDetails.css';

const ProductDetails = () => {
  const { productId } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showReferenceModal, setShowReferenceModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    referenceCode: '',
    name: '',
    mobile: '',
    address: '',
    quantity: 1
  });
  const [loading, setLoading] = useState(false);

  const product = PRODUCTS.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarFill key={`star-${i}`} className="star-filled" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="star-filled" />);
    }
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="star-empty" />);
    }
    return stars;
  };

  const handleOrderDetailsChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReferenceSubmit = (e) => {
    e.preventDefault();
    if (!orderDetails.referenceCode.trim()) {
      toast.error('Please enter a reference code');
      return;
    }
    setShowReferenceModal(false);
    setShowOrderModal(true);
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!orderDetails.name || !orderDetails.mobile || !orderDetails.address || !orderDetails.quantity) {
      toast.error('Please fill in all fields');
      return;
    }

    if (orderDetails.quantity < 1) {
      toast.error('Quantity must be at least 1');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/mvgzzbng', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          productName: product.name,
          productId: product.id,
          price: product.price,
          ...orderDetails,
          totalAmount: product.price * orderDetails.quantity
        })
      });

      if (response.ok) {
        toast.success('Order placed successfully! We\'ll contact you soon.');
        setShowOrderModal(false);
        setOrderDetails({
          referenceCode: '',
          name: '',
          mobile: '',
          address: '',
          quantity: 1
        });
      } else {
        throw new Error('Failed to place order');
      }
    } catch (error) {
      toast.error('Failed to place order. Please try again later.');
      console.error('Order submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="product-details-container">
      <div className="product-details-grid">
        <div className="product-gallery">
          <div className="main-image">
            <img src={product.images[selectedImage]} alt={product.name} />
          </div>
          <div className="thumbnail-grid">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} view ${index + 1}`}
                className={selectedImage === index ? 'selected' : ''}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        <div className="product-info-details">
          <h1>{product.name}</h1>
          <div className="rating-section">
            <div className="stars">
              {renderRatingStars(product.rating)}
            </div>
            <span className="rating-count">{product.reviews.length} ratings</span>
          </div>

          <div className="divider"></div>

          <div className="price-section">
            <span className="price-symbol">₹</span>
            <span className="price-amount">{product.price}</span>
          </div>

          <div className="key-features-section">
            <ul>
              <li><span className="check-icon">✓</span> Detailed craftsmanship</li>
              <li><span className="check-icon">✓</span> Auspicious design</li>
              <li><span className="check-icon">✓</span> Perfect for worship</li>
              <li><span className="check-icon">✓</span> Elegant gift packaging</li>
            </ul>
          </div>

          <div className="purchase-section">
            <div className="quantity-selector">
              <label htmlFor="quantity">Quantity:</label>
              <select 
                id="quantity" 
                value={orderDetails.quantity}
                onChange={(e) => setOrderDetails(prev => ({
                  ...prev,
                  quantity: parseInt(e.target.value)
                }))}
              >
                {[1,2,3,4,5,6,7,8,9,10].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <button 
              className="place-order-btn" 
              onClick={() => setShowOrderModal(true)}
            >
              Place Order
            </button>
            {/* <div className="secure-transaction">
              <span className="lock-icon">🔒</span> Secure transaction
            </div> */}
          </div>

          <div className="divider"></div>

          <div className="product-description">
            <p>{product.description}</p>
          </div>

          <div className="divider"></div>

          <div className="product-specs-grid">
            <div className="spec-row">
              <div className="spec-label">Theme</div>
              <div className="spec-value">Nature</div>
            </div>
            
            <div className="spec-row">
              <div className="spec-label">Material</div>
              <div className="spec-value">{product.specifications.material}</div>
            </div>
          
            <div className="spec-row">
              <div className="spec-label">Packaging</div>
              <div className="spec-value">{product.specifications.packaging}</div>
            </div>
            <div className="spec-row">
              <div className="spec-label">Style</div>
              <div className="spec-value">Modern</div>
            </div>
            <div className="spec-row">
              <div className="spec-label">Special Feature</div>
              <div className="spec-value">Hand Crafted</div>
            </div>
            <div className="spec-row">
              <div className="spec-label">Age Range</div>
              <div className="spec-value">All Ages</div>
            </div>
            <div className="spec-row">
              <div className="spec-label">Number of Pieces</div>
              <div className="spec-value">1</div>
            </div>
          </div>

          <div style={{
            border: "1px solid #e7e7e7",
            borderRadius: "8px",
            padding: "12px"
          }}>
            <h3>About this item</h3>
            <ul className="about-list">
              <li>These uniquely hand crafted and painted pieces make an excellent compliment to any home/office decor</li>

              <li>The realistic details and lifelike design make them a true work of art</li>
              <li>This lovely statue is rich in color and has a smooth surface, giving it a lifelike appearance</li>
              <li>A great gift for anyone who wants to add a touch of elegance to their home decor</li>
              <li>Versatile display options - perfect for shelves, mantels, or other areas where they can be admired</li>
            </ul>
          </div>

          <div className="reviews-section">
            <div className="reviews-header">
              <h2>Customer Reviews </h2>
              <div className="overall-rating">
                <div className="rating-summary">
                  <span className="average-rating">{product.rating.toFixed(1)}</span>
                  <div className="rating-stars">
                    {renderRatingStars(product.rating)}
                  </div>
                  <span className="total-reviews">{product.reviews.length} global ratings</span>
                </div>
              </div>
            </div>
            
            <div className="reviews-list">
              {product.reviews.map(review => (
                <div key={review.id} className="review-item">
                  <div className="review-item-content">
                    <div className="review-header">
                      <div className="reviewer-avatar">
                        {review.user.charAt(0)}
                      </div>
                      <div className="reviewer-info">
                        <div className="reviewer-name">{review.user}</div>
                        <div className="review-meta">
                          <div className="review-rating">
                            {renderRatingStars(review.rating)}
                          </div>
                          <span className="review-date">Reviewed on {review.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="review-body">
                      <p className="review-comment">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reference Code Modal */}
      {showReferenceModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Enter Reference Code</h3>
            <form onSubmit={handleReferenceSubmit}>
              <div className="form-group">
                <label htmlFor="referenceCode">Reference Code:</label>
                <input
                  type="text"
                  id="referenceCode"
                  name="referenceCode"
                  value={orderDetails.referenceCode}
                  onChange={handleOrderDetailsChange}
                  placeholder="Enter your reference code"
                  required
                />
              </div>
              <div className="modal-actions">
                <button type="button" onClick={() => setShowReferenceModal(false)}>
                  Cancel
                </button>
                <button type="submit">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Order Details Modal */}
      {showOrderModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Complete Your Order</h3>
              <button className="close-btn" onClick={() => setShowOrderModal(false)}>&times;</button>
            </div>
            

            <form onSubmit={handleOrderSubmit} className="order-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">
                    <span className="label-text">Name</span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={orderDetails.name}
                      onChange={handleOrderDetailsChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="mobile">
                    <span className="label-text">Mobile Number</span>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={orderDetails.mobile}
                      onChange={handleOrderDetailsChange}
                      placeholder="Your contact number"
                      required
                    />
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">
                  <span className="label-text">Delivery Address</span>
                  <textarea
                    id="address"
                    name="address"
                    value={orderDetails.address}
                    onChange={handleOrderDetailsChange}
                    placeholder="Enter your complete delivery address"
                    required
                    rows="2"
                  ></textarea>
                </label>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="quantity">
                    <span className="label-text">Quantity</span>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={orderDetails.quantity}
                      onChange={handleOrderDetailsChange}
                      min="1"
                      required
                    />
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="referenceCode">
                    <span className="label-text">Reference Code <span className="optional">(Optional)</span></span>
                    <input
                      type="text"
                      id="referenceCode"
                      name="referenceCode"
                      value={orderDetails.referenceCode}
                      onChange={handleOrderDetailsChange}
                      placeholder="Have a reference code?"
                    />
                  </label>
                </div>
              </div>

              <div className="order-summary">
                <div className="summary-row">
                  <span className="summary-label">Price per item</span>
                  <span className="summary-value">₹{product.price.toLocaleString('en-IN')}</span>
                </div>
                <div className="summary-row total">
                  <span className="summary-label">Total Amount</span>
                  <span className="summary-value">₹{(product.price * orderDetails.quantity).toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="modal-actions">
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? (
                    <span className="loading-text">
                      <span className="loader"></span>
                      Processing...
                    </span>
                  ) : (
                    'Place Order'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ToastContainer 
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ProductDetails; 