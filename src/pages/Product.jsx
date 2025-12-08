// src/pages/Product.jsx - Updated with theme colors and improved spacing
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProductGallery from '../components/products/ProductGallery'
import ProductInfo from '../components/products/ProductInfo'
import ProductGrid from '../components/products/ProductGrid'
import { getProductByHandle } from '../data/products'
import { getProductsByCollection } from '../data/products'
import { FiPackage, FiTruck, FiRefreshCw, FiArrowLeft } from 'react-icons/fi'

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
      <div className="min-h-[60vh] bg-gradient-to-b from-amber-50/30 to-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-amber-200 to-orange-200 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <span className="text-4xl">🔍</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-black text-gray-900 mb-3">
              Product Not Found
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
              The product you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/collections/all"
              className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Browse All Products
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/20 to-white py-6 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 md:mb-8"
        >
          <Link
            to={`/collections/${product.collectionHandle}`}
            className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-700 font-medium"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to {product.collectionHandle.replace(/-/g, ' ')}
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

        {/* Product Description Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-amber-200 shadow-lg">
            {/* Tabs Navigation */}
            <div className="flex overflow-x-auto border-b border-amber-200 mb-6 md:mb-8">
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
                      ? 'text-amber-700 border-b-2 border-amber-500'
                      : 'text-gray-600 hover:text-amber-600'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="prose prose-lg max-w-none">
              {activeTab === 'description' && (
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                    About This Product
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {product.description || 'This beautifully crafted personalized gift is designed to create lasting memories. Made with premium materials and attention to detail.'}
                  </p>
                  
                  {/* Features */}
                  <div className="mt-6 space-y-3">
                    <h4 className="font-display text-xl font-semibold text-gray-900">Key Features</h4>
                    <ul className="space-y-2">
                      {[
                        'High-quality materials for durability',
                        'Customizable with personal photos/text',
                        'Perfect gift for any occasion',
                        'Handcrafted with attention to detail',
                        'Eco-friendly packaging'
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'details' && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl font-bold text-gray-900">Product Details</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    <div className="text-center p-5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <FiPackage className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">What's Included</h4>
                      <p className="text-sm text-gray-600">
                        Product + premium packaging + care instructions
                      </p>
                    </div>
                    
                    <div className="text-center p-5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                      <div className="text-2xl mb-3">⚖️</div>
                      <h4 className="font-semibold text-gray-900 mb-2">Dimensions</h4>
                      <p className="text-sm text-gray-600">
                        {product.dimensions || 'Compact & Portable'}
                      </p>
                    </div>
                    
                    <div className="text-center p-5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                      <div className="text-2xl mb-3">🎨</div>
                      <h4 className="font-semibold text-gray-900 mb-2">Material</h4>
                      <p className="text-sm text-gray-600">
                        {product.material || 'Premium quality'}
                      </p>
                    </div>
                    
                    <div className="text-center p-5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                      <div className="text-2xl mb-3">🛡️</div>
                      <h4 className="font-semibold text-gray-900 mb-2">Warranty</h4>
                      <p className="text-sm text-gray-600">
                        6 months against defects
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'shipping' && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl font-bold text-gray-900">Shipping Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <FiTruck className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-center">Standard Shipping</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Processing Time</span>
                          <span className="font-medium">1-2 business days</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Delivery Time</span>
                          <span className="font-medium">3-7 business days</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Cost</span>
                          <span className="font-medium">Free over ₹499</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                      <div className="text-3xl mb-3 text-center">⚡</div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-center">Express Shipping</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Processing Time</span>
                          <span className="font-medium">Same day</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Delivery Time</span>
                          <span className="font-medium">1-3 business days</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Cost</span>
                          <span className="font-medium">Extra ₹99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'returns' && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl font-bold text-gray-900">Return Policy</h3>
                  
                  <div className="p-5 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl border border-rose-200">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <FiRefreshCw className="w-6 h-6 text-white" />
                    </div>
                    
                    {product.isCustomizable ? (
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-900 mb-2">Non-refundable</h4>
                        <p className="text-gray-600 mb-4">
                          Since this is a custom made product, it cannot be returned or exchanged unless damaged or defective.
                        </p>
                        <div className="text-sm font-medium text-rose-700">
                          * Please double-check your customization before ordering
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 text-center mb-3">Easy Returns</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Return Window</span>
                            <span className="font-medium">7 days from delivery</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Condition</span>
                            <span className="font-medium">Unused with tags</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Return Process</span>
                            <span className="font-medium">Simple & hassle-free</span>
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

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <div className="text-center mb-8 md:mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-black text-gray-900 mb-2">
                You Might <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">Also Like</span>
              </h2>
              <p className="text-gray-600">
                More amazing personalized gifts from the same collection
              </p>
            </div>
            
            <ProductGrid products={relatedProducts} columns={4} />
            
            {/* View All Link */}
            <div className="text-center mt-8">
              <Link
                to={`/collections/${product.collectionHandle}`}
                className="group inline-flex items-center gap-2 px-6 py-3 text-amber-600 hover:text-amber-700 font-bold transition-colors"
              >
                View all in {product.collectionHandle.replace(/-/g, ' ')}
                <div className="w-5 h-5 transform group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </Link>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-2" />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Product