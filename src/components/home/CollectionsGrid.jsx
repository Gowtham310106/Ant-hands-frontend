// src/components/home/CollectionsGrid.jsx - Fixed syntax errors
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getMainCollections } from '../../data/collections'
import { FiArrowRight, FiGift, FiHeart, FiCamera, FiMail, FiKey, FiImage } from 'react-icons/fi'

const CollectionsGrid = () => {
  const mainCollections = getMainCollections().slice(0, 6)

  const collectionGradients = [
    'from-amber-200 to-orange-300',
    'from-orange-200 to-rose-300',
    'from-rose-200 to-pink-300',
    'from-amber-300 to-orange-400',
    'from-orange-300 to-rose-400',
    'from-rose-300 to-pink-400'
  ]

  const collectionIcons = [
    <FiGift key="gift" className="text-2xl" />,
    <FiHeart key="heart" className="text-2xl" />,
    <FiCamera key="camera" className="text-2xl" />,
    <FiMail key="mail" className="text-2xl" />,
    <FiKey key="key" className="text-2xl" />,
    <FiImage key="image" className="text-2xl" />
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3">
              Shop Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">Collections</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Handcrafted memories that tell your story. Perfect gifts for every special moment.
            </p>
          </motion.div>
        </div>

        {/* Responsive grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {mainCollections.map((collection, index) => (
            <motion.div
              key={collection.handle}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full"
            >
              <Link to={`/collections/${collection.handle}`}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-amber-100"
                >
                  {/* Collection Image Container */}
                  <div className="relative aspect-square overflow-hidden">
                    {/* Gradient Background */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${collectionGradients[index % collectionGradients.length]} group-hover:scale-110 transition-transform duration-700`}
                    />
                    
                    {/* Decorative Pattern - Fixed SVG syntax */}
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1'/%3E%3C/svg%3E")`,
                      backgroundSize: '100px 100px'
                    }} />
                    
                    {/* Icon Container */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                          <div className="text-amber-700">
                            {collectionIcons[index % collectionIcons.length]}
                          </div>
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                      </div>
                    </div>

                    {/* Floating badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm text-amber-700 text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                        Popular
                      </div>
                    </div>
                  </div>
                  
                  {/* Collection Info */}
                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors line-clamp-1">
                      {collection.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                      {collection.description}
                    </p>
                    
                    {/* Price range */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-medium bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-2 py-1 rounded-full">
                        Starting at ₹{collection.minPrice || 99}
                      </span>
                      {collection.discount && (
                        <span className="text-xs font-bold bg-gradient-to-r from-rose-500 to-pink-500 text-white px-2 py-1 rounded-full">
                          {collection.discount}% OFF
                        </span>
                      )}
                    </div>
                    
                    {/* CTA Button */}
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-sm font-semibold text-amber-700 group-hover:text-amber-800 transition-colors">
                        Explore Collection
                        <FiArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12 md:mt-16"
        >
          <Link
            to="/collections/all"
            className="group inline-flex items-center gap-2 px-8 py-3.5 md:px-10 md:py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base"
          >
            View All Collections
            <div className="relative">
              <FiArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Link>
          
          {/* Decorative line */}
          <div className="mt-6">
            <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CollectionsGrid