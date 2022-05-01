import { Icon } from "@rneui/base";
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colors, parameters } from "../global/styles";

export default function Header({ title, type ,navigation}) {
  return (
    <View style={styles.Header}>
      <View style={styles.icon}>
        <Icon
          type="material-community"
          name={type}
          color={colors.headerText}
          size={28}
          onPress={() => {navigation.goBack()}}
        />
      </View>
      <View>
        <Text style={styles.headerText}> {title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    flexDirection: "row",
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },
  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: "bold",
    position: "relative",
    top: 30,
    left: 20,
  },
  icon: {
    position: "relative",
    top: 30,
    left: 10,
  },
});
