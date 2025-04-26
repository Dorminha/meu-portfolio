import { motion } from 'framer-motion'

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-100 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-primary">Sobre Mim</h2>
      <p className="mt-6 max-w-2xl mx-auto text-gray-700">
        Desenvolvedor apaixonado por transformar ideias em experiências digitais com som e cor.
      </p>
    </motion.section>
  )
}

export default AboutMe
