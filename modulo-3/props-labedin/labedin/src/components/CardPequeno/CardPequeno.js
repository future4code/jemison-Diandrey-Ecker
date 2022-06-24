import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
                <img src= {props.imagem} />
            <div className='email'>
                <p> {props.email}</p>
            </div>
            <div className='endereco'>
                <p> {props.endereco}</p>
            </div>
        </div>
    )
}

export default CardPequeno;