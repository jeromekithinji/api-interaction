import React, { useState, useEffect } from "react";
import PokeBall from "../PokeBall/PokeBall";
import "./Pokemon.scss";

const Pokemon = ({ heading }) => {
    // defining state with "empty" object to begin with
    const [pokemon, setPokemon] = useState({
        types: [{ type: { name: "" } }],
        abilities: [{ ability: { name: "" } }],
        sprites: { back_default: "" },
    });

    // loading input in search value, randomly generate one by default
    const [searchQuery, setSearchQuery] = useState(
        Math.floor(Math.random() * (151 - 1)) + 1
    );

    const handleInput = (event) =>
        setSearchQuery(event.target.value.toLowerCase());

    // fetching data from pokemon api in json response if found
    const getPokemon = (event) => {
        if (event) event.preventDefault();

        try {
            if (searchQuery) {
                fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`)
                    .then((response) => response.json())
                    .then((jsonResponse) => {
                        setPokemon(jsonResponse);
                    })
                    .catch((error) => console.log(error));
            }
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        getPokemon();
    });

    const capitaliseFirstLetter = (str) =>
        str.charAt(0).toUpperCase() + str.slice(1);

    const convertHectogramsToPounds = (weight) => {
        if (!isNaN(weight)) {
            return (weight * 0.220462).toFixed(2);
        }
    };

    // return name, type or image if found from api
    const getPokemonName = (name) => (name ? capitaliseFirstLetter(name) : "");
    const getPokemonType = (type) =>
        type ? "Type: " + capitaliseFirstLetter(type) : "";
    const getPokemonSpecies = (species) =>
        species ? "Species: " + capitaliseFirstLetter(species) : "";
    const getPokemonImage = (img) => (img ? img : "");

    return (
        <section className="pokemon">
            <h2 className="pokemon__heading">{heading}</h2>
            <PokeBall />
            <form className="pokemon__form" onSubmit={getPokemon}>
                <input
                    type="text"
                    className="pokemon_search-text"
                    onInput={handleInput}
                    placeholder="Search for pokemon..."
                />
                <input
                    type="submit"
                    className="pokemon_search-btn"
                    value="Search"
                />
            </form>

            <div className="pokemon-card">
                <div className="header">
                    <h2>{getPokemonName(pokemon.name)}</h2>
                    {/* <div>{getPokemonHp(pokemon.hp)}HP</div> */}
                </div>
                <div className="pokemon-image">
                    <img
                        src={getPokemonImage(pokemon.sprites.front_default)}
                        alt={getPokemonName(pokemon.name)}
                    />
                    <img
                        src={getPokemonImage(pokemon.sprites.back_default)}
                        alt={getPokemonName(pokemon.name)}
                    />
                </div>
                <div className="pokemon-info">
                    <p>
                        {getPokemonSpecies(pokemon.abilities[0].ability.name)}
                    </p>
                </div>
                <div className="main-content">
                    <div className="national-id">
                        <h3>{pokemon.id}</h3>
                        <p>National ID</p>
                    </div>
                    <div className="pokemon-abilities">
                        <div>{getPokemonType(pokemon.types[0].type.name)}</div>
                        <div>
                            Weight: {convertHectogramsToPounds(pokemon.weight)}{" "}
                            lbs.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pokemon;
