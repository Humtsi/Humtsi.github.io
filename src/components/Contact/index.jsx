import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import '../../styles/components/contact.scss'
import '../../styles/themes/global.scss'

function Contact() {
    useEffect(() => {
        var basicTimeline = anime.timeline({
            autoplay: false
        });
        
        var pathEls = document.querySelectorAll(".check");
        for (var i = 0; i < pathEls.length; i++) {
        var pathEl = pathEls[i];
        var offset = anime.setDashoffset(pathEl);
        pathEl.setAttribute("stroke-dashoffset", offset);
        }
        
        basicTimeline
        .add({
            targets: ".text",
            duration: 1,
            opacity: "0"
        })
        .add({
            targets: ".button",
            duration: 1300,
            height: 10,
            width: 300,
            backgroundColor: "#2B2D2F",
            border: "0",
            borderRadius: 100
        })
        .add({
            targets: ".progress-bar",
            duration: 2000,
            width: 300,
            easing: "linear"
        })
        .add({
            targets: ".button",
            width: 0,
            duration: 1
        })
        .add({
            targets: ".progress-bar",
            width: 80,
            height: 80,
            delay: 500,
            duration: 750,
            borderRadius: 80,
            backgroundColor: "$color4"
        })
        .add({
            targets: pathEl,
            strokeDashoffset: [offset, 0],
            duration: 200,
            easing: "easeInOutSine"
        });
    
        document.querySelector(".button").addEventListener('click', () => {
          basicTimeline.play();
        });
    
        document.querySelector(".text").addEventListener('click', () => {
          basicTimeline.play();
        });
    }, []);

  return (
        <form className="form">
            <div className="form__names">
                <div className="name">
                    <label htmlFor="lastname">Nom</label>
                    <input type="text" name="lastname" id="lastname" placeholder="Nom" required/>
                </div>
                <div className="name">
                    <label htmlFor="firstname">Prénom</label>
                    <input type="text" name="firstname" id="firstname" placeholder="Prénom"/>
                </div>
            </div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Adresse e-mail" required/>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Votre message ici ..." required></textarea>
            <div className="submit-anime">
                <div className="button">
                    <div className="text">Me contacter</div>
                    </div>
                <div className="progress-bar"></div>
                <svg x="0px" y="0px" viewBox="0 0 25 30" style={{enableBackground: "new 0 0 25 30"}}>
                  <path className="check st0" d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2"/>
                </svg>
            </div>
        </form>
  )
}

export default Contact