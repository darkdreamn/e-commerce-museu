import React from 'react';
import './styles.css';
import { TicketSend } from '../TicketSend';

export function TicketReserve() {
    const [active, setActive] = React.useState(false);
    const [active1, setActive1] = React.useState(false);
    const modalActive = () => {
        setActive(!active);
        // setActive1(!active1)
    }
    const modalActive1 = () => {
        setActive1(!active);      
    }

    return (
        <div>
            <div className="mdbg"></div>
            {/* <div onClick={modalActive1()} className={`${active1 == true ? "mdbg" : ""}`}></div> */}
            <div className='ticket-container-reserve animeRight'>
                <div className='ticket-reserve-text-title'>musArt Aula-visita | Caravaggio | 27/02/2022</div>
                <div className='ticket-reserve'>
                    <div className='ticket-reserve-text-input'>
                        <p>Nome:</p>
                        <input type="text" name="nome" />
                    </div>
                    <div className='ticket-reserve-text-input'>
                        <p>CPF:</p>
                        <input type="text" name="cpf" />
                    </div>
                    <div className='ticket-reserve-text-input'>
                        <p>E-mail:</p>
                        <input type="text" name="email" />
                    </div>
                </div>
                <div>
                    <button onClick={(() => setActive(modalActive))} id='btn-ticket-reserve'>Confirmar</button>
                </div>
            </div>
            {active && <TicketSend />}
            
        </div>
    )
}