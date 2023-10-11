import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import getColor from "../../util/getColor";
// uso de modulo para que la primera letra sea mayuscula
import { capitalize } from "lodash";
//Para hacer la navegacion a los detalles del component importamos useNavigation
import {useNavigation} from '@react-navigation/native'


export default function PokemonCard({ item }) {
  //capturamos la ejecucion
  const navigation = useNavigation();
  const pokemonColor = getColor(item.type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bg };

  const goToPokemon = () => {
    //permitimos la navegacion hacia la screens Pokemon definida en PokedexNavigation
    // y enviamos como parametro el Id del pokemon seleccionado
    navigation.navigate("Pokemon", {id:item.id})
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>#{`${item.order}`.padStart(3, 0)}</Text>
            <Text>{capitalize(item.name)}</Text>
            <Image source={{ uri: item.imagen }} style={styles.img} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bg: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  img: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
});
