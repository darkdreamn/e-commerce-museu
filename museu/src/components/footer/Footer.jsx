import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                <div className='infor'>
                    <p className='infor-title'>musArt</p>
                    <p>Av. Afonso Pena, 1537. Centro. Belo Horizonte/MG - CEP 30130-004</p>
                    <p>Telefone geral (31) 00000-000</p>
                    <p>
                        <a href='#'>Como Chegar</a>
                    </p>
                </div>
                <div className='infor'>
                    <p>
                        <a href='#'>Fale Conosco</a>
                    </p>
                    <p>
                        <a href='#'>Política de Privacidade</a>
                    </p>
                    <p>
                        <a href='#'>Parceiros</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;