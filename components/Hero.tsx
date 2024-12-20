'use client';


import { motion } from 'framer-motion'
import { ArrowDownCircle, Mail, Phone, Github, Linkedin } from 'lucide-react'
// import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-rose-50 to-teal-50 mt-5 dark:from-gray-900 dark:to-gray-800">

      <motion.h1 
        className="text-5xl md:text-7xl font-bold mb-4 text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Nithin Konakalla
      </motion.h1>
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">Web Developer | Tech Enthusiast | Problem Solver</p>
        <p className="text-lg text-gray-600 dark:text-gray-400">Currently working at <span className="text-blue-600 dark:text-blue-400 font-semibold">Matrical Technologies,Bengaluru</span></p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center items-center">
          <a 
            href="mailto:your.email@example.com" 
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
          >
            <Mail size={20} />
             Nithinkonakalla2357@gmail.com
          </a>
          <a 
            href="tel:+1234567890" 
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
          >
            <Phone size={20} />
            +91 7989052936
          </a>
        </div>
        <div className="flex justify-center gap-6 mt-4">
          <a 
            href="https://github.com/nithinkonakalla" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
          >
            <Github size={24} />
            <span className="text-sm">GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/nithin-konakalla/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
          >
            <Linkedin size={24} />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12"
      >
        <ArrowDownCircle 
          className="animate-bounce cursor-pointer text-gray-600 dark:text-gray-400" 
          size={48} 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        />
      </motion.div>
    </section>
  )
}

