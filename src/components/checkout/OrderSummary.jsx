// src/components/checkout/OrderSummary.jsx - Updated with theme colors
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { motion } from 'framer-motion'
import { FiCheck, FiPackage, FiTruck, FiMessageSquare, FiClock } from 'react-icons/fi'

const OrderSummary = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  const shippingFreeThreshold = 499
  const shippingCost = cartTotal >= shippingFreeThreshold ? 0 : 49
  const total = cartTotal + shippingCost
  const needsForFreeShipping = Math.max(0, shippingFreeThreshold - cartTotal)

  if (cartItems.length === 0) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 border border-amber-200 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
            <FiPackage className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900">
              Your Order
            </h3>
            <p className="text-gray-600 text-sm">Your cart is currently empty</p>
          </div>
        </div>
        
        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-200 to-orange-200 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">🛒</span>
          </div>
          <p className="text-gray-600 mb-6">Add some personalized gifts to get started!</p>
          <Link
            to="/collections/all"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Shopping
            <div className="w-4 h-4 transform group-hover:translate-x-1 transition-transform">
              →
            </div>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 border border-amber-200 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
            <FiPackage className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900">
              Order Summary
            </h3>
            <p className="text-gray-600 text-sm">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your order
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 px-3 py-1 rounded-full">
          <span className="text-sm font-bold text-amber-700">Step 2 of 4</span>
        </div>
      </div>
      
      {/* Order Items */}
      <div className="space-y-4 mb-6 max-h-[320px] overflow-y-auto pr-2">
        {cartItems.map((item, index) => (
          <motion.div
            key={`${item.product.id}-${index}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group p-4 bg-gradient-to-r from-amber-50/50 to-orange-50/50 hover:from-amber-100/50 hover:to-orange-100/50 rounded-xl border border-amber-200 hover:border-amber-300 transition-all duration-200"
          >
            <div className="flex gap-4">
              {/* Product Image */}
              <div className="flex-shrink-0 relative">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 border border-amber-300">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Quantity Badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs font-black rounded-full flex items-center justify-center shadow-lg">
                  {item.quantity}
                </div>
              </div>
              
              {/* Product Info */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between mb-1">
                  <h4 className="font-display font-bold text-gray-900 line-clamp-2 group-hover:text-amber-700 transition-colors">
                    {item.product.title}
                  </h4>
                  <span className="font-bold text-amber-700 text-lg flex-shrink-0 ml-2">
                    ₹{item.product.price * item.quantity}
                  </span>
                </div>
                
                <div className="text-sm text-gray-600 mb-2">
                  Qty: {item.quantity} × ₹{item.product.price}
                </div>
                
                {/* Customization Summary */}
                {item.customizationValues && Object.keys(item.customizationValues).length > 0 && (
                  <div className="mt-2">
                    <div className="text-xs font-semibold text-gray-900 mb-1 flex items-center gap-1">
                      <span className="text-amber-600">✨</span>
                      Personalization:
                    </div>
                    <div className="text-xs text-gray-600 bg-white/50 backdrop-blur-sm rounded-lg p-2 border border-amber-200">
                      {Object.entries(item.customizationValues).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="font-medium capitalize">{key}:</span>
                          <span className="text-gray-800">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Order Totals */}
      <div className="space-y-4 pt-6 border-t border-amber-200">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-bold text-gray-900 text-lg">₹{cartTotal}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Shipping</span>
          <div className="text-right">
            {shippingCost === 0 ? (
              <span className="font-bold text-green-600 flex items-center gap-1">
                <FiCheck className="w-4 h-4" />
                FREE 🎉
              </span>
            ) : (
              <span className="font-medium text-gray-900">₹{shippingCost}</span>
            )}
          </div>
        </div>
        
        {/* Free Shipping Progress */}
        {shippingCost > 0 && (
          <div className="pt-2">
            <div className="flex justify-between text-xs text-gray-600 mb-1">
              <span>Add ₹{needsForFreeShipping} more for free shipping</span>
              <span>{Math.round((cartTotal / shippingFreeThreshold) * 100)}%</span>
            </div>
            <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                style={{ width: `${Math.min((cartTotal / shippingFreeThreshold) * 100, 100)}%` }}
              />
            </div>
          </div>
        )}
        
        {/* Total */}
        <div className="pt-4 border-t border-amber-200">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-semibold text-gray-900 text-lg">Total Amount</span>
              <p className="text-sm text-gray-600">Including all taxes</p>
            </div>
            <div className="text-right">
              <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                ₹{total}
              </div>
              {shippingCost > 0 && (
                <div className="text-xs text-gray-500">+ ₹{shippingCost} shipping</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Order Process */}
      <div className="mt-6 pt-6 border-t border-amber-200">
        <h4 className="font-display font-bold text-gray-900 mb-4 flex items-center gap-2">
          <div className="w-2 h-6 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
          What happens next?
        </h4>
        
        <div className="space-y-3">
          {[
            {
              icon: <FiCheck className="w-4 h-4" />,
              title: "Order Confirmation",
              description: "Sent to your email within minutes",
              color: "bg-gradient-to-r from-green-500 to-emerald-500"
            },
            {
              icon: <FiMessageSquare className="w-4 h-4" />,
              title: "Customization Review",
              description: "Our team reviews your personalization",
              color: "bg-gradient-to-r from-amber-500 to-orange-500"
            },
            {
              icon: <FiPackage className="w-4 h-4" />,
              title: "Processing",
              description: "We start creating your personalized gift",
              color: "bg-gradient-to-r from-rose-500 to-pink-500"
            },
            {
              icon: <FiTruck className="w-4 h-4" />,
              title: "Delivery",
              description: "Shipped within 3-7 business days",
              color: "bg-gradient-to-r from-blue-500 to-cyan-500"
            }
          ].map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-full ${step.color} flex items-center justify-center flex-shrink-0`}>
                <div className="text-white">
                  {step.icon}
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-900">{step.title}</p>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support Info */}
      <div className="mt-6 pt-6 border-t border-amber-200">
        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl border border-rose-200">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center">
              <FiMessageSquare className="w-5 h-5 text-white" />
            </div>
          </div>
          <div>
            <h5 className="font-bold text-gray-900 mb-1">Need Help?</h5>
            <p className="text-sm text-gray-600">
              Contact us via WhatsApp or email for any questions
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary