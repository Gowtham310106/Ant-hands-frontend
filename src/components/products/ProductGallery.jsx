// src/components/products/ProductGallery.jsx - Updated with dark theme
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiZoomIn, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const ProductGallery = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isModalOpen) {
        if (e.key === 'ArrowRight') {
          e.preventDefault()
          nextImage()
        }
        if (e.key === 'ArrowLeft') {
          e.preventDefault()
          prevImage()
        }
        if (e.key === 'Escape') {
          setIsModalOpen(false)
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen])

  return (
    <>
      <div className="space-y-4">
        {/* Main Image Container - Updated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-square bg-gradient-to-br from-gray-900 to-black rounded-2xl md:rounded-3xl overflow-hidden cursor-zoom-in shadow-lg hover:shadow-[0_0_30px_rgba(250,204,21,0.2)] transition-all duration-300 border-2 border-yellow-400/20 hover:border-yellow-400/40"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={images[selectedImage]}
            alt={`${title} - Image ${selectedImage + 1}`}
            className="w-full h-full object-contain p-4 md:p-8 group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Gradient overlay on hover - Updated */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          
          {/* Zoom button - Updated */}
          <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:scale-110 transition-all duration-200 border border-yellow-400/30 hover:border-yellow-400">
            <FiZoomIn className="text-yellow-400" />
          </div>
          
          {/* Image counter for multiple images - Updated */}
          {images.length > 1 && (
            <div className="absolute bottom-4 right-4 bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-yellow-400/30">
              <span className="text-sm font-medium text-yellow-400">
                {selectedImage + 1} / {images.length}
              </span>
            </div>
          )}
        </motion.div>

        {/* Thumbnails Gallery - Updated */}
        {images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative"
          >
            <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 px-1">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg md:rounded-xl overflow-hidden border-2 transition-all duration-300 group relative ${
                    selectedImage === index
                      ? 'border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.3)] scale-105 bg-gray-900'
                      : 'border-yellow-400/20 hover:border-yellow-400/60 hover:shadow-[0_0_10px_rgba(250,204,21,0.2)] bg-gray-900/50'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${title} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Selected indicator - Updated */}
                  {selectedImage === index && (
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20" />
                  )}
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>
            
            {/* Navigation arrows for thumbnails - Updated */}
            {images.length > 4 && (
              <>
                <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black via-black to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black via-black to-transparent pointer-events-none" />
              </>
            )}
          </motion.div>
        )}
      </div>

      {/* Fullscreen Modal - Updated */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Close button - Updated */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-yellow-400 hover:text-yellow-300 transition-colors z-10 p-3 bg-gray-900/50 rounded-full hover:bg-gray-900/80 backdrop-blur-sm border border-yellow-400/30 hover:border-yellow-400"
              onClick={() => setIsModalOpen(false)}
            >
              <FiX className="text-2xl md:text-3xl" />
            </motion.button>
            
            {/* Navigation arrows - Updated */}
            {images.length > 1 && (
              <>
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 text-yellow-400 hover:text-yellow-300 transition-colors z-10 p-3 bg-gray-900/50 rounded-full hover:bg-gray-900/80 backdrop-blur-sm border border-yellow-400/30 hover:border-yellow-400"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                >
                  <FiChevronLeft className="text-2xl md:text-3xl" />
                </motion.button>
                
                <motion.button
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 text-yellow-400 hover:text-yellow-300 transition-colors z-10 p-3 bg-gray-900/50 rounded-full hover:bg-gray-900/80 backdrop-blur-sm border border-yellow-400/30 hover:border-yellow-400"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                >
                  <FiChevronRight className="text-2xl md:text-3xl" />
                </motion.button>
              </>
            )}
            
            {/* Main modal image - Updated */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full max-w-6xl max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage]}
                alt={`${title} - Full view`}
                className="w-full h-full max-h-[85vh] object-contain rounded-lg"
              />
              
              {/* Image counter - Updated */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900/80 backdrop-blur-sm text-yellow-400 px-4 py-2 rounded-full border border-yellow-400/30">
                <span className="text-sm font-medium">
                  {selectedImage + 1} of {images.length}
                </span>
              </div>
              
              {/* Dot indicators - Updated */}
              {images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 mt-12">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedImage(index)
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        selectedImage === index
                          ? 'bg-yellow-400 scale-125 shadow-[0_0_10px_rgba(250,204,21,0.8)]'
                          : 'bg-yellow-400/50 hover:bg-yellow-400 hover:scale-110'
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProductGallery