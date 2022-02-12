import React from "react";
import './painting.css';

function Painting() {
    const [isPaintActive1, setPaintActive1] = React.useState(false);
    const [isPaintActive2, setPaintActive2] = React.useState(false);
    const [isPaintActive3, setPaintActive3] = React.useState(true);
    const [isPaintActive4, setPaintActive4] = React.useState(false);
    const [isPaintActive5, setPaintActive5] = React.useState(false);

    const [namePaint, setNamePaint] = React.useState('Medusa');
    const [dataPaint, setDataPaint] = React.useState('1597 d.C.');
    const [techniquePaint, setTechniquePaint] = React.useState('Óleo sobre tela');
    const [dimensionPaint, setDimensionPaint] = React.useState('60 x 55 cm');
    const [localizationPaint, setLocalizationPaint] = React.useState('Galleria degli Uffizi, Florença');

    const paintActive1 = () => {
        setPaintActive1(true);
        setPaintActive2(false);
        setPaintActive3(false);
        setPaintActive4(false);
        setPaintActive5(false);
        setNamePaint('Amor Vincit Omnia');
        setDataPaint('1601–1602');
        setTechniquePaint('Óleo sobre tela');
        setDimensionPaint('156 x 113 cm');
        setLocalizationPaint('Gemäldegalerie, Berlin');
    }

    const paintActive2 = () => {
        setPaintActive1(false);
        setPaintActive2(true);
        setPaintActive3(false);
        setPaintActive4(false);
        setPaintActive5(false);
        setNamePaint('Judite e Holofernes');
        setDataPaint('1599');
        setTechniquePaint('Pintura a óleo');
        setDimensionPaint('144 x 195 cm');
        setLocalizationPaint('Galeria Nacional de Arte Antiga, Roma');
    }

    const paintActive3 = () => {
        setPaintActive1(false);
        setPaintActive2(false);
        setPaintActive3(true);
        setPaintActive4(false);
        setPaintActive5(false);
        setNamePaint('Medusa');
        setDataPaint('1597 d.C.');
        setTechniquePaint('Óleo sobre tela');
        setDimensionPaint('60 x 55 cm');
        setLocalizationPaint('Galleria degli Uffizi, Florença');
    }

    const paintActive4 = () => {
        setPaintActive1(false);
        setPaintActive2(false);
        setPaintActive3(false);
        setPaintActive4(true);
        setPaintActive5(false);
        setNamePaint('O Sepultamento de Cristo - Deposizione');
        setDataPaint('1603-4');
        setTechniquePaint('Óleo sobre tela');
        setDimensionPaint('300 x 203 cm');
        setLocalizationPaint('Pinacoteca Vaticana, Roma');
    }

    const paintActive5 = () => {
        setPaintActive1(false);
        setPaintActive2(false);
        setPaintActive3(false);
        setPaintActive4(false);
        setPaintActive5(true);
        setNamePaint('A Captura de Cristo / O Beijo de Judas');
        setDataPaint('1602');
        setTechniquePaint('Óleo sobre tela');
        setDimensionPaint('133.5 x 169.5 cm');
        setLocalizationPaint('Galeria Nacional da Irlanda, Dublin');
    }

    return (
        <>
            <div className='frame frame-up'>
                <h3>
                    Ministério do Turismo e musArt apresentam CARAVAGGIO
                </h3>
            </div>
            <section className="paint-container">
                <img id="paint-1" className={`paint panel ${isPaintActive1 ? "active" : ""}`} onClick={paintActive1}></img>
                <img id="paint-2" className={`paint panel ${isPaintActive2 ? "active" : ""}`} onClick={paintActive2}></img>
                <img id="paint-3" className={`paint panel ${isPaintActive3 ? "active" : ""}`} onClick={paintActive3}></img>
                <img id="paint-4" className={`paint panel ${isPaintActive4 ? "active" : ""}`} onClick={paintActive4}></img>
                <img id="paint-5" className={`paint panel ${isPaintActive5 ? "active" : ""}`} onClick={paintActive5}></img>
            </section>
            <div className='frame frame-bottom'>
                <h4>{namePaint}</h4>
                <div className="paint-description">
                    <div className="paint-description-text">
                        <div>
                            <span>Data: </span><span>{dataPaint}</span>
                        </div>
                        <div>
                            <span>Técnica: </span> <span>{techniquePaint}</span>
                        </div>
                    </div>
                    <div className="paint-description-text">
                        <div>
                            <span>Dimensão: </span> <span>{dimensionPaint}</span>
                        </div>
                        <div>
                            <span>Localização: </span><span>{localizationPaint}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Painting;