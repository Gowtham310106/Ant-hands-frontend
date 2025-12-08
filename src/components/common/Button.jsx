// src/components/common/Button.jsx - Updated with theme colors
import { motion } from 'framer-motion'
import { FiLoader } from 'react-icons/fi'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  className = '', 
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  ...props 
}) => {
  // Base classes for all buttons
  const baseClasses = 'font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center'
  
  // Size variants
  const sizes = {
    small: 'px-4 py-2 text-sm rounded-lg',
    medium: 'px-6 py-3 text-base rounded-xl',
    large: 'px-8 py-4 text-lg rounded-2xl'
  }
  
  // Color variants with theme gradients
  const variants = {
    // Primary - Main gradient button
    primary: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white focus:ring-amber-500 shadow-lg hover:shadow-xl',
    
    // Secondary - Outline with theme colors
    secondary: 'bg-transparent border-2 border-amber-500 text-amber-600 hover:text-amber-700 hover:bg-amber-50 focus:ring-amber-500',
    
    // Gradient Secondary - Alternative gradient
    gradient: 'bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white focus:ring-amber-400 shadow-md hover:shadow-lg',
    
    // Dark - For contrast
    dark: 'bg-gradient-to-r from-slate-900 to-gray-900 hover:from-slate-800 hover:to-gray-800 text-white focus:ring-slate-900 shadow-lg hover:shadow-xl',
    
    // Rose - For important actions
    rose: 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white focus:ring-rose-500 shadow-lg hover:shadow-xl',
    
    // Ghost - Minimal style
    ghost: 'bg-transparent hover:bg-amber-50 text-amber-600 hover:text-amber-700 focus:ring-amber-500',
    
    // Success - For positive actions
    success: 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white focus:ring-green-500 shadow-lg hover:shadow-xl',
    
    // Warning - For cautionary actions
    warning: 'bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white focus:ring-amber-400 shadow-lg hover:shadow-xl'
  }

  // Full width class
  const widthClass = fullWidth ? 'w-full' : ''

  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.05 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.95 }}
      className={`
        ${baseClasses}
        ${sizes[size]}
        ${variants[variant]}
        ${widthClass}
        ${className}
        relative overflow-hidden
      `}
      disabled={disabled || loading}
      {...props}
    >
      {/* Loading overlay */}
      {loading && (
        <div className="absolute inset-0 bg-current opacity-20 flex items-center justify-center">
          <FiLoader className="w-5 h-5 animate-spin" />
        </div>
      )}
      
      {/* Icon and text content */}
      <div className={`flex items-center gap-2 ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
        {/* Left icon */}
        {icon && iconPosition === 'left' && (
          <span className="flex items-center">
            {icon}
          </span>
        )}
        
        {/* Button text */}
        <span className="font-bold">
          {children}
        </span>
        
        {/* Right icon */}
        {icon && iconPosition === 'right' && (
          <span className="flex items-center">
            {icon}
          </span>
        )}
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-rose-600 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
    </motion.button>
  )
}

export default Button