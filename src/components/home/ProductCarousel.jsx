// src/components/home/ProductCarousel.jsx - Updated with dark theme
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi'
import ProductCard from '../products/ProductCard'

const ProductCarousel = ({ title, products, subtitle }) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef(null)

  const scrollLeft = () => {
    if (containerRef.current) {
      const newPosition = scrollPosition - 320
      containerRef.current.scrollLeft = newPosition
      setScrollPosition(newPosition)
    }
  }

  const scrollRight = () => {
    if (containerRef.current) {
      const newPosition = scrollPosition + 320
      containerRef.current.scrollLeft = newPosition
      setScrollPosition(newPosition)
    }
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No products available in this collection</p>
      </div>
    )
  }

  const maxScroll = containerRef.current ? 
    containerRef.current.scrollWidth - containerRef.current.clientWidth : 0

  return (
    <section className="py-12 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header with title and controls */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-10">
          <div className="mb-4 md:mb-0">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-400 text-lg">{subtitle}</p>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            {/* Scroll controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                disabled={scrollPosition <= 0}
                className="p-2.5 rounded-lg bg-gray-900 border border-yellow-400/30 text-yellow-400 hover:bg-gray-800 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.2)] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 disabled:hover:shadow-none"
                aria-label="Scroll left"
              >
                <FiChevronLeft className="text-xl" />
              </button>
              <button
                onClick={scrollRight}
                disabled={scrollPosition >= maxScroll}
                className="p-2.5 rounded-lg bg-gray-900 border border-yellow-400/30 text-yellow-400 hover:bg-gray-800 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.2)] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 disabled:hover:shadow-none"
                aria-label="Scroll right"
              >
                <FiChevronRight className="text-xl" />
              </button>
            </div>
            
            {/* View all link */}
            <Link
              to="/collections/all"
              className="hidden md:inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold px-4 py-2 rounded-lg border border-yellow-400/30 hover:border-yellow-400 transition-colors"
            >
              View All
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Carousel container */}
        <div className="relative">
          {/* Decorative gradient edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          {/* Scroll indicator */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-1">
            <div className="h-1 w-8 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full"
                style={{ 
                  width: `${maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0}%` 
                }}
              />
            </div>
          </div>

          {/* Products grid */}
          <div
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-8 -mx-4 px-4"
            style={{ scrollBehavior: 'smooth' }}
            onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex-shrink-0 w-72 md:w-80"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 text-center md:hidden">
          <Link
            to="/collections/all"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[0_0_25px_rgba(250,204,21,0.3)] border-2 border-yellow-400/30 hover:border-yellow-400"
          >
            View All Products
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductCarousel