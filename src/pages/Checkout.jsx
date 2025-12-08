// src/pages/Checkout.jsx - Mobile responsive version
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import CheckoutForm from '../components/checkout/CheckoutForm'
import OrderSummary from '../components/checkout/OrderSummary'
import { CartContext } from '../context/CartContext'
import { FiShoppingBag, FiHome, FiGift, FiChevronRight } from 'react-icons/fi'
import { MdCheckCircle, MdLocalShipping, MdEmail, MdBrush, MdPhone } from 'react-icons/md'

const Checkout = () => {
  const { cartItems, clearCart, cartTotal } = useContext(CartContext)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderNumber, setOrderNumber] = useState(`AH${Date.now().toString().slice(-6)}`)
  const navigate = useNavigate()

  const handleSubmitOrder = (formData) => {
    // Simple validation
    if (!formData.email || !formData.firstName || !formData.address1) {
      alert('Please fill in all required fields')
      return
    }

    // Generate order number
    const newOrderNumber = `AH${Date.now().toString().slice(-6)}`
    setOrderNumber(newOrderNumber)
    
    // Show success message
    setOrderPlaced(true)
    
    // Clear cart after successful order
    setTimeout(() => {
      clearCart()
    }, 1000)
    
    // Log order details
    console.log('Order placed:', { 
      orderNumber: newOrderNumber,
      formData, 
      items: cartItems,
      total: cartTotal
    })
  }

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-[60vh] bg-gradient-to-b from-amber-50/30 to-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {/* Mobile optimized empty cart */}
            <div className="relative mb-6 md:mb-8">
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-amber-200 to-orange-200 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-4xl md:text-6xl">🛒</span>
              </div>
              <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-sm md:text-xl">0</span>
              </div>
            </div>
            
            <h1 className="font-display text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 md:mb-4 px-2">
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Cart</span> is Empty
            </h1>
            <p className="text-gray-600 text-sm md:text-lg mb-6 md:mb-10 max-w-md mx-auto px-4">
              Add some personalized gifts to your cart before proceeding to checkout.
            </p>
            <button
              onClick={() => navigate('/collections/all')}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 w-full max-w-xs mx-auto bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-full transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <FiShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Continue Shopping</span>
            </button>
          </motion.div>
        </div>
      </div>
    )
  }

  if (orderPlaced) {
    return (
      <div className="min-h-[80vh] bg-gradient-to-b from-amber-50/30 to-white py-8 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            {/* Success Animation - Mobile optimized */}
            <div className="relative mb-6 md:mb-8">
              <div className="w-28 h-28 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 rounded-full flex items-center justify-center shadow-2xl">
                <MdCheckCircle className="text-5xl md:text-8xl text-white" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full shadow-lg"
              >
                <span className="font-black text-xs md:text-sm">SUCCESS!</span>
              </motion.div>
            </div>
            
            {/* Main heading - Responsive */}
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 md:mb-4 px-2">
              Order <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">Confirmed!</span>
            </h1>
            
            {/* Order Number - Mobile optimized */}
            <div className="inline-block bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl md:rounded-2xl p-4 md:p-6 mb-6 md:mb-8 border border-amber-200 shadow-lg max-w-full">
              <p className="text-gray-600 text-sm md:text-lg mb-1 md:mb-2">Your order number is:</p>
              <p className="text-2xl md:text-4xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent break-all">
                #{orderNumber}
              </p>
              <p className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2">Save this for tracking your order</p>
            </div>
            
            {/* Thank you message */}
            <p className="text-base md:text-xl text-gray-700 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
              Thank you for your order! We've sent a confirmation email with all the details. 
              Our team will start working on your personalized gifts right away. 🎨
            </p>
            
            {/* Order Process Steps - Mobile grid */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-3xl p-4 md:p-8 mb-8 md:mb-12 border border-amber-200 shadow-lg">
              <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
                What happens next?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { 
                    icon: <MdEmail className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />, 
                    title: "Confirmation", 
                    desc: "Email sent",
                    delay: 0.1
                  },
                  { 
                    icon: <MdBrush className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />, 
                    title: "Personalization", 
                    desc: "Reviewing customizations",
                    delay: 0.2
                  },
                  { 
                    icon: <FiGift className="w-6 h-6 md:w-8 md:h-8 text-rose-600" />, 
                    title: "Crafting", 
                    desc: "Handcrafting gift",
                    delay: 0.3
                  },
                  { 
                    icon: <MdLocalShipping className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />, 
                    title: "Shipping", 
                    desc: "3-7 days delivery",
                    delay: 0.4
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: step.delay }}
                    className="text-center p-3 md:p-5 bg-gradient-to-b from-white to-amber-50 rounded-xl md:rounded-2xl border border-amber-100"
                  >
                    <div className="w-10 h-10 md:w-14 md:h-14 mx-auto mb-2 md:mb-4 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg md:rounded-xl flex items-center justify-center">
                      {step.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base mb-1 md:mb-2">{step.title}</h4>
                    <p className="text-xs md:text-sm text-gray-600">{step.desc}</p>
                    <div className="mt-2 md:mt-4 text-xs font-medium text-amber-600">
                      Step {index + 1}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* CTA Buttons - Mobile stack */}
            <div className="flex flex-col gap-3 md:gap-4 justify-center max-w-sm mx-auto">
              <button
                onClick={() => navigate('/collections/all')}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-full transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl"
              >
                <FiShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">Continue Shopping</span>
                <FiChevronRight className="w-4 h-4 ml-auto md:ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <button
                onClick={() => navigate('/')}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 w-full border-2 border-amber-500 text-amber-600 hover:text-amber-700 hover:bg-amber-50 font-bold rounded-full transition-all duration-300 active:scale-95"
              >
                <FiHome className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">Back to Home</span>
              </button>
            </div>
            
            {/* Contact Support - Mobile optimized */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-amber-200 px-2">
              <p className="text-gray-600 text-sm md:text-base mb-2">Need help with your order?</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
                <p className="text-sm md:text-lg font-bold text-amber-700 flex items-center gap-1">
                  <MdEmail className="w-4 h-4" />
                  support@anthands.in
                </p>
                <p className="text-sm md:text-lg font-bold text-amber-700 flex items-center gap-1">
                  <MdPhone className="w-4 h-4" />
                  +91 98765 43210
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[70vh] bg-gradient-to-b from-amber-50/20 to-white py-6 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header - Mobile optimized */}
          <div className="mb-6 md:mb-12 text-center">
            <h1 className="font-display text-2xl md:text-4xl lg:text-6xl font-black text-gray-900 mb-2 md:mb-3 px-2">
              Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">Checkout</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto px-4">
              Complete your order for personalized gifts that create lasting memories
            </p>
          </div>

          {/* Progress Indicator - Mobile horizontal scroll */}
          <div className="mb-6 md:mb-12 overflow-x-auto pb-2">
            <div className="flex items-center justify-start md:justify-center min-w-max md:min-w-0 px-2">
              {['Cart', 'Information', 'Payment', 'Complete'].map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className={`w-7 h-7 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    index === 0 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white' 
                      : 'bg-white border-2 border-amber-300 text-gray-400'
                  }`}>
                    {index + 1}
                  </div>
                  <span className={`ml-1 md:ml-2 font-medium text-xs md:text-base whitespace-nowrap ${index === 0 ? 'text-amber-700' : 'text-gray-400'}`}>
                    {step}
                  </span>
                  {index < 3 && (
                    <div className={`h-0.5 w-4 md:w-12 mx-1 md:mx-2 flex-shrink-0 ${index === 0 ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-amber-200'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content - Mobile stack, desktop grid */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Checkout Form - Full width on mobile, 2/3 on desktop */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 order-2 lg:order-1"
            >
              <CheckoutForm onSubmit={handleSubmitOrder} />
            </motion.div>

            {/* Order Summary - Above form on mobile, sidebar on desktop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1 order-1 lg:order-2"
            >
              {/* Mobile sticky order summary */}
              <div className="sticky top-4 z-10 lg:relative lg:top-0">
                <OrderSummary />
              </div>
              
              {/* Security Badge - Hide on very small screens, show on md+ */}
              <div className="hidden md:block mt-4 md:mt-6 bg-gradient-to-br from-white to-amber-50 rounded-xl md:rounded-2xl p-4 md:p-5 border border-amber-200 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MdCheckCircle className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm md:text-base">Secure Checkout</h3>
                    <p className="text-xs text-gray-600">Your information is protected</p>
                  </div>
                </div>
                <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                  <div className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full mr-2" />
                    SSL Encrypted Connection
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full mr-2" />
                    No Credit Card Storage
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full mr-2" />
                    PCI DSS Compliant
                  </div>
                </div>
              </div>
              
              {/* Need Help - Mobile simplified */}
              <div className="mt-4 md:mt-6 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl md:rounded-2xl p-4 md:p-5 border border-rose-200">
                <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1 md:mb-2">Need Help?</h3>
                <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">
                  Our support team is here to help
                </p>
                <div className="space-y-1 text-xs md:text-sm">
                  <div className="flex items-center gap-1 font-medium text-rose-700">
                    <MdEmail className="w-3 h-3 md:w-4 md:h-4" />
                    <span>support@anthands.in</span>
                  </div>
                  <div className="flex items-center gap-1 font-medium text-rose-700">
                    <MdPhone className="w-3 h-3 md:w-4 md:h-4" />
                    <span>+91 98765 43210</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile payment methods footer */}
          <div className="mt-8 lg:hidden">
            <div className="bg-white rounded-xl p-4 border border-amber-200">
              <p className="text-sm font-medium text-gray-900 mb-3">Accepted Payment Methods</p>
              <div className="flex gap-3">
                {['💳', '📱', '🏦', '🛡️'].map((icon, i) => (
                  <div key={i} className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">{icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Checkout