import Banner from '../../components/Banner'
import Dropdown from '../../components/Dropdown'
import montagneImage from '../../assets/montagne.png'
import '../../styles/pages/apropos.scss';
import '../../styles/themes/global.scss';

function Home() {
  return (
    <div className="apropos">
      <Banner title="" backgroundImage={montagneImage} opacity='0'/>
      <div className="apropos__gallery">
            <Dropdown
                title='Fiabilité'
                content='Les annonces postées sur Kasa garantissent une 
                fiabilité totale. Les photos sont conformes aux logements, 
                et toutes les informations sont régulièrement vérifiées par 
                nos équipes.'
            />
            <Dropdown
                title='Respect'
                content='La bienveillance fait partie des valeurs fondatrices 
                de Kasa. Tout comportement discriminatoire ou de perturbation 
                du voisinage entrainera une exclusion de notre plateforme.'
            />
            <Dropdown
                title='Service'
                content='La bienveillance fait partie des valeurs fondatrices 
                de Kasa. Tout comportement discriminatoire ou de perturbation 
                du voisinage entrainera une exclusion de notre plateforme.'
            />
            <Dropdown
                title='Sécurité'
                content="La sécurité est la priorité de Kasa. Aussi bien pour 
                nos hôtes que pour les voyageurs, chaque logement correspond aux 
                critères de sécurité établis par nos services. En laissant une 
                note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes 
                de vérifier que les standards sont bien respectés. Nous organisons 
                également des ateliers sur la sécurité domestique pour nos hôtes."
            />
      </div>
    </div>
  )
}

export default Home
