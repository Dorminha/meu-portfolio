import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-white text-center">
      <h2 className="text-3xl font-bold">Contato</h2>
      <p className="mt-4">Email: luan@example.com</p>

      <motion.a
        whileHover={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        href="mailto:luan@example.com"
        className="mt-6 inline-block bg-white text-primary font-bold px-6 py-3 rounded-full shadow-lg hover:bg-primary-light"
      >
        Me Chama 🎵
      </motion.a>
    </section>
  )
}

export default Contact
