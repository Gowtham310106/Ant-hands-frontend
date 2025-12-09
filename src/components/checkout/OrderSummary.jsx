// src/components/checkout/OrderSummary.jsx - Updated with dark theme
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { motion } from 'framer-motion'
import { FiCheck, FiPackage, FiTruck, FiMessageSquare, FiClock, FiShoppingBag, FiArrowRight } from 'react-icons/fi'

const OrderSummary = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  const shippingFreeThreshold = 499
  const shippingCost = cartTotal >= shippingFreeThreshold ? 0 : 49
  const total = cartTotal + shippingCost
  const needsForFreeShipping = Math.max(0, shippingFreeThreshold - cartTotal)

  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 border border-yellow-400/30 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center border border-yellow-400/30">
            <FiPackage className="w-5 h-5 text-black" />
          </div>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-yellow-300">
              Your Order
            </h3>
            <p className="text-gray-400 text-sm">Your cart is currently empty</p>
          </div>
        </div>
        
        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center mb-4 border-2 border-yellow-400/30">
            <span className="text-2xl">🛒</span>
          </div>
          <p className="text-gray-400 mb-6">Add some personalized gifts to get started!</p>
          <Link
            to="/collections/all"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] border-2 border-yellow-400/30 hover:border-yellow-400"
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
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 border border-yellow-400/30 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center border border-yellow-400/30">
            <FiPackage className="w-5 h-5 text-black" />
          </div>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-yellow-300">
              Order Summary
            </h3>
            <p className="text-gray-400 text-sm">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your order
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/30">
          <span className="text-sm font-bold text-yellow-400">Step 2 of 4</span>
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
            className="group p-4 bg-gradient-to-r from-gray-900/50 to-black/50 hover:from-gray-800/50 hover:to-gray-900/50 rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-200"
          >
            <div className="flex gap-4">
              {/* Product Image */}
              <div className="flex-shrink-0 relative">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-black border border-yellow-400/30">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Quantity Badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-xs font-black rounded-full flex items-center justify-center shadow-lg border border-yellow-400">
                  {item.quantity}
                </div>
              </div>
              
              {/* Product Info */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between mb-1">
                  <h4 className="font-display font-bold text-yellow-300 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                    {item.product.title}
                  </h4>
                  <span className="font-bold text-yellow-400 text-lg flex-shrink-0 ml-2">
                    ₹{item.product.price * item.quantity}
                  </span>
                </div>
                
                <div className="text-sm text-gray-400 mb-2">
                  Qty: {item.quantity} × ₹{item.product.price}
                </div>
                
                {/* Customization Summary */}
                {item.customizationValues && Object.keys(item.customizationValues).length > 0 && (
                  <div className="mt-2">
                    <div className="text-xs font-semibold text-yellow-400 mb-1 flex items-center gap-1">
                      <span className="text-yellow-400">✨</span>
                      Personalization:
                    </div>
                    <div className="text-xs text-gray-400 bg-gray-900/50 backdrop-blur-sm rounded-lg p-2 border border-yellow-400/20">
                      {Object.entries(item.customizationValues).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="font-medium text-gray-300 capitalize">{key}:</span>
                          <span className="text-gray-300">{value}</span>
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
      <div className="space-y-4 pt-6 border-t border-yellow-400/20">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Subtotal</span>
          <span className="font-bold text-yellow-400 text-lg">₹{cartTotal}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Shipping</span>
          <div className="text-right">
            {shippingCost === 0 ? (
              <span className="font-bold text-green-400 flex items-center gap-1">
                <FiCheck className="w-4 h-4" />
                FREE 🎉
              </span>
            ) : (
              <span className="font-medium text-yellow-400">₹{shippingCost}</span>
            )}
          </div>
        </div>
        
        {/* Free Shipping Progress */}
        {shippingCost > 0 && (
          <div className="pt-2">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Add ₹{needsForFreeShipping} more for free shipping</span>
              <span className="text-yellow-400">{Math.round((cartTotal / shippingFreeThreshold) * 100)}%</span>
            </div>
            <div className="h-2 bg-yellow-400/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full"
                style={{ width: `${Math.min((cartTotal / shippingFreeThreshold) * 100, 100)}%` }}
              />
            </div>
          </div>
        )}
        
        {/* Total */}
        <div className="pt-4 border-t border-yellow-400/20">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-semibold text-yellow-300 text-lg">Total Amount</span>
              <p className="text-sm text-gray-500">Including all taxes</p>
            </div>
            <div className="text-right">
              <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
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
      <div className="mt-6 pt-6 border-t border-yellow-400/20">
        <h4 className="font-display font-bold text-yellow-300 mb-4 flex items-center gap-2">
          <div className="w-2 h-6 bg-gradient-to-b from-yellow-500 to-yellow-400 rounded-full"></div>
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
              color: "bg-gradient-to-r from-yellow-500 to-yellow-400"
            },
            {
              icon: <FiPackage className="w-4 h-4" />,
              title: "Processing",
              description: "We start creating your personalized gift",
              color: "bg-gradient-to-r from-yellow-600 to-yellow-500"
            },
            {
              icon: <FiTruck className="w-4 h-4" />,
              title: "Delivery",
              description: "Shipped within 3-7 business days",
              color: "bg-gradient-to-r from-yellow-400 to-yellow-300"
            }
          ].map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-full ${step.color} flex items-center justify-center flex-shrink-0 border border-yellow-400/30`}>
                <div className="text-black">
                  {step.icon}
                </div>
              </div>
              <div>
                <p className="font-medium text-yellow-300">{step.title}</p>
                <p className="text-sm text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Delivery Estimate */}
      <div className="mt-6 p-4 bg-gradient-to-r from-yellow-500/10 to-yellow-400/10 rounded-xl border border-yellow-400/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 flex items-center justify-center border border-yellow-400/30">
            <FiClock className="w-5 h-5 text-yellow-400" />
          </div>
          <div>
            <p className="font-medium text-yellow-300">Estimated Delivery</p>
            <p className="text-sm text-gray-400">3-7 business days • Custom items may take longer</p>
          </div>
        </div>
      </div>

      {/* Continue Shopping */}
      <div className="mt-6 pt-6 border-t border-yellow-400/20">
        <Link to="/collections/all">
          <button className="group w-full border-2 border-yellow-400/30 hover:border-yellow-400 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 font-medium py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
            <FiShoppingBag className="w-5 h-5" />
            <span>Continue Shopping</span>
            <FiArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>

      {/* Support Info */}
      <div className="mt-6 pt-6 border-t border-yellow-400/20">
        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-yellow-400/30">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center border border-yellow-400/30">
              <FiMessageSquare className="w-5 h-5 text-black" />
            </div>
          </div>
          <div>
            <h5 className="font-bold text-yellow-300 mb-1">Need Help?</h5>
            <p className="text-sm text-gray-400">
              Contact us via WhatsApp or email for any questions
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary