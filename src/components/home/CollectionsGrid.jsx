// src/components/home/CollectionsGrid.jsx - Updated with dark black/yellow theme
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getMainCollections } from '../../data/collections'
import { FiArrowRight, FiStar, FiTrendingUp } from 'react-icons/fi'

const CollectionsGrid = () => {
  const mainCollections = getMainCollections().slice(0, 6)

  // Sample images - replace with your actual collection images
  const collectionImages = [
    '/fridge-magnet.jpeg',
    '/wallet-cards.webp',
    '/photo-keychains.jpg',
    '/PolaroidPhotoPrints.webp',
    '/gift-boxes.webp',
    '/calender.webp'
  ]

  // Updated gradients for dark theme
  const collectionGradients = [
    'from-gray-800 to-gray-900',
    'from-gray-900 to-black',
    'from-black to-gray-800',
    'from-gray-800 to-black',
    'from-black to-gray-900',
    'from-gray-900 to-black'
  ]

  return (
    <section className="py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-black border-y border-yellow-400/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12 lg:mb-14 px-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 sm:mb-3 px-2">
              Shop Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">Collections</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Handcrafted memories that tell your story. Perfect gifts for every special moment.
            </p>
          </motion.div>
        </div>

        {/* Responsive grid with dark theme */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-0">
          {mainCollections.map((collection, index) => (
            <motion.div
              key={collection.handle}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="h-full"
            >
              <Link to={`/collections/${collection.handle}`} className="block h-full">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(250,204,21,0.15)] transition-all duration-300 h-full flex flex-col border border-yellow-400/20 hover:border-yellow-400/60 active:scale-95"
                >
                  {/* Collection Image Container */}
                  <div className="relative aspect-square overflow-hidden">
                    {/* Image with gradient overlay */}
                    <div className="absolute inset-0">
                      {/* Dark gradient fallback background */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${collectionGradients[index % collectionGradients.length]}`}
                      />
                      
                      {/* Collection Image */}
                      <img
                        src={collectionImages[index % collectionImages.length]}
                        alt={collection.title}
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.opacity = '0';
                        }}
                      />
                      
                      {/* Gradient overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                      
                      {/* Pattern overlay for texture */}
                      <div 
                        className="absolute inset-0 opacity-10 mix-blend-overlay"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23facc15' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                          backgroundSize: '30px 30px'
                        }}
                      />
                    </div>
                    
                    {/* Yellow accent border effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400/30 transition-all duration-300 rounded-xl sm:rounded-2xl" />
                    
                    {/* Collection title overlay on image for mobile */}
                    <div className="md:hidden absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="font-display text-lg font-bold text-yellow-300 line-clamp-1">
                        {collection.title}
                      </h3>
                    </div>

                    {/* Floating badge - Updated */}
                    <div className="hidden sm:block absolute top-3 right-3">
                      <div className="bg-gray-900/90 backdrop-blur-sm text-yellow-400 text-xs font-bold px-2 py-1 rounded-full shadow-lg border border-yellow-400/30 flex items-center gap-1">
                        <FiTrendingUp className="w-2.5 h-2.5" />
                        Trending
                      </div>
                    </div>

                    {/* Price indicator for mobile */}
                    <div className="md:hidden absolute top-3 left-3">
                      <div className="bg-gray-900/90 backdrop-blur-sm text-yellow-400 text-xs font-bold px-2 py-1 rounded-full shadow-lg border border-yellow-400/30">
                        ₹{collection.minPrice || 99}
                      </div>
                    </div>
                  </div>
                  
                  {/* Collection Info - Hidden on mobile, shown on tablet+ */}
                  <div className="hidden md:block p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-lg md:text-xl font-bold text-yellow-300 mb-2 group-hover:text-yellow-400 transition-colors line-clamp-1">
                      {collection.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
                      {collection.description}
                    </p>
                    
                    {/* Price range and badges - Updated */}
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4">
                      <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-yellow-500/10 to-yellow-400/10 text-yellow-300 px-2 sm:px-3 py-1 rounded-full border border-yellow-400/20 whitespace-nowrap">
                        From ₹{collection.minPrice || 99}
                      </span>
                      {collection.discount && (
                        <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-2 sm:px-3 py-1 rounded-full border border-yellow-400 whitespace-nowrap">
                          {collection.discount}% OFF
                        </span>
                      )}
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FiStar key={star} className="w-2.5 h-2.5 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA Button - Updated */}
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-sm font-semibold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                        Shop Now
                        <FiArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300 group-hover:text-yellow-300" />
                      </span>
                    </div>
                  </div>
                  
                  {/* Mobile-only bottom bar - Updated */}
                  <div className="md:hidden p-3 border-t border-yellow-400/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-medium bg-gradient-to-r from-yellow-500/10 to-yellow-400/10 text-yellow-300 px-2 py-1 rounded-full border border-yellow-400/20">
                          From ₹{collection.minPrice || 99}
                        </span>
                      </div>
                      <span className="inline-flex items-center text-xs font-semibold text-yellow-400">
                        Shop
                        <FiArrowRight className="ml-1 w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button - Updated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-8 md:mt-12 lg:mt-16 px-3"
        >
          <Link
            to="/collections/all"
            className="group inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black border-2 border-yellow-400/30 hover:border-yellow-400"
          >
            View All Collections
            <div className="relative">
              <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Link>
          
          {/* Decorative line - Updated */}
          <div className="mt-6">
            <div className="h-px w-20 sm:w-24 md:w-32 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent mx-auto" />
          </div>

          {/* Stats indicator - Added */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span>200+ Products</span>
            </div>
            <div className="h-4 w-px bg-yellow-400/20"></div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span>500+ Happy Customers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CollectionsGrid