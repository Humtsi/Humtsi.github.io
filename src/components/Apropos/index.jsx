import useAnimateOnScroll from '../../hooks/useAnimateOnScroll'
import '../../styles/components/apropos.scss'
import '../../styles/themes/global.scss'


function Apropos() {
	const ref = useAnimateOnScroll()
  return (
	<div className="description animated-element" ref={ref}>
		<p>
			Récemment certifié <strong>Développeur Web.</strong>
			<br/>
			Je conçois et réalise des sites web du cahier des charges à la mise en ligne.
			<br/>
			J'ai quelques projets intéressants
			<a href="#portfolio"> à voir.</a>
			<br/>
			Vous souhaitez avoir mon CV au format PDF c'est par 
			<a href="/assets/docs/CV-QuentinParonneau.pdf" target="_blank" rel="noopener noreferrer"> ici.</a>
		</p>
	</div>
  )
}

export default Apropos