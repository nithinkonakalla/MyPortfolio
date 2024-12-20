import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
        About Me
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Text Section */}
        <div className="w-full lg:w-[50%] space-y-6">
          <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
            Hello! I'm Nithin Konakalla, a passionate web developer with a keen eye for creating beautiful and functional websites. 
            I love turning complex problems into simple, elegant solutions.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
            With a strong foundation in modern web technologies and a commitment to staying up-to-date with the latest industry trends, 
            I strive to deliver high-quality, scalable, and user-friendly applications.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, 
            or enjoying a good book on software architecture.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[40%] mx-auto py-8 lg:py-0 flex justify-center">
        <div className="w-full sm:w-[50%] md:w-[40%] lg:w-[100%] mx-auto py-8">
          <Image
            src="/images/myimage.jpg" // Replace with your image path
            alt="Your Image"
            width={600}  // Specify width
            height={600} // Specify height
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        </div>
      </div>
    </section>
  )
}
