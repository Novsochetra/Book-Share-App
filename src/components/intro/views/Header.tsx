import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import BackgroundHeader from "../../../assets/images/background-header";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <BackgroundHeader
        width={SCREEN_WIDTH}
        height={300}
        style={styles.imageContainer}
      />
      <Text style={styles.titleText}>Welcome</Text>
      <Text style={styles.titleText}>Choose the topics</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    transform: [{ scaleX: 1.1 }],
    top: -100,
    position: "absolute",
  },

  headerWrapper: {
    height: 200,
    justifyContent: "center",
  },

  titleText: {
    marginLeft: 15,
    fontSize: 22,
    color: "#fff",
  },
});
