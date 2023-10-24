import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import {getPokemonFavorite} from "../../service/favoriteService"
const Favorite = () => {
  return (
    <View style={styles.container}>
      <Text>Favorite</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default Favorite;
