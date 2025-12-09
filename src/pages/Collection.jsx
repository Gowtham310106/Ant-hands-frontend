// src/pages/Collection.jsx - Updated with dark theme
import { useState, useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProductGrid from '../components/products/ProductGrid'
import { getCollectionByHandle } from '../data/collections'
import { getProductsByCollection, getAllProducts } from '../data/products'
import { FiFilter, FiX, FiChevronDown, FiGrid, FiList, FiSearch } from 'react-icons/fi'

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
  const [searchQuery, setSearchQuery] = useState('')

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
    
    // Apply search filtering
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter(product => 
        product.title.toLowerCase().includes(query) ||
        product.description?.toLowerCase().includes(query) ||
        product.category?.toLowerCase().includes(query)
      )
    }
    
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
    } else if (sortBy === 'best-selling') {
      // Assuming we have a salesCount property
      result.sort((a, b) => (b.salesCount || 0) - (a.salesCount || 0))
    }
    
    setFilteredProducts(result)
  }, [products, sortBy, minPrice, maxPrice, searchQuery])

  const handleClearFilters = () => {
    setMinPrice('')
    setMaxPrice('')
    setSortBy('featured')
    setSearchQuery('')
    setIsFilterOpen(false)
  }

  const hasActiveFilters = minPrice || maxPrice || sortBy !== 'featured' || searchQuery.trim()

  if (!collection) {
    return (
      <div className="min-h-[60vh] bg-black py-12 md:py-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center mb-6 shadow-lg border-2 border-yellow-400/30">
            <span className="text-4xl">❓</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-black text-white mb-3">
            Collection Not Found
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            The collection you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/collections/all"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[0_0_25px_rgba(250,204,21,0.3)] border-2 border-yellow-400/30 hover:border-yellow-400"
          >
            Browse All Collections
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black py-4 md:py-8 px-4">
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
                className="inline-flex items-center gap-1 text-sm text-yellow-400 hover:text-yellow-300 font-medium mb-3"
              >
                ← Back to All Collections
              </Link>
            </div>
          )}
          
          {/* Fixed: Show either collection title OR "All Products", not both */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-4">
            {isAllProductsPage ? (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">
                All Products
              </span>
            ) : (
              collection.title
            )}
          </h1>
          
          {collection.description && (
            <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-3xl mx-auto md:mx-0 leading-relaxed">
              {collection.description}
            </p>
          )}
          
          {/* Collection stats */}
          <div className="flex flex-wrap gap-4 md:gap-6 mt-6 justify-center md:justify-start">
            <div className="text-center p-3 md:p-4 bg-gradient-to-r from-gray-900 to-black rounded-xl md:rounded-2xl border border-yellow-400/20 hover:border-yellow-400/40 transition-colors">
              <div className="text-xl md:text-2xl font-black text-yellow-400">{products.length}</div>
              <div className="text-sm text-gray-400">Total Products</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-gradient-to-r from-gray-900 to-black rounded-xl md:rounded-2xl border border-yellow-400/20 hover:border-yellow-400/40 transition-colors">
              <div className="text-xl md:text-2xl font-black text-yellow-400">
                ₹{Math.min(...products.map(p => p.price)) || 49}
              </div>
              <div className="text-sm text-gray-400">Starting From</div>
            </div>
            {!isAllProductsPage && collection.discount && (
              <div className="text-center p-3 md:p-4 bg-gradient-to-r from-yellow-500/10 to-yellow-400/10 rounded-xl md:rounded-2xl border border-yellow-400/30 hover:border-yellow-400/50 transition-colors">
                <div className="text-xl md:text-2xl font-black text-yellow-400">{collection.discount}% OFF</div>
                <div className="text-sm text-gray-400">Special Discount</div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <FiSearch className="text-yellow-400" />
            </div>
            <input
              type="text"
              placeholder={`Search in ${isAllProductsPage ? 'all products' : collection.title.toLowerCase()}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-500 shadow-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-400"
              >
                <FiX className="w-4 h-4" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center justify-between w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-yellow-400/30 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <FiFilter className="text-yellow-400" />
              <span className="font-medium text-white">Filters & Sorting</span>
              {hasActiveFilters && (
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                  Active
                </span>
              )}
            </div>
            <FiChevronDown className={`text-yellow-400 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
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
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-yellow-400/30 shadow-lg">
              {/* Mobile close button */}
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <h2 className="font-display text-xl font-bold text-yellow-300 flex items-center gap-2">
                  <FiFilter className="text-yellow-400" />
                  Filters
                </h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="md:hidden p-1.5 text-gray-400 hover:text-yellow-400"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
              
              {/* Price Range */}
              <div className="mb-6 md:mb-8">
                <h3 className="font-display font-semibold text-yellow-300 mb-3 md:mb-4 flex items-center justify-between">
                  <span>Price Range</span>
                  <span className="text-xs text-gray-500">₹</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Min Price</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="number"
                        placeholder="49"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="w-full pl-8 pr-3 py-2.5 bg-gray-800/50 border border-yellow-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm text-white placeholder-gray-500"
                        min="0"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Max Price</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="number"
                        placeholder="499"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="w-full pl-8 pr-3 py-2.5 bg-gray-800/50 border border-yellow-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm text-white placeholder-gray-500"
                        min="0"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sorting */}
              <div className="mb-8">
                <h3 className="font-display font-semibold text-yellow-300 mb-3 md:mb-4">Sort By</h3>
                <div className="space-y-2">
                  {[
                    { value: 'featured', label: 'Featured' },
                    { value: 'newest', label: 'Newest First' },
                    { value: 'best-selling', label: 'Best Selling' },
                    { value: 'price-low-high', label: 'Price: Low to High' },
                    { value: 'price-high-low', label: 'Price: High to Low' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSortBy(option.value)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 ${
                        sortBy === option.value
                          ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-medium shadow-lg'
                          : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 border border-transparent hover:border-yellow-400/30'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quick Price Filters */}
              <div className="mb-8">
                <h3 className="font-display font-semibold text-yellow-300 mb-3 md:mb-4">Quick Filters</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => {setMinPrice('0'); setMaxPrice('199')}}
                    className="px-3 py-1.5 text-xs font-medium bg-yellow-500/10 text-yellow-400 rounded-lg border border-yellow-400/30 hover:bg-yellow-500/20 transition-colors"
                  >
                    Under ₹200
                  </button>
                  <button
                    onClick={() => {setMinPrice('200'); setMaxPrice('499')}}
                    className="px-3 py-1.5 text-xs font-medium bg-yellow-400/10 text-yellow-300 rounded-lg border border-yellow-400/30 hover:bg-yellow-400/20 transition-colors"
                  >
                    ₹200-₹500
                  </button>
                  <button
                    onClick={() => {setMinPrice(''); setMaxPrice('')}}
                    className="px-3 py-1.5 text-xs font-medium bg-gray-800/50 text-gray-400 rounded-lg border border-gray-600 hover:border-yellow-400/30 transition-colors"
                  >
                    All Prices
                  </button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3">
                {hasActiveFilters && (
                  <button
                    onClick={handleClearFilters}
                    className="w-full px-4 py-3 text-sm font-medium bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-yellow-400 hover:text-yellow-300 rounded-lg border border-yellow-400/30 hover:border-yellow-400 transition-all duration-200 shadow-md"
                  >
                    Clear All Filters
                  </button>
                )}
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full md:hidden px-4 py-3 text-sm font-medium bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold rounded-lg transition-all duration-200 shadow-md"
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
              className="hidden md:flex items-center justify-between mb-6 md:mb-8 p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-yellow-400/30 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-yellow-300">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
                </span>
                {hasActiveFilters && (
                  <button
                    onClick={handleClearFilters}
                    className="text-sm font-medium text-yellow-400 hover:text-yellow-300 flex items-center gap-1 transition-colors"
                  >
                    <FiX className="w-3 h-3" />
                    Clear filters
                  </button>
                )}
              </div>
              
              {/* View toggle */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-gray-800/50 p-1 rounded-lg">
                  <button className="p-1.5 rounded-md bg-yellow-500/20 text-yellow-400">
                    <FiGrid className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 rounded-md text-gray-400 hover:text-yellow-400">
                    <FiList className="w-4 h-4" />
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
                emptyMessage={searchQuery.trim() ? `No products found for "${searchQuery}"` : undefined}
              />
            </motion.div>
            
            {/* Collection Footer - Only show on collection pages, not on "All Products" */}
            {!isAllProductsPage && filteredProducts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 pt-8 border-t border-yellow-400/20 text-center"
              >
                <p className="text-gray-400 mb-6">
                  Can't find what you're looking for? Browse our other collections.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link
                    to="/collections/all"
                    className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-gray-900 to-black text-yellow-400 rounded-full border border-yellow-400/30 hover:border-yellow-400 hover:bg-yellow-400/10 transition-colors"
                  >
                    All Products
                  </Link>
                  <Link
                    to="/collections/new-arrivals"
                    className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-gray-900 to-black text-yellow-400 rounded-full border border-yellow-400/30 hover:border-yellow-400 hover:bg-yellow-400/10 transition-colors"
                  >
                    New Arrivals
                  </Link>
                  <Link
                    to="/collections/best-sellers"
                    className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-gray-900 to-black text-yellow-400 rounded-full border border-yellow-400/30 hover:border-yellow-400 hover:bg-yellow-400/10 transition-colors"
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