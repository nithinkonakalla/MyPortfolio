'use client';

import Image from 'next/image'
import { motion } from 'framer-motion'

const certifications = [
  {
    title: 'Full Stack Web Development',
    issuer: '100xDevs',
    link: 'https://drive.google.com/file/d/1XHdFuVkSh3eHUeIDvtu8oDYfQrwLagt9/view',
    image: '/images/Mern Stack Certificate (1).png',
    description: 'Course completion certificate for full stack web development.'
  },
  {
    title: 'DSA Course Completion',
    issuer: 'GeeksforGeeks',
    link: 'https://drive.google.com/file/d/1GOeqrbfau97K9BCYk6WMBED-_LNJ-AMr/view',
    image: '/images/DSA completion certificate.jpg',
    description: 'Certificate for completing data structures and algorithms training.'
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-r from-indigo-50 via-violet-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300 mb-3">Certifications</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Verified Course Certificates</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Two important certifications that reflect my training in full stack development and data structures.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-[32px] border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="relative h-64 overflow-hidden rounded-br-[64px] bg-white dark:bg-gray-900">
                <Image
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold dark:bg-blue-900 dark:text-blue-200">
                    View
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{cert.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
