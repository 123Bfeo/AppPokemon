import React, { useState, useEffect } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// importacion de funciones definidas para el trabajo de Async-Storage
import {
  addPokemonFavorite,
  isPokemonFavorite,
  removePokemonFavorite
} from "../../service/favoriteService";
export default function MostLiked({ id }) {
  //interuptor
  const [reload, setReload] = useState(false);
  //Estado de si existe ya favorite
  const [isFavorite, setIsFavorite] = useState(undefined);
  //condicion para el cambio del icono de favorito
  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  //
  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavorite(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, reload]);

  const reloadFavorite = () => {
    setReload(!reload);
  };

  const addFavorite = async () => {
    try {
      await addPokemonFavorite(id);
      reloadFavorite();
    } catch (error) {
      throw error;
    }
  };

  //Function para remover de favorites
  const removeFavorite = async() => {
   try {
     await removePokemonFavorite(id)
     reloadFavorite();
   } catch (error) {
    throw error
   }
  };

  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
