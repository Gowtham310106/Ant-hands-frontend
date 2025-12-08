// src/components/home/CollectionsGrid.jsx - Updated with images and better mobile support
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getMainCollections } from '../../data/collections'
import { FiArrowRight } from 'react-icons/fi'

const CollectionsGrid = () => {
  const mainCollections = getMainCollections().slice(0, 6)

  // Sample images - replace with your actual collection images
  const collectionImages = [
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1464347601390-25e2842a37e7?q=80&w=500&auto=format&fit=crop'
  ]

  // Fallback gradients for when images fail to load
  const collectionGradients = [
    'from-amber-200 to-orange-300',
    'from-orange-200 to-rose-300',
    'from-rose-200 to-pink-300',
    'from-amber-300 to-orange-400',
    'from-orange-300 to-rose-400',
    'from-rose-300 to-pink-400'
  ]

  return (
    <section className="py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12 lg:mb-14 px-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-2 sm:mb-3 px-2">
              Shop Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">Collections</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Handcrafted memories that tell your story. Perfect gifts for every special moment.
            </p>
          </motion.div>
        </div>

        {/* Responsive grid with improved mobile spacing */}
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
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-amber-100/50 hover:border-amber-200 active:scale-95"
                >
                  {/* Collection Image Container */}
                  <div className="relative aspect-square overflow-hidden">
                    {/* Image with gradient overlay */}
                    <div className="absolute inset-0">
                      {/* Gradient fallback background */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${collectionGradients[index % collectionGradients.length]}`}
                      />
                      
                      {/* Collection Image */}
                      <img
                        src={collectionImages[index % collectionImages.length]}
                        alt={collection.title}
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        onError={(e) => {
                          // Hide image if it fails to load, showing gradient background
                          e.target.style.opacity = '0';
                        }}
                      />
                      
                      {/* Gradient overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      
                      {/* Pattern overlay for texture */}
                      <div 
                        className="absolute inset-0 opacity-5 mix-blend-overlay"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                          backgroundSize: '30px 30px'
                        }}
                      />
                    </div>
                    
                    {/* Collection title overlay on image for mobile */}
                    <div className="md:hidden absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="font-display text-lg font-bold text-white line-clamp-1">
                        {collection.title}
                      </h3>
                    </div>

                    {/* Floating badge - only show on non-touch devices or larger screens */}
                    <div className="hidden sm:block absolute top-3 right-3">
                      <div className="bg-white/90 backdrop-blur-sm text-amber-700 text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                        Popular
                      </div>
                    </div>
                  </div>
                  
                  {/* Collection Info - Hidden on mobile, shown on tablet+ */}
                  <div className="hidden md:block p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors line-clamp-1">
                      {collection.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                      {collection.description}
                    </p>
                    
                    {/* Price range - responsive sizing */}
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4">
                      <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                        From ₹{collection.minPrice || 99}
                      </span>
                      {collection.discount && (
                        <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-rose-500 to-pink-500 text-white px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                          {collection.discount}% OFF
                        </span>
                      )}
                    </div>
                    
                    {/* CTA Button */}
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-sm font-semibold text-amber-700 group-hover:text-amber-800 transition-colors">
                        Shop Now
                        <FiArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                  
                  {/* Mobile-only bottom bar */}
                  <div className="md:hidden p-3 border-t border-amber-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-medium bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-2 py-1 rounded-full">
                          From ₹{collection.minPrice || 99}
                        </span>
                      </div>
                      <span className="inline-flex items-center text-xs font-semibold text-amber-700">
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

        {/* View All Button - improved mobile sizing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-8 md:mt-12 lg:mt-16 px-3"
        >
          <Link
            to="/collections/all"
            className="group inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            View All Collections
            <div className="relative">
              <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Link>
          
          {/* Decorative line */}
          <div className="mt-6">
            <div className="h-px w-20 sm:w-24 md:w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CollectionsGrid