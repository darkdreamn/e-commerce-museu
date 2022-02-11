import React from 'react';
import Painting from '../paintings/Painting';
import './gallery.css';

function Gallery() {
    return (
        <section>
            <div className='frame frame-up'>
                <p>
                    Ministério do Turismo e musArt apresentam CARAVAGGIO
                </p>
            </div>
            <Painting />
            <div className='frame frame-bottom'></div>
        </section>
    )
}

export default Gallery;