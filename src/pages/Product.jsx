// src/pages/Product.jsx - Updated with dark theme
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProductGallery from '../components/products/ProductGallery'
import ProductInfo from '../components/products/ProductInfo'
import ProductGrid from '../components/products/ProductGrid'
import { getProductByHandle } from '../data/products'
import { getProductsByCollection } from '../data/products'
import { FiPackage, FiTruck, FiRefreshCw, FiArrowLeft, FiShield, FiCheck } from 'react-icons/fi'

const Product = () => {
  const { handle } = useParams()
  const [product, setProduct] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [activeTab, setActiveTab] = useState('description')

  useEffect(() => {
    const foundProduct = getProductByHandle(handle)
    setProduct(foundProduct)
    
    if (foundProduct) {
      // Get other products from the same collection
      const related = getProductsByCollection(foundProduct.collectionHandle)
        .filter(p => p.handle !== handle)
        .slice(0, 4) // Show max 4 related products
      setRelatedProducts(related)
    }
  }, [handle])

  if (!product) {
    return (
      <div className="min-h-[60vh] bg-black py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center mb-6 shadow-lg border-2 border-yellow-400/30">
              <span className="text-4xl">🔍</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-black text-white mb-3">
              Product Not Found
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
              The product you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/collections/all"
              className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[0_0_25px_rgba(250,204,21,0.3)] border-2 border-yellow-400/30 hover:border-yellow-400"
            >
              Browse All Products
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black py-6 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb Navigation - Updated */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 md:mb-8"
        >
          <Link
            to={`/collections/${product.collectionHandle}`}
            className="inline-flex items-center gap-2 text-sm text-yellow-400 hover:text-yellow-300 font-medium"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to {product.collectionHandle?.replace(/-/g, ' ') || 'Collections'}
          </Link>
        </motion.div>

        {/* Main Product Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16"
        >
          {/* Left Column - Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <ProductGallery images={product.images} title={product.title} />
          </motion.div>

          {/* Right Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ProductInfo product={product} />
          </motion.div>
        </motion.div>

        {/* Product Description Tabs - Updated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-yellow-400/30 shadow-lg">
            {/* Tabs Navigation - Updated */}
            <div className="flex overflow-x-auto border-b border-yellow-400/20 mb-6 md:mb-8">
              {[
                { id: 'description', label: 'Description', icon: '📝' },
                { id: 'details', label: 'Details', icon: '📦' },
                { id: 'shipping', label: 'Shipping', icon: '🚚' },
                { id: 'returns', label: 'Returns', icon: '↩️' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 md:px-6 py-3 font-medium whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'text-yellow-400 border-b-2 border-yellow-400'
                      : 'text-gray-400 hover:text-yellow-400'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content - Updated */}
            <div className="prose prose-lg max-w-none">
              {activeTab === 'description' && (
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-bold text-white mb-4">
                    About This Product
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {product.description || 'This beautifully crafted personalized gift is designed to create lasting memories. Made with premium materials and attention to detail.'}
                  </p>
                  
                  {/* Features - Updated */}
                  <div className="mt-6 space-y-3">
                    <h4 className="font-display text-xl font-semibold text-yellow-300">Key Features</h4>
                    <ul className="space-y-2">
                      {[
                        'High-quality materials for durability',
                        'Customizable with personal photos/text',
                        'Perfect gift for any occasion',
                        'Handcrafted with attention to detail',
                        'Eco-friendly packaging',
                        'Premium finish & texture'
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'details' && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl font-bold text-white">Product Details</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    <div className="text-center p-5 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-colors">
                      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                        <FiPackage className="w-6 h-6 text-black" />
                      </div>
                      <h4 className="font-semibold text-yellow-300 mb-2">What's Included</h4>
                      <p className="text-sm text-gray-400">
                        Product + premium packaging + care instructions
                      </p>
                    </div>
                    
                    <div className="text-center p-5 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-colors">
                      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center text-black text-xl font-bold">
                        ⚖️
                      </div>
                      <h4 className="font-semibold text-yellow-300 mb-2">Dimensions</h4>
                      <p className="text-sm text-gray-400">
                        {product.dimensions || 'Compact & Portable'}
                      </p>
                    </div>
                    
                    <div className="text-center p-5 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-colors">
                      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center text-black text-xl font-bold">
                        🎨
                      </div>
                      <h4 className="font-semibold text-yellow-300 mb-2">Material</h4>
                      <p className="text-sm text-gray-400">
                        {product.material || 'Premium quality'}
                      </p>
                    </div>
                    
                    <div className="text-center p-5 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-colors">
                      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                        <FiShield className="w-6 h-6 text-black" />
                      </div>
                      <h4 className="font-semibold text-yellow-300 mb-2">Warranty</h4>
                      <p className="text-sm text-gray-400">
                        6 months against defects
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'shipping' && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl font-bold text-white">Shipping Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-colors">
                      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                        <FiTruck className="w-6 h-6 text-black" />
                      </div>
                      <h4 className="font-semibold text-yellow-300 mb-3 text-center">Standard Shipping</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Processing Time</span>
                          <span className="font-medium text-yellow-400">1-2 business days</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Delivery Time</span>
                          <span className="font-medium text-yellow-400">3-7 business days</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Cost</span>
                          <span className="font-medium text-green-400">Free over ₹499</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-colors">
                      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center text-black text-xl font-bold">
                        ⚡
                      </div>
                      <h4 className="font-semibold text-yellow-300 mb-3 text-center">Express Shipping</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Processing Time</span>
                          <span className="font-medium text-yellow-400">Same day</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Delivery Time</span>
                          <span className="font-medium text-yellow-400">1-3 business days</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Cost</span>
                          <span className="font-medium text-yellow-400">Extra ₹99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'returns' && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl font-bold text-white">Return Policy</h3>
                  
                  <div className="p-5 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-colors">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                      <FiRefreshCw className="w-6 h-6 text-black" />
                    </div>
                    
                    {product.isCustomizable ? (
                      <div className="text-center">
                        <h4 className="font-semibold text-yellow-300 mb-2">Non-refundable</h4>
                        <p className="text-gray-400 mb-4">
                          Since this is a custom made product, it cannot be returned or exchanged unless damaged or defective.
                        </p>
                        <div className="text-sm font-medium text-yellow-400">
                          * Please double-check your customization before ordering
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <h4 className="font-semibold text-yellow-300 text-center mb-3">Easy Returns</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Return Window</span>
                            <span className="font-medium text-yellow-400">7 days from delivery</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Condition</span>
                            <span className="font-medium text-yellow-400">Unused with tags</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Return Process</span>
                            <span className="font-medium text-yellow-400">Simple & hassle-free</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Refund Method</span>
                            <span className="font-medium text-yellow-400">Original payment method</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Related Products - Updated */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <div className="text-center mb-8 md:mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-2">
                You Might <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">Also Like</span>
              </h2>
              <p className="text-gray-400">
                More amazing personalized gifts from the same collection
              </p>
            </div>
            
            <ProductGrid products={relatedProducts} />
            
            {/* View All Link - Updated */}
            <div className="text-center mt-8">
              <Link
                to={`/collections/${product.collectionHandle}`}
                className="group inline-flex items-center gap-2 px-6 py-3 text-yellow-400 hover:text-yellow-300 font-bold transition-colors"
              >
                View all in {product.collectionHandle?.replace(/-/g, ' ') || 'Collection'}
                <div className="w-5 h-5 transform group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </Link>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent mx-auto mt-2" />
            </div>
          </motion.div>
        )}

        {/* Trust Badges - Added */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-yellow-400/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-yellow-400/20">
              <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center text-black">
                <FiCheck className="w-4 h-4" />
              </div>
              <div className="text-xs font-medium text-gray-400">Premium Quality</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-yellow-400/20">
              <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center text-black text-sm font-bold">
                🚚
              </div>
              <div className="text-xs font-medium text-gray-400">Free Shipping*</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-yellow-400/20">
              <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                <FiShield className="w-4 h-4 text-black" />
              </div>
              <div className="text-xs font-medium text-gray-400">Secure Payment</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-yellow-400/20">
              <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center text-black text-sm font-bold">
                ⭐
              </div>
              <div className="text-xs font-medium text-gray-400">4.9/5 Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Product