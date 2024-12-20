
'use client';
import { motion } from 'framer-motion'
import SkillBar from './SkillBar'

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Express.js", level: 75 },

  { name: "TypeScript", level: 70 },
  { name: "HTML5/CSS3", level: 95 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Redux", level: 80 },
  { name: "MongoDB", level: 80 },
  { name: "RESTful API", level: 70 },
  { name: "Responsive Design", level: 80 },
  { name: "Framer Animation", level: 70 },





]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-r from-teal-50 via-cyan-50 to-sky-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <SkillBar skill={skill.name} level={skill.level} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

