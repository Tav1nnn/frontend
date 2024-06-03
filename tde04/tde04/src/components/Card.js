import React, { useState } from "react";
import './Card.css';

const Card = ({titulo, texto, imagem}) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div 
        className={`card ${isClicked ? 'clicked' : ''}`}
        onClick={handleClick}>
        
            <img src={imagem} alt="imagem" className="img"/>
            <h2 className="titulo">{titulo}</h2>
            <p className="texto">{texto}</p>

        </div>
    )
}

export default Card;