import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { colors } from "./src/global/styles";
import RootNavigator from "./src/Navigation/RootNavigator";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="=light-content" backgroundColor={colors.statusbar} />
      {/* <SignInScreen/> */}
      {/* <SignInWelcomeScreen/> */}
      <RootNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
