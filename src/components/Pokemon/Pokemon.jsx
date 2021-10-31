import { useState } from 'react';
import './Pokemon.scss';



const Pokemon = () => {
    const [pokemon, setPokemon] = useState({});

    const setPokemonName = () => {
        const username = document.querySelector(".pokemonName").value;
        console.log(username);
        return getPokemon(username);
    }

    // document.getElementById("submitName").addEventListener("click", setPokemonName());

    const getPokemon = (username) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${username}`)
            .then(response => response.json())
            .then(jsonResponse => setPokemon(jsonResponse))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <input type="text" className="pokemonName" />
            <button id="submitName" onClick={setPokemonName}>Get Pokemon details</button>
            <p>{pokemon ? pokemon.id : ""}</p>
            <p>{pokemon ? pokemon.name : ""}</p>
            <p>{pokemon ? pokemon.height: ""}</p> 
        </div>
    )
}

export default Pokemon

