// src/components/home/ProductCarousel.jsx - Enhanced mobile responsiveness
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi'
import ProductCard from '../products/ProductCard'

const ProductCarousel = ({ title, products, subtitle }) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const containerRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const checkScrollButtons = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scrollLeft = () => {
    if (containerRef.current) {
      const cardWidth = isMobile ? 280 : 320
      const newPosition = scrollPosition - cardWidth
      containerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      })
      setScrollPosition(newPosition)
    }
  }

  const scrollRight = () => {
    if (containerRef.current) {
      const cardWidth = isMobile ? 280 : 320
      const newPosition = scrollPosition + cardWidth
      containerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      })
      setScrollPosition(newPosition)
    }
  }

  useEffect(() => {
    checkScrollButtons()
  }, [scrollPosition])

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
    <section className="py-8 md:py-12 px-3 sm:px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header with title and controls - Mobile optimized */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-10">
          <div className="mb-4 md:mb-0 w-full md:w-auto">
            <div className="flex items-center justify-between md:block">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                {title}
              </h2>
              
              {/* Mobile controls inside header */}
              <div className="flex md:hidden items-center gap-2">
                <button
                  onClick={scrollLeft}
                  disabled={!showLeftArrow}
                  className="p-2 rounded-lg bg-gray-900 border border-yellow-400/30 text-yellow-400 hover:bg-gray-800 hover:border-yellow-400 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300 active:scale-95"
                  aria-label="Scroll left"
                >
                  <FiChevronLeft className="text-lg" />
                </button>
                <button
                  onClick={scrollRight}
                  disabled={!showRightArrow}
                  className="p-2 rounded-lg bg-gray-900 border border-yellow-400/30 text-yellow-400 hover:bg-gray-800 hover:border-yellow-400 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300 active:scale-95"
                  aria-label="Scroll right"
                >
                  <FiChevronRight className="text-lg" />
                </button>
              </div>
            </div>
            
            {subtitle && (
              <p className="text-gray-400 text-base sm:text-lg md:text-lg">{subtitle}</p>
            )}
          </div>
          
          {/* Desktop controls and view all */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                disabled={!showLeftArrow}
                className="p-2.5 rounded-lg bg-gray-900 border border-yellow-400/30 text-yellow-400 hover:bg-gray-800 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.2)] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                aria-label="Scroll left"
              >
                <FiChevronLeft className="text-xl" />
              </button>
              <button
                onClick={scrollRight}
                disabled={!showRightArrow}
                className="p-2.5 rounded-lg bg-gray-900 border border-yellow-400/30 text-yellow-400 hover:bg-gray-800 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.2)] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                aria-label="Scroll right"
              >
                <FiChevronRight className="text-xl" />
              </button>
            </div>
            
            <Link
              to="/collections/all"
              className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold px-4 py-2 rounded-lg border border-yellow-400/30 hover:border-yellow-400 transition-colors active:scale-95"
            >
              View All
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Carousel container - Mobile optimized */}
        <div className="relative">
          {/* Touch-friendly gradient edges - Mobile optimized */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none" />
          
          {/* Scroll indicator - Mobile only */}
          <div className="md:hidden absolute -bottom-5 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-1.5">
              {products.slice(0, 5).map((_, index) => {
                const cardWidth = isMobile ? 280 : 320
                const currentCard = Math.round(scrollPosition / cardWidth)
                return (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentCard 
                        ? 'w-4 bg-gradient-to-r from-yellow-400 to-yellow-300' 
                        : 'w-1.5 bg-gray-700'
                    }`}
                  />
                )
              })}
            </div>
          </div>

          {/* Products grid - Touch optimized */}
          <div
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide gap-4 md:gap-6 pb-2 md:pb-8 -mx-3 sm:-mx-4 px-3 sm:px-4 touch-pan-x snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
            onScroll={(e) => {
              setScrollPosition(e.target.scrollLeft)
              checkScrollButtons()
            }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: isMobile ? "-20px" : "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex-shrink-0 w-[calc(85vw-2rem)] sm:w-72 md:w-80 snap-start"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
            
            {/* View All Card - Mobile only */}
            {isMobile && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 w-[calc(85vw-2rem)] snap-start"
              >
                <Link
                  to="/collections/all"
                  className="h-full flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 active:scale-95 group"
                >
                  <div className="mb-3 p-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-400/10 border border-yellow-400/30 group-hover:from-yellow-500/30 group-hover:to-yellow-400/20">
                    <FiArrowRight className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">View All</h3>
                  <p className="text-yellow-300/70 text-sm text-center">
                    Explore our complete collection
                  </p>
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile View All Button - Enhanced */}
        <div className="mt-6 md:mt-10 text-center md:hidden">
          <Link
            to="/collections/all"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-6 py-3 rounded-xl transition-all duration-300 active:scale-95 shadow-lg active:shadow-[0_0_20px_rgba(250,204,21,0.3)] border-2 border-yellow-400/30 hover:border-yellow-400"
          >
            <span className="text-sm">View All Products</span>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductCarousel