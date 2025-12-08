// src/components/layout/Layout.jsx - Updated
import { motion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <motion.main
        className="flex-grow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <Outlet />
        </div>
      </motion.main>
      <Footer />
    </div>
  )
}

export default Layout