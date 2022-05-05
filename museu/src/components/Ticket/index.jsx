import React from 'react';
import './styles.css';
import { TicketReserve } from '../TicketReserve';

export function Ticket() {
    const [active, setActive] = React.useState(false);
    // const [counterTicket, setCounterTicket] = useState({ count: 16 })

    // useEffect(() => {
    //     fetch('http://localhost:3001')
    //         .then(data => { setCounterTicket({
    //             counterTicket: data
    //         }) })    
    // })

    return (
        <section >
            <div className='ticket-container'>
                <div className='ticket-up'>
                    <span>Ingressos</span>
                    <span>R$0,00</span>
                </div>
                <div className='ticket-middle-top'>
                    <span>Grátis</span>
                    {/* <span>Disponíveis: {counterTicket}</span> */}
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