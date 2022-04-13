import React, { useEffect, useState } from "react";
import { useRequestData } from "../../components/hooks/useRequestData";
import { StyledHome } from "./style";
import { BASE_URL } from "../../components/url/urlBase";
import { CardPokemon } from "../../components/cardPokemon/cardPokemon";
import axios from "axios";

export const Home = () => {


  const [pokemons, setPokemons] = useRequestData([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(()=>{

    setLoading(true)
    const fetch = async () =>{
      try { 
        const {data} = await 
        axios
        .get(BASE_URL)

        for (let pokemon of data){
          const pokemonDetails = await (axios
          .get(pokemon.url)).data.results
          pokemon = pokemonDetails
        }
        setPokemons(data.results)
      } catch (err) {
        setError(err)   
      }finally{
        setLoading(false)
      }
    }
    fetch()

  },[])

  console.log(pokemons)
  return (
    <StyledHome>
      <h1>Home Page</h1>
        </StyledHome>
  );
};
