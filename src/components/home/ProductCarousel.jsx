// src/components/home/ProductCarousel.jsx
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import ProductCard from '../products/ProductCard'

const ProductCarousel = ({ title, products }) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef(null)

  const scrollLeft = () => {
    if (containerRef.current) {
      const newPosition = scrollPosition - 300
      containerRef.current.scrollLeft = newPosition
      setScrollPosition(newPosition)
    }
  }

  const scrollRight = () => {
    if (containerRef.current) {
      const newPosition = scrollPosition + 300
      containerRef.current.scrollLeft = newPosition
      setScrollPosition(newPosition)
    }
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600">No products available in this collection</p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-display text-3xl font-bold text-slate-900">{title}</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={scrollLeft}
            disabled={scrollPosition <= 0}
            className="p-2 rounded-full bg-white border border-anthands-pink text-anthands-rose hover:bg-anthands-pink disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <FiChevronLeft className="text-xl" />
          </button>
          <button
            onClick={scrollRight}
            disabled={containerRef.current && 
              scrollPosition >= containerRef.current.scrollWidth - containerRef.current.clientWidth}
            className="p-2 rounded-full bg-white border border-anthands-pink text-anthands-rose hover:bg-anthands-pink disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <FiChevronRight className="text-xl" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={containerRef}
          className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 -mx-4 px-4"
          style={{ scrollBehavior: 'smooth' }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex-shrink-0 w-64 md:w-72"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <Link
          to="/collections/all"
          className="inline-flex items-center text-anthands-rose hover:text-anthands-pink font-medium"
        >
          View all products
          <svg 
            className="w-4 h-4 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default ProductCarousel