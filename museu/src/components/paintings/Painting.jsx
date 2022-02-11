import React from "react";
import './painting.css';

function Painting() {
    return(
        <section className="paint-container">
            <img id="paint-1" className="paint panel"></img>
            <img id="paint-2" className="paint panel"></img>
            <img id="paint-3" className="paint panel"></img>
            <img id="paint-4" className="paint panel"></img>
            <img id="paint-5" className="paint panel"></img>
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