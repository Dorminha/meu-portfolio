const Header = () => {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portfólio Luan de Paz</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-primary-light transition">Sobre</a>
          <a href="#projects" className="hover:text-primary-light transition">Projetos</a>
          <a href="#contact" className="hover:text-primary-light transition">Contato</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
