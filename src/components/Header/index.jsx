import '../../styles/components/header.scss'
import '../../styles/themes/global.scss'
import Portrait from '../../assets/images/quentinparonneau.jpg'

function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="nav__logo">
          <a href="#banner"><img src={Portrait} alt="Logo Quentin Paronneau"/></a>
        </div>
        <ul className="nav__list">
          <li className="nav__list__item"><a href="#apropos" className="nav__list__link" data-parent="about">À propos</a></li>
          <li className="nav__list__item"><a href="#skills" className="nav__list__link" data-parent="services">Compétences</a></li>
          <li className="nav__list__item"><a href="#portfolio" className="nav__list__link" data-parent="works">Portfolio</a></li>
          <li className="nav__list__item"><a href="#contact" className="nav__list__link" data-parent="contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header