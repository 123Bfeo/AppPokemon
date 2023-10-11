import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemons, loadPokemon, nextUrl }) {
  const numColumns = 2;
  const loadMore = () => {
    loadPokemon();
  };
  return (
    <FlatList
      data={pokemons}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard item={item}/>}
      showsVerticalScrollIndicator={false}
      numColumns={numColumns}
      // valido si nextUrl tiene valor para renderizar
      onEndReached={nextUrl && loadMore}
      onEndReachedThreshold={0.1}
      //me permite renderizar un componente para simular que esta cargando mas elementos
      ListFooterComponent={
        //Por solucionar problema de renderizacion
        <ActivityIndicator
          size="large"
          style={styles.spinner}
          color="#A8B820"
        />
        
      }
    />
  );
}

const styles = StyleSheet.create({
  spinner: {
    marginTop: 20,
    marginBottom: 40,
  },
});
