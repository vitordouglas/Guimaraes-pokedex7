import React, { useState, useEffect } from "react";
import { StyledHome } from "./style";
import { BASE_URL } from "../../components/url/urlBase";
import { CardPokemon } from "../../components/cardPokemon/cardPokemon";
import axios from "axios";
import { Spinner } from "../../components/spinner/Spinner";

export const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(BASE_URL);
        

        for (let pokemon of data.results) {
          const pokemonDetails = (await axios.get(`${pokemon.url}`)).data;
                    pokemon = pokemonDetails;
          /* console.log("Detalhes dos Pokemons", pokemon) */
        }
        setPokemonList(data.results);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  const cardPokemon = 
  pokemonList && pokemonList.map((pokemon)=>{
    return(
      <CardPokemon/>
    )
  })
  console.log("lista de pokemons", pokemonList);

  return (
    <StyledHome>
      {loading && <Spinner/>}
      {!loading && error && <h1>Houve Um Erro na Requisição</h1>}
      {!loading && pokemonList && pokemonList.length > 0 && cardPokemon}
      {!loading && pokemonList && pokemonList.length === 0 && <h1> Não Há Pokemons</h1>}
    </StyledHome> 
  );
};
