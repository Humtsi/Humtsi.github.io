import { useState } from 'react'
import { Link } from 'react-scroll'
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
            <li>
              <Link to="apropos" smooth={true} duration={1000}>
                À propos
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={1000}>
                Compétences
              </Link>
            </li>
            <li>
              <Link to="portfolio" smooth={true} duration={1000}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={1000}>
                Contact
              </Link>
            </li>
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
              <li>
                <Link to="apropos" smooth={true} duration={1000} onClick={toggleMenu}>
                  À propos
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={1000} onClick={toggleMenu}>
                  Compétences
                </Link>
              </li>
              <li>
                <Link to="portfolio" smooth={true} duration={1000} onClick={toggleMenu}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={1000} onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header