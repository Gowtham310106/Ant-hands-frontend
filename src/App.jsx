// src/App.jsx
import { CartProvider } from './context/CartContext'
import AppRoutes from './router/routes'

function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  )
}

export default App