import React from 'react';
import './ticket.css';
import TicketReserve from '../ticketReserve/ticketReserve';

function Ticket() {
    const [active, setActive] = React.useState(false);

    return (
        <section >
            <div className='ticket-container'>
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
                    <button onClick={(() => setActive(!active))} id='btn-ticket'>Reservar</button>
                </div>
            </div>
            {active && <TicketReserve />}

        </section>
    )
}

export default Ticket;