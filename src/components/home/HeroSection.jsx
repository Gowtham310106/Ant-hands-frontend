// src/components/home/HeroSection.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiChevronDown, FiStar, FiZap, FiTrendingUp } from 'react-icons/fi'
import { Sparkles, Zap, Gift } from 'lucide-react'

const HeroSection = () => {
  // Sample product images for the grid
  const productImages = [
    'https://images.unsplash.com/photo-1578328819058-b69f3a1b0f6c?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=500&fit=crop',
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden pt-16 pb-32 px-4 md:px-8">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-amber-200 to-yellow-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-orange-200 to-red-200 rounded-full blur-3xl opacity-15 animate-pulse delay-500" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-float">
          <Sparkles className="w-3 h-3 text-amber-400" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-rose-400 rounded-full animate-float delay-700">
          <Sparkles className="w-3 h-3 text-rose-400" />
        </div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-orange-400 rounded-full animate-float delay-1200">
          <Sparkles className="w-3 h-3 text-orange-400" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Launch Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform">
              <FiStar className="w-3 h-3 md:w-4 md:h-4 fill-current" />
              <span>🚀 Limited Launch Offer — Starting at ₹99</span>
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            </div>

            {/* Main Heading */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                Turn Your Memories
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 animate-gradient">
                  Into Magic
                </span>
              </h1>
              
              {/* Ratings */}
              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar key={star} className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">500+ Happy Customers</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
              Transform your precious moments into <span className="text-amber-600 font-bold">custom gifts</span>. 
              Upload, personalize, and we'll deliver magic to your doorstep! ✨
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6">
              <Link
                to="/collections/all"
                className="group relative bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold py-4 md:py-5 px-8 md:px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-base md:text-lg shadow-lg"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Gift className="w-4 h-4 md:w-5 md:h-5" />
                  Shop All Collections
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link
                to="/collections/new-arrivals"
                className="group border-2 border-amber-500 text-amber-700 hover:bg-amber-50 font-bold py-4 md:py-5 px-8 md:px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-base md:text-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  📸 New Arrivals
                  <Sparkles className="w-4 h-4 group-hover:animate-spin" />
                </span>
              </Link>
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 md:pt-8">
              <div className="text-center p-3 md:p-4 bg-white/80 rounded-2xl backdrop-blur-sm border border-amber-100">
                <div className="text-xl md:text-2xl font-black text-amber-600">500+</div>
                <div className="text-xs md:text-sm text-gray-600">Gifts Sold</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-white/80 rounded-2xl backdrop-blur-sm border border-amber-100">
                <div className="text-xl md:text-2xl font-black text-amber-600">3-7d</div>
                <div className="text-xs md:text-sm text-gray-600">Delivery</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-white/80 rounded-2xl backdrop-blur-sm border border-amber-100">
                <div className="text-xl md:text-2xl font-black text-amber-600">4.9★</div>
                <div className="text-xs md:text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Animated Photo Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px]"
          >
            {/* Main grid container */}
            <div className="absolute inset-0">
              {/* Grid background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-rose-200 rounded-3xl md:rounded-4xl opacity-20" />
              
              {/* Animated photo grid */}
              <div className="absolute inset-4 grid grid-cols-3 grid-rows-2 gap-3 md:gap-4 p-3 md:p-4">
                {productImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      y: 0,
                      rotate: index % 2 === 0 ? [-1, 1, -1] : [1, -1, 1]
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.4 + index * 0.1,
                      rotate: {
                        repeat: Infinity,
                        duration: 4 + index,
                        ease: "easeInOut"
                      }
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotate: 0,
                      zIndex: 10,
                      transition: { duration: 0.3 }
                    }}
                    className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  >
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4">
                      <div className="text-white">
                        <div className="text-xs md:text-sm font-bold">Custom Gift</div>
                        <div className="text-xs">₹{99 + index * 50}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating elements */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -top-3 -left-3 md:-top-4 md:-left-4 bg-white rounded-xl md:rounded-2xl p-3 md:p-5 shadow-2xl border border-amber-200 animate-float"
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-xs md:text-sm font-semibold text-gray-700">Trending</p>
                </div>
                <p className="font-black text-amber-600 text-sm md:text-lg">Buy 5 Get 1 Free</p>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl transform hover:scale-110 transition-transform"
                whileHover={{ scale: 1.1 }}
              >
                <p className="text-xs md:text-sm font-medium">Limited Time</p>
                <p className="font-black text-base md:text-xl">₹99 Only!</p>
              </motion.div>

              {/* Decorative frame */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 1, 0, -1, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -inset-3 md:-inset-4 border-2 border-amber-200/30 rounded-3xl md:rounded-4xl"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg border border-amber-200">
          <FiChevronDown className="text-amber-600 w-5 h-5 md:w-6 md:h-6" />
        </div>
      </motion.div>

      {/* Add CSS animations */}
      
<style>{`
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(5deg); }
  }
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 4s ease infinite;
  }
  .rounded-4xl {
    border-radius: 2.5rem;
  }
`}</style>
    </section>
  )
}

export default HeroSection