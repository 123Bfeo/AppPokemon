import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
export default function MostLiked({ id }) {
  const handlerFavorite = () => {
    console.log("add pokemon", id);
  };
  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={handlerFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
