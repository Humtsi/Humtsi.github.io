import Frontend from '../../assets/images/frontend.png'
import Backend from '../../assets/images/backend.png'
import '../../styles/components/skills.scss'
import '../../styles/themes/global.scss'


function Skills() {
    return (
        <div className="skills">
            <div className="skills__container">
                <img src={Frontend} className="skills__container__img" alt="Compétences frontend"/>
                <div className="skills__container__txt">Frontend</div>
            </div>
            <div className="flux"></div>
            <div className="skills__container">
                <img src={Backend} className="skills__container__img" alt="Compétences backend"/>
                <div className="skills__container__txt">Backend</div>
            </div>
        </div>
    )
}

export default Skills
