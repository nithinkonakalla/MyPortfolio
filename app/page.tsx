import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import FloatingActionButton from '@/components/FloatingActionButton'
import ThemeToggle from '@/components/ThemeToggle'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300 ">
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_120%)]"></div>
      <div className="relative z-10">
        <Navbar />
        <div className="pt-16">
          <Hero />
          <div >
            <About />
            <Skills />
            <Projects />
            <Testimonials />
            <Contact />
          </div>
        </div>
        <FloatingActionButton />
        <ThemeToggle />
      </div>
    </main>
  )
}

