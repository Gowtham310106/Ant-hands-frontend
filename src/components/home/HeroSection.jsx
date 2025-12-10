// src/components/home/HeroSection.jsx - Updated with workshop focus
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiChevronDown, FiStar, FiZap, FiTrendingUp, FiShoppingBag, FiAward, FiCalendar, FiClock, FiUsers } from 'react-icons/fi'
import { Sparkles, Target, Zap } from 'lucide-react'

const HeroSection = () => {
  const workshopDate = new Date('2025-12-20T18:00:00')

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).toUpperCase()
  }

  return (
    <section className="relative min-h-screen bg-black overflow-hidden pt-16 pb-32 px-4 md:px-8 border-b-2 border-yellow-400/30">
      {/* Animated background elements - Updated */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-yellow-900/30 to-yellow-800/20 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-yellow-800/20 to-yellow-700/10 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-yellow-900/20 to-yellow-600/10 rounded-full blur-3xl opacity-25 animate-pulse delay-500" />
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(250, 204, 21, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(250, 204, 21, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Floating particles - Updated */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-float">
          <Sparkles className="w-3 h-3 text-yellow-400" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-yellow-300 rounded-full animate-float delay-700">
          <Sparkles className="w-3 h-3 text-yellow-300" />
        </div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-yellow-500 rounded-full animate-float delay-1200">
          <Sparkles className="w-3 h-3 text-yellow-500" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left content - Updated */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Launch Badge - Updated */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black text-sm font-bold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform border border-yellow-400/30 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]">
              <FiStar className="w-3 h-3 md:w-4 md:h-4 fill-current" />
              <span>🎯 Fridge Magnet Making Workshop — ₹499 Only</span>
              <div className="w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
            </div>

            {/* Main Heading - Updated */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                Create Your Own
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 animate-gradient">
                  Fridge Magnets
                </span>
              </h1>
              
              {/* Workshop Date - New */}
              <div className="flex items-center gap-2 md:gap-3 text-yellow-300 font-semibold">
                <FiCalendar className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-base md:text-lg">{formatDate(workshopDate)}</span>
                <FiClock className="w-4 h-4 md:w-5 md:h-5 ml-4" />
                <span className="text-base md:text-lg">6:00-8:00 PM</span>
                <FiUsers className="w-4 h-4 md:w-5 md:h-5 ml-4" />
                <span className="text-base md:text-lg">Online</span>
              </div>
            </div>

            {/* Description - Updated */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-medium">
              Join our interactive online workshop and learn to create beautiful custom fridge magnets from the comfort of your home! Perfect for beginners looking to start their own small business.
            </p>

            {/* Workshop Benefits - New */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>No prior experience required</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Beginner-friendly & fun</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Perfect for starting a business</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Limited spots available</span>
              </div>
            </div>

            {/* CTA Buttons - Updated */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6">
              <Link
                to="/workshop"
                className="group relative bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-extrabold py-4 md:py-5 px-8 md:px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] text-base md:text-lg shadow-lg border-2 border-yellow-400/30 hover:border-yellow-400"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Target className="w-4 h-4 md:w-5 md:h-5" />
                  Register for Workshop
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link
                to="/collections/fridge-magnet"
                className="group border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 font-bold py-4 md:py-5 px-8 md:px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] text-base md:text-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  🧲 Shop Fridge Magnets
                  <Sparkles className="w-4 h-4 group-hover:animate-spin" />
                </span>
              </Link>
            </div>

            {/* Workshop Info - New */}
            <div className="pt-4">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 border border-yellow-400/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-400">Access Details:</div>
                  <div className="text-xs text-yellow-400 font-semibold">WhatsApp Link</div>
                </div>
                <p className="text-sm text-gray-300">
                  Workshop access link will be shared on WhatsApp a day before the event.
                  <span className="block text-xs text-yellow-300/70 mt-1">
                    No recordings will be provided • Limited spots only
                  </span>
                </p>
              </div>
            </div>

            {/* Social Proof - Updated */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <FiZap className="text-yellow-400" />
                <span>DM @anthands360 for registration</span>
              </div>
            </div>
          </motion.div>

          {/* Right side - Workshop Banner - Updated */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px]"
          >
            {/* Workshop banner container */}
            <div className="absolute inset-0">
              {/* Background with border */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-3xl md:rounded-4xl opacity-90 border-2 border-yellow-400/30 overflow-hidden" />
              
              {/* Workshop Image */}
              <Link to="/workshop" className="block relative w-full h-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full overflow-hidden"
                >
                  <img
                    src="/workshop.png"
                    alt="Fridge Magnet Making Workshop"
                    className="w-full h-full object-contain p-4 md:p-6"
                  />
                  
                  {/* Overlay with price and info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 md:p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs font-semibold text-yellow-300 uppercase tracking-wider">Live Workshop</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                          Fridge Magnet Making
                        </h3>
                        <p className="text-xs text-gray-300">Create custom magnets from home</p>
                      </div>
                      
                      {/* Price Tag */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-black text-lg md:text-2xl px-4 md:px-6 py-2 md:py-3 rounded-xl shadow-2xl border-2 border-yellow-300 transform rotate-3"
                      >
                        ₹499
                      </motion.div>
                    </div>
                  </div>

                  {/* Limited Spots Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-yellow-300/50 transform rotate-3"
                  >
                    Limited Spots Only
                  </motion.div>

                  {/* Workshop Date Badge */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-yellow-400/50 rounded-lg p-2 md:p-3">
                    <div className="text-center">
                      <div className="text-yellow-400 text-xs font-semibold">20</div>
                      <div className="text-yellow-300 text-xs">DEC</div>
                      <div className="text-yellow-400 text-xs">2025</div>
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* Call to Action */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-3 md:-bottom-4 left-1/2 transform -translate-x-1/2"
              >
                <Link
                  to="/workshop"
                  className="group flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-6 md:px-8 py-2 md:py-3 rounded-full shadow-lg border-2 border-yellow-300 hover:border-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(250,204,21,0.5)]"
                >
                  <span>🎯 Register Now</span>
                  <Sparkles className="w-4 h-4 group-hover:animate-spin" />
                </Link>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-2 -left-2 md:-top-3 md:-left-3 bg-gray-900/90 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-2xl border-2 border-yellow-400/50 animate-float"
              >
                <p className="text-xs font-semibold text-yellow-300">Perfect For</p>
                <p className="text-yellow-400 text-sm font-bold">Beginners</p>
              </motion.div>
              
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-gradient-to-r from-yellow-400/20 to-yellow-300/10 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-2xl border-2 border-yellow-400/30 animate-float delay-1000"
              >
                <p className="text-xs font-semibold text-yellow-300">Online</p>
                <p className="text-yellow-400 text-sm font-bold">Interactive</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Updated */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg border-2 border-yellow-400/30 hover:border-yellow-400 transition-colors">
          <FiChevronDown className="text-yellow-400 w-5 h-5 md:w-6 md:h-6" />
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