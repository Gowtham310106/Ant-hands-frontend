// src/components/products/ProductInfo.jsx
import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CartContext } from '../../context/CartContext'
import Button from '../common/Button'
import { FiCheck, FiInfo } from 'react-icons/fi'

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const [customizationValues, setCustomizationValues] = useState({})
  const { addToCart } = useContext(CartContext)
  const navigate = useNavigate()

  const handleCustomizationChange = (name, value) => {
    setCustomizationValues(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAddToCart = () => {
    // Validate required customization fields
    if (product.isCustomizable && product.customizationFields) {
      const requiredFields = product.customizationFields.filter(field => 
        field.type !== 'textarea' || field.name === 'message'
      )
      const missingFields = requiredFields.filter(
        field => !customizationValues[field.name]?.trim()
      )
      
      if (missingFields.length > 0) {
        alert(`Please fill in: ${missingFields.map(f => f.label).join(', ')}`)
        return
      }
    }

    addToCart(product, quantity, customizationValues)
    
    // Show success feedback
    const event = new CustomEvent('cart:add', { 
      detail: { product, quantity } 
    })
    window.dispatchEvent(event)
    
    // Reset form
    setQuantity(1)
    setCustomizationValues({})
    
    // Navigate to cart
    navigate('/cart')
  }

  const handleBuyNow = () => {
    handleAddToCart()
    navigate('/checkout')
  }

  return (
    <div className="space-y-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-slate-600">
        <Link to="/" className="hover:text-anthands-rose transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link 
          to={`/collections/${product.collectionHandle}`} 
          className="hover:text-anthands-rose transition-colors capitalize"
        >
          {product.collectionHandle.replace('-', ' ')}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900 font-medium">{product.title}</span>
      </div>

      {/* Title */}
      <h1 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
        {product.title}
      </h1>

      {/* Price */}
      <div className="flex items-center space-x-4">
        <span className="text-3xl font-bold text-slate-900">
          ₹{product.price}
        </span>
        {product.compareAtPrice && (
          <>
            <span className="text-xl text-slate-500 line-through">
              ₹{product.compareAtPrice}
            </span>
            <span className="bg-anthands-rose text-white text-sm font-bold px-2 py-1 rounded-full">
              Save ₹{product.compareAtPrice - product.price}
            </span>
          </>
        )}
      </div>

      {/* Short Description */}
      <p className="text-lg text-slate-700">
        {product.shortDescription}
      </p>

      {/* Customization Fields */}
      {product.isCustomizable && product.customizationFields && (
        <div className="space-y-6 pt-6 border-t border-anthands-pink">
          <h3 className="font-display text-xl font-semibold text-slate-900">
            Personalize This Gift
          </h3>
          
          {product.customizationFields.map((field) => (
            <div key={field.name} className="space-y-2">
              <label className="block text-sm font-medium text-slate-900">
                {field.label}
                {field.helperText && (
                  <span className="ml-2 text-xs text-slate-500">
                    <FiInfo className="inline mr-1" />
                    {field.helperText}
                  </span>
                )}
              </label>
              
              {field.type === 'text' && (
                <input
                  type="text"
                  value={customizationValues[field.name] || ''}
                  onChange={(e) => handleCustomizationChange(field.name, e.target.value)}
                  className="w-full px-4 py-2 border border-anthands-pink rounded-lg focus:outline-none focus:ring-2 focus:ring-anthands-pink focus:border-transparent"
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                />
              )}
              
              {field.type === 'textarea' && (
                <textarea
                  value={customizationValues[field.name] || ''}
                  onChange={(e) => handleCustomizationChange(field.name, e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-anthands-pink rounded-lg focus:outline-none focus:ring-2 focus:ring-anthands-pink focus:border-transparent"
                  placeholder={`Write your ${field.label.toLowerCase()}`}
                />
              )}
              
{field.type === 'select' && (
  <select
    value={customizationValues[field.name] || ''}
    onChange={(e) => handleCustomizationChange(field.name, e.target.value)}
    className="w-full px-4 py-2 border border-anthands-pink rounded-lg focus:outline-none focus:ring-2 focus:ring-anthands-pink focus:border-transparent"
  >
    <option value="">Select {field.label.toLowerCase()}</option>
    {field.options?.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
)}
              
              {field.type === 'file' && (
                <div className="border-2 border-dashed border-anthands-pink rounded-lg p-4 text-center">
                  <input
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files[0]
                      if (file) {
                        handleCustomizationChange(field.name, file.name)
                      }
                    }}
                    className="hidden"
                    id={`file-${field.name}`}
                  />
                  <label
                    htmlFor={`file-${field.name}`}
                    className="cursor-pointer block"
                  >
                    <div className="text-anthands-rose mb-2">
                      <svg className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-700">
                      {customizationValues[field.name] 
                        ? `Selected: ${customizationValues[field.name]}`
                        : 'Click to upload photo'}
                    </span>
                  </label>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Quantity Selector */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-900">
          Quantity
        </label>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-anthands-pink rounded-lg">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 text-anthands-rose hover:bg-anthands-pink rounded-l-lg transition-colors"
            >
              -
            </button>
            <span className="px-4 py-2 min-w-[60px] text-center font-medium">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 text-anthands-rose hover:bg-anthands-pink rounded-r-lg transition-colors"
            >
              +
            </button>
          </div>
          <span className="text-sm text-slate-600">
            {product.isCustomizable ? 'Custom made for you' : 'Ready to ship'}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-anthands-pink">
        <Button
          onClick={handleAddToCart}
          variant="primary"
          className="flex-1 py-4 text-lg"
        >
          Add to Cart
        </Button>
        <Button
          onClick={handleBuyNow}
          variant="dark"
          className="flex-1 py-4 text-lg"
        >
          Buy Now
        </Button>
      </div>

      {/* Product Details */}
      <div className="space-y-4 pt-6 border-t border-anthands-pink">
        <div className="flex items-center text-sm">
          <FiCheck className="text-anthands-rose mr-2" />
          <span className="text-slate-700">Free shipping on orders over ₹499</span>
        </div>
        <div className="flex items-center text-sm">
          <FiCheck className="text-anthands-rose mr-2" />
          <span className="text-slate-700">Delivery in 3-7 business days</span>
        </div>
        <div className="flex items-center text-sm">
          <FiCheck className="text-anthands-rose mr-2" />
          <span className="text-slate-700">Secure payment options</span>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo