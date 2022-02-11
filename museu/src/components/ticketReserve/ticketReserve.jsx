import React from 'react';
import './ticketReserve.css';

function TicketReserve() {
    return (
        <div className='ticket-container-reserve animeRight'>
            <div className='ticket-reserve-text-title'>musArt Aula-visita | Caravaggio | 27/02/2022</div>
            <div className='ticket-reserve'>
                <div className='ticket-reserve-text-input'>
                    <span>
                        Nome: <input type="text" name="nome" />
                    </span>
                    <span>
                        CPF: <input type="text" name="cpf" />
                    </span>
                    <span>
                        E-mail: <input type="text" name="email" />
                    </span>
                </div>
                <div>
                    <button id='btn-ticket-reserve'>Confirmar</button>
                </div>
            </div>
        </div>
    )
}

export default TicketReserve;