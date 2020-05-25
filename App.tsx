import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StartScreen } from "./src/components/start/StartScreen";

export default function App() {
  return (
    // <View style={styles.container}>
    <StartScreen />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
