// src/components/products/ProductGallery.jsx - Updated with theme colors
import { useState } from 'react'
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

  return (
    <>
      <div className="space-y-4">
        {/* Main Image Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-square bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl md:rounded-3xl overflow-hidden cursor-zoom-in shadow-lg hover:shadow-xl transition-shadow duration-300"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={images[selectedImage]}
            alt={`${title} - Image ${selectedImage + 1}`}
            className="w-full h-full object-contain p-4 md:p-8 group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          
          {/* Zoom button */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200">
            <FiZoomIn className="text-amber-600" />
          </div>
          
          {/* Image counter for multiple images */}
          {images.length > 1 && (
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
              <span className="text-sm font-medium text-amber-700">
                {selectedImage + 1} / {images.length}
              </span>
            </div>
          )}
        </motion.div>

        {/* Thumbnails Gallery - Enhanced */}
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
                      ? 'border-amber-500 shadow-lg scale-105'
                      : 'border-amber-200 hover:border-amber-400 hover:shadow-md'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${title} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Selected indicator */}
                  {selectedImage === index && (
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20" />
                  )}
                </button>
              ))}
            </div>
            
            {/* Navigation arrows for thumbnails */}
            {images.length > 4 && (
              <>
                <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white via-white to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white via-white to-transparent pointer-events-none" />
              </>
            )}
          </motion.div>
        )}
      </div>

      {/* Fullscreen Modal - Enhanced */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Close button */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-amber-300 transition-colors z-10 p-3 bg-black/30 rounded-full hover:bg-black/50 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            >
              <FiX className="text-2xl md:text-3xl" />
            </motion.button>
            
            {/* Navigation arrows */}
            {images.length > 1 && (
              <>
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-300 transition-colors z-10 p-3 bg-black/30 rounded-full hover:bg-black/50 backdrop-blur-sm"
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
                  className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-300 transition-colors z-10 p-3 bg-black/30 rounded-full hover:bg-black/50 backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                >
                  <FiChevronRight className="text-2xl md:text-3xl" />
                </motion.button>
              </>
            )}
            
            {/* Main modal image */}
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
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                <span className="text-sm font-medium">
                  {selectedImage + 1} of {images.length}
                </span>
              </div>
              
              {/* Dot indicators */}
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
                          ? 'bg-amber-400 scale-125'
                          : 'bg-white/50 hover:bg-white hover:scale-110'
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Add keyboard navigation */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('keydown', (e) => {
            if (${isModalOpen}) {
              if (e.key === 'ArrowRight') {
                e.preventDefault();
                ${nextImage.toString()};
              }
              if (e.key === 'ArrowLeft') {
                e.preventDefault();
                ${prevImage.toString()};
              }
              if (e.key === 'Escape') {
                setIsModalOpen(false);
              }
            }
          });
        `
      }} />
    </>
  )
}

export default ProductGallery