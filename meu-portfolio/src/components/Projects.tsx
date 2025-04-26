import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-primary">Projetos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            className="bg-primary-light text-white p-6 rounded-xl shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <h3 className="text-xl font-semibold mb-2">Projeto {item}</h3>
            <p>Este projeto vibra como uma nota musical 🎵</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
