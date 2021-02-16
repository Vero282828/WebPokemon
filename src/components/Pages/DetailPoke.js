import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './DetailPoke.css';

function DetailPoke(){
    const [pokedex,setPokedex] = useState([])
    const [wildpokemon, setWildPokemon] = useState([])
    const[counter, setCounter] = useState([])

    useEffect(() => {
        encounterWildPokemon()
    }, [])
    
    const pokeId = () => {
        const min = Math.ceil(1)
        const max = Math.floor(151)
        return Math.floor(Math.random() * (max - min + 1)) + min 
    }

    const encounterWildPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/' + pokeId())
        .then( response => {
            setWildPokemon(response.data);
        })
    }

    const catchPokemon = (pokemon) => {
        const  successWith50PercentChance = () => Math.random() <0.5 && setCounter(p => p+1);
        setPokedex(state => {
            const monExists = (state.filter(p => pokemon.id == p.id).length > 0);
            

            if(!monExists){
                state = [...state,pokemon]
                state.sort(function(a, b){
                    return a.id - b.id
                })
            }
            return state
        })
        encounterWildPokemon()
    }

    const releasePokemon = id =>{
        setPokedex(state => state.filter(p => p.id != id))
    }


    return(
        <div className="app-wrapper">
            <section className="wild-pokemon">
                <h2>Detail pokemon</h2>
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + wildpokemon.id + ".png"} className="sprite"></img>
                <h3>{wildpokemon.name}</h3>
                <button className="catch-btn" onClick={() => catchPokemon(wildpokemon)}>CATCH</button>
            </section>

            <section className="pokedex">
                <h2>My Pokemon List</h2>
                <div className="pokedex-list">
                    {pokedex.map(pokemon => (
                        <div className="pokemon" key={pokemon.id}>
                            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png"} className="sprite"></img>
                            <h3 className="pokemon-name">{pokemon.name}</h3>
                            <button className="remove" onClick={() => releasePokemon(pokemon.id)}>&times;</button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )

}

export default DetailPoke;