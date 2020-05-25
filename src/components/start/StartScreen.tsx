import React, { ReactElement } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Animated from "react-native-reanimated";
import Colors from "../../utils/Colors";
import Start1 from "../../assets/images/start-1.svg";
import Start2 from "../../assets/images/start-2.svg";
import Start3 from "../../assets/images/start-3.svg";
import { Swiper } from "../../common/Swiper";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const IMAGE_WIDTH = SCREEN_WIDTH - 100 * 2;
const IMAGE_HEIGHT = 300;

const IMAGES = [
  {
    source: Start1,
    text: "Share your favourite books with your family And Friends",
  },
  { source: Start2, text: "discovery 20 million books shelved online" },
  { source: Start3, text: "Buy and sell books with us" },
];

export const StartScreen = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Swiper
        items={IMAGES}
        onChangeIndex={(index) => console.log("Index: ", index)}
      >
        {IMAGES.map(({ source: Item, text }, i) => {
          return (
            <View
              style={{
                height: 200,
                width: SCREEN_WIDTH,
                alignItems: "center",
              }}
              key={i}
            >
              <Item width={IMAGE_WIDTH} />
              <View style={styles.textWrapper}>
                <Text style={styles.text}>{text}</Text>
              </View>
            </View>
          );
        })}
      </Swiper>

      <View style={styles.dotContainer}>
        <TouchableOpacity
          onPress={() => {}}
          style={[styles.dot]}
        ></TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={[styles.dot]}
        ></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },

  dotContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    justifyContent: "center",
    height: 20,
    top: 450,
    width: SCREEN_WIDTH,
  },

  dot: {
    width: 15,
    height: 15,
    backgroundColor: "#fff",
    borderRadius: 15 / 2,
    borderColor: Colors.primary,
    borderWidth: 1,
    margin: 5,
  },

  text: {
    fontSize: 20,
    textAlign: "center",
  },

  textWrapper: {
    width: SCREEN_WIDTH - 80 * 2,
    marginTop: 10,
  },
});
