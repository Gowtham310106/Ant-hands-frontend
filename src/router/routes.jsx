// src/router/routes.jsx
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home'
import Collection from '../pages/Collection'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import About from '../pages/About'
import Contact from '../pages/Contact'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import TermsConditions from '../pages/TermsConditions'
import CancellationRefund from '../pages/CancellationRefund'
import WorkshopPage from '../pages/WorkshopPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/collections/:handle" element={<Collection />} />
        <Route path="/products/:handle" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/cancellation-refund" element={<CancellationRefund />} />
        {/* Corrected route path - use lowercase 'workshop' */}
        <Route path="/workshop" element={<WorkshopPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes