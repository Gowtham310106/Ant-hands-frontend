// src/components/cart/CartSummary.jsx - Updated with dark theme
import { Link } from 'react-router-dom'
import { FiArrowRight, FiTruck, FiShield, FiGift, FiPackage, FiCheck } from 'react-icons/fi'

const CartSummary = ({ subtotal, onCheckout }) => {
  const shippingFreeThreshold = 499
  const shippingCost = subtotal >= shippingFreeThreshold ? 0 : 49
  const total = subtotal + shippingCost
  const needsForFreeShipping = Math.max(0, shippingFreeThreshold - subtotal)

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 border border-yellow-400/30 shadow-lg">
      <h3 className="font-display text-2xl font-bold text-yellow-300 mb-6 flex items-center gap-2">
        <div className="w-2 h-8 bg-gradient-to-b from-yellow-500 to-yellow-400 rounded-full"></div>
        Order Summary
      </h3>
      
      {/* Order Details */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Subtotal</span>
          <span className="font-bold text-yellow-400 text-lg">₹{subtotal}</span>
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
              <span className="text-yellow-400">{Math.round((subtotal / shippingFreeThreshold) * 100)}%</span>
            </div>
            <div className="h-2 bg-yellow-400/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full"
                style={{ width: `${Math.min((subtotal / shippingFreeThreshold) * 100, 100)}%` }}
              />
            </div>
          </div>
        )}
        
        {/* Total */}
        <div className="pt-4 border-t border-yellow-400/20">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-yellow-300 text-lg">Total</span>
            <div className="text-right">
              <div className="text-2xl md:text-3xl font-black text-yellow-400">₹{total}</div>
              {shippingCost > 0 && (
                <div className="text-xs text-gray-500">Incl. ₹{shippingCost} shipping</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 mb-6">
        <Link to="/checkout">
          <button
            onClick={onCheckout}
            className="group w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-[0_0_25px_rgba(250,204,21,0.3)] border-2 border-yellow-400/30 hover:border-yellow-400 flex items-center justify-center gap-3"
          >
            <span className="text-lg">Proceed to Checkout</span>
            <FiArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
          </button>
        </Link>
        
        <Link to="/collections/all">
          <button className="w-full border-2 border-yellow-400/30 hover:border-yellow-400 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
            <FiPackage className="w-5 h-5" />
            <span>Continue Shopping</span>
          </button>
        </Link>
      </div>

      {/* Trust & Shipping Info */}
      <div className="pt-6 border-t border-yellow-400/20">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
              <FiShield className="w-3 h-3 text-white" />
            </div>
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
              <FiTruck className="w-3 h-3 text-white" />
            </div>
            <span>Fast Delivery</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
              <FiGift className="w-3 h-3 text-white" />
            </div>
            <span>Gift Wrapping</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
              <FiCheck className="w-3 h-3 text-white" />
            </div>
            <span>Easy Returns</span>
          </div>
        </div>

        {/* Shipping Details */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-gray-300">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
            <span className="font-medium text-yellow-300">Free shipping</span>
            <span className="mx-2 text-yellow-400/50">•</span>
            <span className="text-gray-400">On orders over ₹499</span>
          </div>
          <div className="flex items-center text-gray-300">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
            <span className="font-medium text-yellow-300">Express delivery</span>
            <span className="mx-2 text-yellow-400/50">•</span>
            <span className="text-gray-400">3-7 business days</span>
          </div>
          <div className="flex items-center text-gray-300">
            <div className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></div>
            <span className="font-medium text-yellow-300">Gift option</span>
            <span className="mx-2 text-yellow-400/50">•</span>
            <span className="text-gray-400">Free gift wrapping</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-4 pt-4 border-t border-yellow-400/20">
          <p className="text-xs text-gray-500 mb-2">We accept:</p>
          <div className="flex gap-2">
            {['💳', '📱', '🏦', '🛡️'].map((icon, i) => (
              <div key={i} className="w-8 h-8 bg-yellow-400/10 rounded-lg flex items-center justify-center border border-yellow-400/30">
                <span className="text-sm text-yellow-400">{icon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Promo Code (Optional) */}
      <div className="mt-6 pt-6 border-t border-yellow-400/20">
        <p className="text-sm font-medium text-yellow-300 mb-2">Have a promo code?</p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter code"
            className="flex-1 px-4 py-2 bg-gray-800/50 border border-yellow-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm text-white placeholder-gray-500"
          />
          <button className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-medium rounded-lg transition-colors text-sm border border-yellow-400/30">
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartSummary