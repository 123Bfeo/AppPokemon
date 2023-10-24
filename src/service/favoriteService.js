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