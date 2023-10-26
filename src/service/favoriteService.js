//Funciones encargadas del trabajo con async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../util/variables";


//Function para obtener los pokemon de favoritos
export async function getPokemonFavorite (){
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        return JSON.parse(response || [])
    } catch (error) {
        throw error;
    }
}
//Function para add pokemon a favoritos
export async function addPokemonFavorite(id) {
  try {
    const favorites = await getPokemonFavorite()
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// function que comprueba si un pokemon ya esta agregado en la lista de favorites

export async function isPokemonFavorite(id){
  try {
    const response = await getPokemonFavorite()
    // include resibe un array y busca el parametro, devuelve un boolean
    return includes(response, id)
  } catch (error) {
    throw error
  }
}

//Function para eliminar de la lista de favoritos
export async function removePokemonFavorite (id){
    try {
      const favorites = await getPokemonFavorite();
      const newFavorites = pull(favorites, id);
      await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites))
    } catch (error) {
      throw error      
    }
}