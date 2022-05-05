import React from 'react';
import './styles.css';

export function TicketSend() {
    return (
        <div className='ticket-send animeRight'>
            <div className='ticket-send-up'>
                <span>Sua reserva foi confirmada!</span>
            </div>
            <div className='ticket-send-bottom'>
                <span>Seu ingresso foi enviado para o e-mail informado.</span>
                <span>Será necessário a apresentação do comprovante de vacinação, o ingresso impresso e um documento com foto.</span>
            </div>
            <div>
                <button id='btn-ticket-send'>Fechar</button>
            </div>
        </div>
    )
}