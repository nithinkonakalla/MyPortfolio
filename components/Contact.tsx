// 'use client';



// import { useState } from 'react'
// // import { motion } from 'framer-motion'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'

// export default function Contact() {
//   const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setFormStatus('sending')
//     // Here you would typically send the form data to a server
//     await new Promise(resolve => setTimeout(resolve, 2000)) // Simulating server delay
//     setFormStatus('sent')
//   }

//   return (
//     <section id="contact" className="py-20 px-4 bg-gradient-to-b from-purple-50 to-rose-50 dark:from-gray-900 dark:to-gray-800">
//     <div className="max-w-3xl mx-auto">
//     <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">Contact Me</h2>
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div className="space-y-4">
//         <div>
//           <Input 
//             type="text" 
//             placeholder="Your Name" 
//             required 
//             className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 transition-all" 
//           />
//         </div>
//         <div>
//           <Input 
//             type="email" 
//             placeholder="Your Email" 
//             required 
//             className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 transition-all" 
//           />
//         </div>
//         <div>
//           <Textarea 
//             placeholder="Your Message" 
//             required 
//             className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 transition-all" 
//           />
//         </div>
//       </div>
//       <div>
//         <Button 
//           type="submit" 
//           disabled={formStatus !== 'idle'} 
//           className="w-full py-3 px-6 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all duration-300"
//         >
//           {formStatus === 'idle' && 'Send Message'}
//           {formStatus === 'sending' && 'Sending...'}
//           {formStatus === 'sent' && 'Message Sent!'}
//         </Button>
//       </div>
//     </form>
//   </div>
// </section>

//   )
// }

'use client';

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { submitContactForm } from './actions/contact'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    
    const formData = new FormData(e.currentTarget)
    const result = await submitContactForm(formData)

    if (result.success) {
      setFormStatus('sent')
    } else {
      setFormStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-purple-50 to-rose-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Input 
                name="name"
                type="text" 
                placeholder="Your Name" 
                required 
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 transition-all" 
              />
            </div>
            <div>
              <Input 
                name="email"
                type="email" 
                placeholder="Your Email" 
                required 
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 transition-all" 
              />
            </div>
            <div>
              <Textarea 
                name="message"
                placeholder="Your Message" 
                required 
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 transition-all" 
              />
            </div>
          </div>
          <div>
            <Button 
              type="submit" 
              disabled={formStatus !== 'idle'} 
              className="w-full py-3 px-6 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all duration-300"
            >
              {formStatus === 'idle' && 'Send Message'}
              {formStatus === 'sending' && 'Sending...'}
              {formStatus === 'sent' && 'Message Sent!'}
              {formStatus === 'error' && 'Error. Try Again.'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

