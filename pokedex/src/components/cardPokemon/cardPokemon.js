import React from "react";
import "./style.css";
import {useNavigate } from "react-router-dom";
import { goToPokedex } from "../../routes/Coordinator";
import { goToPokemonDetails } from "../../routes/Coordinator";


export const CardPokemon = (props) => {

  const navigate = useNavigate()
  
  return (
    <div class="card me-2 mb-2" style={{width: "18rem"}}>
      <img src={props.pokemonList.sprites.front_default} class="card-img-top" alt="Imagem Pokemon" />
      <div class="card-body">
        <h5 class="card-title">{props.pokemonList.name}</h5>
      </div>
            <div class="card-body">
        <button class="btn btn-primary me-3" onClick={()=> goToPokedex(navigate)}>
          Ir à  Pokedex
        </button>
        <button class="btn btn-primary" onClick={()=> goToPokemonDetails(navigate)}>
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};
