import React, {useState, useEffect, useCallback} from "react";
import { StyleSheet } from "react-native";
import {useFocusEffect}from "@react-navigation/native"
//Component
import useAuth from "../../hooks/useAuth"
import PokemonList from "../components/PokemonList"
import NoLogged from "../auth/NoLogged";
// Servicio 
import {getPokemonFavorite} from "../../service/favoriteService"
import { pokemonDetail} from "../../service/apiPokemon";

const Favorite = () => {
  const [listPokemonFavorite, setListPokemonFavorite] = useState([])
 const {auth} = useAuth();
 useFocusEffect(
  useCallback(() => {
    if(auth){
      (async()=>{
        try {
          const response = await getPokemonFavorite();
          const pokemonArray =[];
          for await (let id of response){
            const pokemonDetails = await pokemonDetail(id);
            pokemonArray.push({
              id:pokemonDetails.id,
              name:pokemonDetails.name,
              type:pokemonDetails.types[0].type.name,
              order:pokemonDetails.order,
              imagen:pokemonDetails.sprites.other['official-artwork'].front_default
            })
          }
          setListPokemonFavorite(pokemonArray)
        } catch (error) {
          throw error
        }
      })()
    }
 }, [auth])
 )

 

  return !auth ? (
      <NoLogged/>
  ): (<PokemonList pokemons={listPokemonFavorite}/>);
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default Favorite;
