'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const root = window.document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  return (
    <motion.button
  className="fixed top-20 right-4 p-3 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded-full shadow-lg transition-all duration-300 ease-in-out flex items-center gap-2 hover:bg-gray-700 dark:hover:bg-gray-300 focus:outline-none"
  onClick={() => setIsDark(!isDark)}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  {isDark ? (
    <>
      <Sun size={24} />
      <span className="ml-1 text-sm font-large">Light Mode</span> {/* Text for Dark mode */}
    </>
  ) : (
    <>
      <Moon size={24} />
      <span className="ml-1 text-sm font-large">Dark Mode</span> {/* Text for Light mode */}
    </>
  )}
</motion.button>
  )
}

