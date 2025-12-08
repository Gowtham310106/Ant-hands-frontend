// src/context/CartContext.jsx
import { createContext, useState, useContext, useEffect } from 'react'

// Create context
export const CartContext = createContext()

// Initial cart state
const getInitialCart = () => {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('ant-hands-cart')
    return savedCart ? JSON.parse(savedCart) : []
  }
  return []
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getInitialCart)

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('ant-hands-cart', JSON.stringify(cartItems))
  }, [cartItems])

  // Add item to cart
  const addToCart = (product, quantity = 1, customizationValues = {}) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(
        item => item.product.id === product.id && 
        JSON.stringify(item.customizationValues) === JSON.stringify(customizationValues)
      )

      if (existingItemIndex > -1) {
        // Update quantity if same product with same customization
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex].quantity += quantity
        return updatedItems
      } else {
        // Add new item
        return [...prevItems, {
          product,
          quantity,
          customizationValues
        }]
      }
    })
  }

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(prevItems => 
      prevItems.filter(item => item.product.id !== productId)
    )
  }

  // Update item quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId)
      return
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    )
  }

  // Clear cart
  const clearCart = () => {
    setCartItems([])
  }

  // Calculate cart count
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  // Calculate cart total
  const cartTotal = cartItems.reduce(
    (total, item) => total + (item.product.price * item.quantity),
    0
  )

  // Get cart subtotal (same as total for now, could include shipping/tax later)
  const cartSubtotal = cartTotal

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        cartSubtotal
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}