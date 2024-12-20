
'use client';
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: "AI SaaS Text-to-Image Generator App",
    description: "A Text-to-Image Generator App powered by AI, allowing users to create images from text prompts. The app features an integrated credit system, where users can generate images based on their available credits. Users can purchase additional credits through an online payment gateway Razorpay. The platform also includes secure user authentication with JWT (JSON Web Token) for safe login and user management.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/yourusername/project1",
    demo: "https://project1-demo.com",
    tech: ["React", "Node.js", "MongoDB", "Express","Razorpay","JWT Auth","ClipDrop Api"]
  },
  {
    title: "Personal Portfolio",
    description: "This is a minimalistic personal portfolio website built with Next.js and styled using Tailwind CSS. The website is fully responsive. The site uses Next.js for server-side rendering, ensuring fast load times and excellent SEO performance. Tailwind CSS provides a flexible and efficient way to style the portfolio, allowing for a clean and modern design that works across different screen sizes.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/nithinkonakalla/MyPortfolio.git",
    demo: "https://my-portfolio-three-sooty-27.vercel.app/",
    tech: ["Next.js", "Tailwind CSS"]
  },
  {
    title: "Weather Dashboard",
    description: "A real-time weather app using React and a third-party API.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/yourusername/project3",
    demo: "https://project3-demo.com",
    tech: ["React", "Weather API", "Chart.js", "Styled Components"]
  }
]
export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-sky-50 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                width={300} 
                height={200} 
                className="w-full h-48 object-cover border-b border-gray-200 dark:border-gray-700"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

