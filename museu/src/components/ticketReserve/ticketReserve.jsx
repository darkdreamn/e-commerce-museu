import React from 'react';
import './ticketReserve.css';
import TicketSend from '../ticketSend/TicketSend';

function TicketReserve() {
    const [active, setActive] = React.useState(false);

    return (
        <div>
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
                        <button onClick={(() => setActive(!active))} id='btn-ticket-reserve'>Confirmar</button>
                    </div>
                </div>
            </div>
            {active && <TicketSend />}
        </div>
    )
}

export default TicketReserve;