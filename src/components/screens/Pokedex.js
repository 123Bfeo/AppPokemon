import React, {useState, useEffect} from 'react'
import { StyleSheet,  View } from 'react-native';
import {getPokemonsApi, getPokemonDetailApi} from '../../service/apiPokemon'
import PokemonList from '../components/PokemonList';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])
  //guarda la Url para siguiente llamdo de Pokemon una ves haga el primer llamdo 
  const [nextUrl, setNextUrl] = useState (null)
 
  useEffect(() => {
      (async()=>{
        await loadPokemon();
      })()
  },[])
  

  const loadPokemon =async ()=>{
    try {

      const response = await getPokemonsApi(nextUrl);
      //se guarda la Url del siguiente llamado
      setNextUrl(response.next)
      //accediendo a los datos de cada pokemon a traves de de un for asincrono
      const pokemonArray =[];
      
      for await (let itemsPokemon of response.results){
        const pokemonDetail = await getPokemonDetailApi(itemsPokemon.url);
        pokemonArray.push({
          id:pokemonDetail.id,
          name:pokemonDetail.name,
          type:pokemonDetail.types[0].type.name,
          order:pokemonDetail.order,
          imagen:pokemonDetail.sprites.other['official-artwork'].front_default
        })
      }
      setPokemons([...pokemons, ...pokemonArray])
     
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
        <PokemonList pokemons={pokemons} loadPokemon={loadPokemon} nextUrl={nextUrl}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default Pokedex