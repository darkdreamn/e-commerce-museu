import React from 'react';
import './description.css';

function Description() {
    return (
        <article className='article-bg-color'>
            <div className='article-container'>
                <h2>Descrição do evento</h2>
                <p>
                    A palestra em movimento nas dependências da musArt, propõem uma imersão analítica nas obras de Michelangelo Merisi (ou Amerighi), conhecido como Caravaggio. Um dos mais notados pintores italianos, atuante em Roma, Nápoles, Malta e Sicília, entre 1593 e 1610. </p>
                <p>
                    Nesta aula, que acontecerá durante visita à exposição, serão abordados pontos fundamentais do trabalho do artista e do seu período. Caravaggio procurou a realidade palpável e concreta da representação. Utilizou como modelos figuras humanas, sem qualquer receio de representar a feiura, a deformidade em cenas provocadoras, características essas que distinguem as suas obras. Tudo isso chocou os seus contemporâneos, pela rudez das suas pinturas. Dos efeitos que Caravaggio dava aos quadros, originou-se o tenebrismo, em que os tons terrosos contrastam com os fortes pontos de luz. Não perca essa oportunidade de conhecer um pouco mais sobre o artista e fique atento, número limitado de vagas.</p>

                <h2>Serviço</h2>
                <p>Data: 27 de fevereiro</p>
                <p>Horário: início as 19 horas</p>
                <p>Abertura das inscrições: 14 de fevereiro as 10 horas</p>
                <p>Ponto de encontro: musArt próximo à bilheteria</p>
                <p>Inscrição gratuita
                    Não se esqueça de levar seu Passaporte de Vacinação, ele será exigido na entrada.
                    Em decorrência da nova portaria da Prefeitura de Belo Horizonte, publicada no dia 1º de fevereiro de 2022, torna-se obrigatória a apresentação do comprovante de vacinação com duas doses da vacina contra a covid-19 (documento original ou plataforma Conecte SUS).</p>

                <h2>Local</h2>
                <p>musArt</p>
                <p>Avenida Afonso Pena, 1537, Funcionários</p>
                <p>Belo Horizonte, MG</p>
            </div>
        </article>
    )
}

export default Description;