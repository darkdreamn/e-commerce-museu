import React from 'react';
import './title.css';
import '../ticket/Ticket';
import Ticket from '../ticket/Ticket';

function Title() {
    return (
        <section className='title-group'>
            <article className='title-container'>
                <h1>Aula-visita | Caravaggio: uma análise imersiva</h1>
                <div>27 fev - 2022. 19:00 - 20:30 </div>
                <div>Evento presencial em musArt, Belo Horizonte - MG</div>
                <div>Lembre-se das medidas de prevenção ao COVID-19</div>
            </article>
            <Ticket />
        </section>
    )
}

export default Title;