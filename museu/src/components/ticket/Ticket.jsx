import React from 'react';
import './ticket.css';

function Ticket() {
    return(
        <section className='ticket-container'>
            <div className='ticket-up'>
                <span>Ingressos</span>
                <span>R$0,00</span>
            </div>
            <div className='ticket-middle-top'>
                <span>Grátis</span>
                <span>Disponíveis: 16</span>
            </div>
            <div className='ticket-middle-bottom'>
                <span>Apenas 1 por CPF</span>    
            </div>
            <div className='ticket-bottom'>
                <button id='btn-ticket-reserve'>Reservar</button>
            </div>
        </section>
    )
}

export default Ticket;