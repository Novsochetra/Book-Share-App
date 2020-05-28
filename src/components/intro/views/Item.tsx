import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Dimensions,
} from "react-native";
import { Feather as FeatherIcon } from "@expo/vector-icons";
import { TapResizeHandler } from "../../../common/TapResizeHandler";

type ItemProps = {
  source: ImageSourcePropType;
  title: String;
};
const SCREEN_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SCREEN_WIDTH / 3;

export const Item = ({ source, title }: ItemProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => setChecked((prevState) => !prevState)}
    >
      <View style={styles.imageWrapper}>
        <Image source={source} style={styles.image} />
      </View>
      <Text style={styles.imageLabel}>{title}</Text>
      {checked && (
        <View style={styles.overlay}>
          <FeatherIcon name="check" size={50} color="#fff" />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 150,
    width: ITEM_WIDTH,

    justifyContent: "center",
    alignItems: "center",
  },

  overlay: {
    top: 5,
    borderRadius: 50,
    position: "absolute",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 110, 161, 0.4)",
  },

  imageWrapper: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  imageLabel: {
    fontSize: 16,
    marginVertical: 10,
  },
});
