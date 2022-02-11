import React from "react";
import './painting.css';
import paint1 from '../../assets/painting-amor-vincet-omnia.jpg';
import paint2 from '../../assets/painting-judith-b-holofernes.jpg';
import paint3 from '../../assets/painting-medusa.jpg';
import paint4 from '../../assets/painting-the-entombment-of-christ.jpg';
import paint5 from '../../assets/paiting-taking-of-christ.jpg';

function Painting() {
    return(
        <section className="paint-container">
            {/* <img src={paint1} id="paint-1" className="paint panel" alt="pintura de Caravaggio Amor Vincet Omnia"></img>
            <img src={paint2} id="paint-2" className="paint panel" alt="pintura de Caravaggio Judith b. Holofernes"></img>
            <img src={paint3} id="paint-3" className="paint panel active" alt="pintura de Caravaggio Medusa"></img>
            <img src={paint4} id="paint-4" className="paint panel" alt="pintura de Caravaggio The Entombment of Christ"></img>
            <img src={paint5} id="paint-5" className="paint panel" alt="pintura de Caravaggio Taking of Christ"></img> */}
            <img id="paint-1" className="paint panel" alt="pintura de Caravaggio Amor Vincet Omnia"></img>
            <img id="paint-2" className="paint panel" alt="pintura de Caravaggio Judith b. Holofernes"></img>
            <img id="paint-3" className="paint panel" alt="pintura de Caravaggio Medusa"></img>
            <img id="paint-4" className="paint panel" alt="pintura de Caravaggio The Entombment of Christ"></img>
            <img id="paint-5" className="paint panel" alt="pintura de Caravaggio Taking of Christ"></img>
        </section>
    )    
}

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

export default Painting;