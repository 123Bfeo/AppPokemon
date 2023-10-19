import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { pokemonDetail } from "../../service/apiPokemon";
import Header from "../componentDetail/Header";
import Type from "../componentDetail/Type";
import Stat from "../componentDetail/Stat";
import MostLike from "../componentDetail/MostLike";
import useAuth from "../../hooks/useAuth";

//Extrahemos como propiedades que estan disponibles por la navegacion route, navigation
export default function PokemonDetail({ route, navigation }) {
  const [dPokemon, setDpokemon] = useState(null);
  let param = route.params;
  const { auth } = useAuth();
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

  // useEffect que permitira personalizar la flecha regresar
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        if (dPokemon === null) {
          console.log("estoy aqui");
        } else {
          return auth ? <MostLike id={dPokemon.id} /> : null;
        }
      },
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, param, dPokemon]);

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
