// src/pages/Collection.jsx - Fixed issues
import { useState, useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProductGrid from '../components/products/ProductGrid'
import { getCollectionByHandle } from '../data/collections'
import { getProductsByCollection, getAllProducts } from '../data/products'
import { FiFilter, FiX, FiChevronDown } from 'react-icons/fi'

const Collection = () => {
  const { handle } = useParams()
  const location = useLocation()
  const [collection, setCollection] = useState(null)
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [sortBy, setSortBy] = useState('featured')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const isAllProductsPage = handle === 'all'
  
  // Check if we should show back link
  const showBackLink = !isAllProductsPage && location.pathname !== '/collections'

  useEffect(() => {
    const foundCollection = getCollectionByHandle(handle)
    setCollection(foundCollection)
    
    let collectionProducts = []
    
    if (foundCollection) {
      if (isAllProductsPage) {
        collectionProducts = getAllProducts()
      } else {
        collectionProducts = getProductsByCollection(handle)
      }
      setProducts(collectionProducts)
      setFilteredProducts(collectionProducts)
    }
  }, [handle, isAllProductsPage])

  useEffect(() => {
    if (products.length === 0) return
    
    let result = [...products]
    
    // Apply price filtering
    if (minPrice || maxPrice) {
      const min = minPrice ? parseInt(minPrice) : 0
      const max = maxPrice ? parseInt(maxPrice) : Infinity
      result = result.filter(
        product => product.price >= min && product.price <= max
      )
    }
    
    // Apply sorting
    if (sortBy === 'price-low-high') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high-low') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'newest') {
      result.reverse()
    }
    
    setFilteredProducts(result)
  }, [products, sortBy, minPrice, maxPrice])

  const handleClearFilters = () => {
    setMinPrice('')
    setMaxPrice('')
    setSortBy('featured')
    setIsFilterOpen(false)
  }

  const hasActiveFilters = minPrice || maxPrice || sortBy !== 'featured'

  if (!collection) {
    return (
      <div className="min-h-[60vh] bg-gradient-to-b from-amber-50/30 to-white py-12 md:py-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-amber-200 to-orange-200 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <span className="text-4xl">❓</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Collection Not Found
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
            The collection you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/collections/all"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Browse All Collections
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/20 to-white py-4 md:py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Collection Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-12 text-center md:text-left"
        >
          {/* Show back link only when needed */}
          {showBackLink && (
            <div className="mb-4">
              <Link 
                to="/collections/all"
                className="inline-flex items-center gap-1 text-sm text-amber-600 hover:text-amber-700 font-medium mb-3"
              >
                ← Back to All Collections
              </Link>
            </div>
          )}
          
          {/* Fixed: Show either collection title OR "All Products", not both */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 md:mb-4">
            {isAllProductsPage ? (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">
                All Products
              </span>
            ) : (
              collection.title
            )}
          </h1>
          
          {collection.description && (
            <p className="text-gray-700 text-base md:text-lg lg:text-xl max-w-3xl mx-auto md:mx-0 leading-relaxed">
              {collection.description}
            </p>
          )}
          
          {/* Collection stats */}
          <div className="flex flex-wrap gap-4 md:gap-6 mt-6 justify-center md:justify-start">
            <div className="text-center p-3 md:p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl md:rounded-2xl border border-amber-200">
              <div className="text-xl md:text-2xl font-black text-amber-700">{products.length}</div>
              <div className="text-sm text-gray-600">Total Products</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl md:rounded-2xl border border-rose-200">
              <div className="text-xl md:text-2xl font-black text-rose-700">
                ₹{Math.min(...products.map(p => p.price)) || 49}
              </div>
              <div className="text-sm text-gray-600">Starting From</div>
            </div>
            {!isAllProductsPage && collection.discount && (
              <div className="text-center p-3 md:p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl md:rounded-2xl border border-green-200">
                <div className="text-xl md:text-2xl font-black text-green-700">{collection.discount}% OFF</div>
                <div className="text-sm text-gray-600">Special Discount</div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center justify-between w-full px-4 py-3 bg-white rounded-xl border border-amber-300 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <FiFilter className="text-amber-600" />
              <span className="font-medium text-gray-900">Filters & Sorting</span>
              {hasActiveFilters && (
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  Active
                </span>
              )}
            </div>
            <FiChevronDown className={`text-amber-600 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Filters Sidebar - Mobile slide-in */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className={`${
              isFilterOpen ? 'block' : 'hidden'
            } md:block md:w-64 lg:w-72 flex-shrink-0`}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-amber-200 shadow-lg md:shadow-sm">
              {/* Mobile close button */}
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <h2 className="font-display text-xl font-bold text-gray-900 flex items-center gap-2">
                  <FiFilter className="text-amber-600" />
                  Filters
                </h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="md:hidden p-1.5 text-gray-500 hover:text-gray-700"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
              
              {/* Price Range */}
              <div className="mb-6 md:mb-8">
                <h3 className="font-display font-semibold text-gray-900 mb-3 md:mb-4 flex items-center justify-between">
                  <span>Price Range</span>
                  <span className="text-xs text-gray-500">₹</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Min Price</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="number"
                        placeholder="49"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="w-full pl-8 pr-3 py-2.5 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm bg-white"
                        min="0"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Max Price</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="number"
                        placeholder="499"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="w-full pl-8 pr-3 py-2.5 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm bg-white"
                        min="0"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sorting */}
              <div className="mb-8">
                <h3 className="font-display font-semibold text-gray-900 mb-3 md:mb-4">Sort By</h3>
                <div className="space-y-2">
                  {[
                    { value: 'featured', label: 'Featured' },
                    { value: 'price-low-high', label: 'Price: Low to High' },
                    { value: 'price-high-low', label: 'Price: High to Low' },
                    { value: 'newest', label: 'Newest First' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSortBy(option.value)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 ${
                        sortBy === option.value
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium'
                          : 'text-gray-700 hover:bg-amber-50 border border-transparent hover:border-amber-200'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3">
                {hasActiveFilters && (
                  <button
                    onClick={handleClearFilters}
                    className="w-full px-4 py-3 text-sm font-medium bg-gradient-to-r from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 text-rose-600 hover:text-rose-700 rounded-lg border border-rose-200 transition-all duration-200"
                  >
                    Clear All Filters
                  </button>
                )}
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full md:hidden px-4 py-3 text-sm font-medium bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-lg transition-all duration-200 shadow-md"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </motion.div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Desktop Filter Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden md:flex items-center justify-between mb-6 md:mb-8 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-amber-200 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-900">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
                </span>
                {hasActiveFilters && (
                  <button
                    onClick={handleClearFilters}
                    className="text-sm font-medium text-rose-600 hover:text-rose-700 flex items-center gap-1 transition-colors"
                  >
                    <FiX className="w-3 h-3" />
                    Clear filters
                  </button>
                )}
              </div>
              
              {/* Quick price filters */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 hidden lg:block">Quick Filters:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setMinPrice('0') & setMaxPrice('199')}
                    className="px-3 py-1.5 text-xs font-medium bg-amber-50 text-amber-700 rounded-lg border border-amber-200 hover:bg-amber-100 transition-colors"
                  >
                    Under ₹200
                  </button>
                  <button
                    onClick={() => setMinPrice('200') & setMaxPrice('499')}
                    className="px-3 py-1.5 text-xs font-medium bg-orange-50 text-orange-700 rounded-lg border border-orange-200 hover:bg-orange-100 transition-colors"
                  >
                    ₹200-₹500
                  </button>
                  <button
                    onClick={() => setMinPrice('') & setMaxPrice('')}
                    className="px-3 py-1.5 text-xs font-medium bg-gray-50 text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                  >
                    All Prices
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Product Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ProductGrid
                products={filteredProducts}
                title={filteredProducts.length > 0 ? null : `No products found in ${collection.title}`}
                description={filteredProducts.length === 0 ? "Try adjusting your filters or browse other collections." : undefined}
                emptyState={
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-200 to-orange-200 rounded-full flex items-center justify-center mb-6">
                      <span className="text-3xl">🔍</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                      No Products Match Your Filters
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Try adjusting your price range or clearing filters to see more products.
                    </p>
                    <button
                      onClick={handleClearFilters}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium rounded-full transition-all duration-300 shadow-md"
                    >
                      Clear All Filters
                    </button>
                  </div>
                }
              />
            </motion.div>
            
            {/* Collection Footer - Only show on collection pages, not on "All Products" */}
            {!isAllProductsPage && filteredProducts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 pt-8 border-t border-amber-200 text-center"
              >
                <p className="text-gray-600 mb-6">
                  Can't find what you're looking for? Browse our other collections.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link
                    to="/collections/all"
                    className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 rounded-full border border-amber-200 hover:bg-amber-100 transition-colors"
                  >
                    All Products
                  </Link>
                  <Link
                    to="/collections/new-arrivals"
                    className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-rose-50 to-pink-50 text-rose-700 rounded-full border border-rose-200 hover:bg-rose-100 transition-colors"
                  >
                    New Arrivals
                  </Link>
                  <Link
                    to="/collections/best-sellers"
                    className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-full border border-green-200 hover:bg-green-100 transition-colors"
                  >
                    Best Sellers
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection