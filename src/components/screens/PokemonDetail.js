import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { pokemonDetail } from "../../service/apiPokemon";
import Header from "../componentDetail/Header";
import Type from "../componentDetail/Type";
import Stat from "../componentDetail/Stat";
//Extrahemos como propiedades que estan disponibles por la navegacion route, navigation
export default function PokemonDetail({ route, navigation }) {
  const [dPokemon, setDpokemon] = useState(null);
  let param = route.params;
  // useEffect que permitira personalizar la flecha regresar
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Icon name="heart" color="#fff" size={20} style={{marginRight:20}}/>,
      headerLeft: () => (
        <Icon name="arrow-left" color="#fff" size={20} style={{marginLeft:20}} onPress={navigation.goBack} />
      ),
    });
  }, [navigation, param]);

  useEffect(() => {
    (async () => {
      try {
        const response = await pokemonDetail(param.id);
        setDpokemon(response);
      } catch (error) {
        //en caso de error regresare a la lista
        navigation.goBack();
      }
    })();
  }, [param]);

  if (!dPokemon) return null;

  return (
    <ScrollView>
      <Header
        name={dPokemon.name}
        type={dPokemon.types[0].type.name}
        order={dPokemon.order}
        image={dPokemon.sprites.other["official-artwork"].front_default}
      />
      <Type types={dPokemon.types} />
      <Stat stats={dPokemon.stats} />
    </ScrollView>
  );
}
