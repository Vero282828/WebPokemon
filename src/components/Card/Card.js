import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

function Card({pokemon}){
    
    return(
        <div className= "Card" onClicked="/detailpoke">
            <div className="Card_img">
                <img src={pokemon.sprites.front_default} alt=""></img>
            </div>
            <div className="Card_name">
                <Link to='/detailpoke' className="Card_link"> {pokemon.name}</Link>
               
            </div>
            <div className="Card_owned">
                <h4>Owned: {pokemon.slot} </h4>
            </div>
        </div>
    )
}

export default Card;