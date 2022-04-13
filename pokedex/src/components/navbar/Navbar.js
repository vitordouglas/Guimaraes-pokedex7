import React from "react";
import './style.css'
import {goToHome} from "../../routes/Coordinator"
import { goToPokedex } from "../../routes/Coordinator";
import { goToPokemonDetails } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/Coordinator";

export const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div class="navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Projeto Pokedex</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/"> Voltar a Página Inicial</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pokedex">Ver Minha Pokedex</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pokedex/details">Detalhes do Pokemon</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={()=>goBack(navigate)}>Voltar</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    </div>
    
  );
};
