import LogoLinkedin from '../../assets/icons/logo-linkedin.png'
import LogoGit from '../../assets/icons/logo-github.png'
import '../../styles/components/footer.scss'
import '../../styles/themes/global.scss'

function Footer() {
  return (
    <footer>
      <div className="logo">
        <div className="logo__reseaux">
          <a href="https://github.com/Humtsi" target="_blank" rel="noopener noreferrer"><img src={LogoGit} alt="Logo Github Quentin Paronneau"/></a>
        </div>
        <div className="logo__reseaux">
          <a href="https://www.linkedin.com/in/quentin-paronneau-650b97123/" target="_blank" rel="noopener noreferrer"><img src={LogoLinkedin} alt='Logo Linkedin Quentin Paronneau'/></a>
        </div>
      </div>
      <span>Réalisé par Quentin Paronneau</span>
    </footer>
  )
}

export default Footer