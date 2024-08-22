import { useEffect, useRef } from 'react'
import { initializeTyped } from '../../utils/typedConfig'
import { initializeCanvasAnimations } from '../../utils/animation'
import Portrait from '../../assets/images/quentinparonneau.webp'
import '../../styles/components/banner.scss'
import '../../styles/themes/global.scss'

function Banner() {

  const typedRef = useRef(null);

  useEffect(() => {
    // Initialisation de Typed.js
    const cleanupTyped = initializeTyped(typedRef);

    // Cleanup lorsque le composant se démonte
    return () => {
      if (cleanupTyped) cleanupTyped();
    };
  }, []);

  useEffect(() => {
    initializeCanvasAnimations('c'); // Appel de la fonction d'animation
  }, []);

  return (
  <section id="banner">
    <canvas id="c"></canvas>
    <div className="banner__title">
      <p className="banner__title__text">
        <span>Bonjour,<br/>je m'appelle Quentin Paronneau,<br/>je suis </span>
        <span ref={typedRef} className="typed-text"></span>
      </p>
      <div className="banner__title__img">     
        <img  src={Portrait} alt="Portrait Quentin Paronneau"/>   
        <div className="hover">
          <span>Click me !</span>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Banner