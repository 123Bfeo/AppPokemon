import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { capitalize } from "lodash";
import getColor from "../../util/getColor";

export default function Stat({ stats }) {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map((item, index) => {
        return (
          <View key={index} style={styles.block}>
            <View style={styles.blockStatsTitle}>
              <Text style={styles.statsName}>{capitalize(item.stat.name)}</Text>
            </View>
            <View style={styles.blockStatsRange}>
              <Text style={styles.statsRange}>{item.base_stat}</Text>
              <View style={styles.bgBar}>
                <View style={{...styles.progressBar, width:item.base_stat,  backgroundColor: item.base_stat > 50 ?"#A8B820" :"red" }} />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom:50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockStatsTitle: {
    width: "30%",
  },
  statsName: {
    fontSize: 12,
    color: "#6b6b6b",
  },
  blockStatsRange: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  statsRange: {
    width: "12%",
    fontSize: 12,
  },
  bgBar:{
    backgroundColor:"#dedede",
    width:"88%",
    height:5,
    borderRadius:20,
    overflow:"hidden"
  },
  progressBar:{
    //width:"100%",
    height:5,
    borderRadius:20,
  }
});
