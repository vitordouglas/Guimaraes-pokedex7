import React from "react";
import { useRequestData } from "../../components/hooks/useRequestData";
import { StyledHome } from "./style";
import { BASE_URL } from "../../components/url/urlBase";
import { CardPokemon } from "../../components/cardPokemon/cardPokemon";

export const Home = () => {
  const [pokemonLists, loading, error] = useRequestData(BASE_URL);

  console.log(pokemonLists);

const cardPokemon =
    pokemonLists &&
    pokemonLists.map((pokemon) => {
      return (<CardPokemon/>
       
      );
    }); 

  return (
    <StyledHome>
      <h1>Home Page</h1>
      {cardPokemon}
    </StyledHome>
  );
};
