import React from "react";
import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import { colors, parameters } from "../global/styles";
import { Icon, withBadge } from "@rneui/base";
export default function HomeHeader() {

  const BadgeIcon = withBadge(3)(Icon);

  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Icon
          type="material-community"
          name="menu"
          color={colors.cardbackground}
          size={32}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Xpress Food</Text>
      </View>
      <View style={styles.cart}>
        <BadgeIcon
          type="material-community"
          name="cart"
          size={35}
          color={colors.cardbackground}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    justifyContent:"space-between"
  },
  headerContent: {
    alignItems: "center",
    justifyContent: "center",
    
    marginLeft: 15,
    marginTop: 10,
  },
  headerText: {
    color: colors.cardbackground,
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    //marginHorizontal: 70,
  },
  textContainer: { alignItems: "center", justifyContent: "center" },
  cart:{
    marginTop:20,
    marginRight:20
  },
});
