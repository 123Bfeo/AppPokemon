import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
// importacion de funciones definidas para el trabajo de Async-Storage
import {addPokemonFavorite} from "../../service/favoriteService"
export default function MostLiked({ id }) {
  const addFavorite = async () => {
    await addPokemonFavorite(id)
  };
 
  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
