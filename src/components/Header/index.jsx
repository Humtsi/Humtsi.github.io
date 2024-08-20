import { useState } from 'react'
import '../../styles/components/header.scss'
import '../../styles/themes/global.scss'
import Portrait from '../../assets/images/quentinparonneau.webp'


function Header() {

  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header>
      <div className='nav-container'>
        <div className="logo">
          <a href="#banner"><img src={Portrait} alt="Logo Quentin Paronneau"/></a>
        </div>
        <nav className="main-nav">
          <ul className="main-nav__list">
            <li><a href="#apropos" data-parent="about">À propos</a></li>
            <li><a href="#skills" data-parent="services">Compétences</a></li>
            <li><a href="#portfolio" data-parent="works">Portfolio</a></li>
            <li><a href="#contact" data-parent="contact">Contact</a></li>
          </ul>
        </nav>

        <div className="burger-menu">
          <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <nav className={`menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#apropos" data-parent="about" onClick={toggleMenu}>À propos</a></li>
            <li><a href="#skills" data-parent="services" onClick={toggleMenu}>Compétences</a></li>
            <li><a href="#portfolio" data-parent="works" onClick={toggleMenu}>Portfolio</a></li>
            <li><a href="#contact" data-parent="contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header