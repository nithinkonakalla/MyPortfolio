'use client';
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Amith Shastry",
    role: "CEO, Matrical Technologies",
    content: "Nithin is an exceptional developer. His attention to detail and problem-solving skills are unmatched."
  },
  {
    name: "Rajan",
    role: "Project Manager, Matrical Technologies",
    content: "Working with Nithin was a pleasure. He consistently delivered high-quality work and met all deadlines."
  },
  {
    name: "Pavan Kalyan",
    role: "Backend Developer, Matrical Technologies",
    content: "Nithin's expertise in React and Next.js significantly improved our project's performance and user experience."
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-12">
        Testimonials
      </h2>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              "{testimonial.content}"
            </p>
            <div className="font-semibold text-lg text-gray-800 dark:text-white">{testimonial.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  
  )
}

