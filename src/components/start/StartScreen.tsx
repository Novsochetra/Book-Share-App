import React, { ReactElement, useMemo, useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Animated, {
  useCode,
  debug,
  block,
  cond,
  eq,
} from "react-native-reanimated";
import Colors from "../../utils/Colors";
import Start1 from "../../assets/images/start-1.svg";
import Start2 from "../../assets/images/start-2.svg";
import Start3 from "../../assets/images/start-3.svg";
import { Swiper } from "../../common/Swiper";
import { StackNavigationProp } from "@react-navigation/stack";
import { IRootStackParamList } from "../../../App";

const { Value } = Animated;

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

export const StartScreen = ({ navigation }: StartScreenProps): ReactElement => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View style={styles.container}>
      <Swiper
        items={IMAGES}
        onChangeIndex={(index) => {
          setActiveIndex(index);
        }}
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
                {i === 2 && (
                  <TouchableOpacity
                    style={styles.btnStarted}
                    onPress={() => navigation.navigate("Intro")}
                  >
                    <Text style={styles.btnStartedLabel}>Get Started</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          );
        })}
      </Swiper>

      {/* TODO: need to fix the problem of dot when slide from (right to left). the dot index doesn't stay at correct position */}

      {/* <View style={styles.dotContainer}>
        <TouchableOpacity
          onPress={() => {}}
          style={[
            styles.dot,
            {
              backgroundColor:
                activeIndex === 0 || activeIndex === -0
                  ? Colors.primary
                  : "#fff",
            },
          ]}
        ></TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={[
            styles.dot,
            {
              backgroundColor:
                activeIndex === 1 || activeIndex === -1
                  ? Colors.primary
                  : "#fff",
            },
          ]}
        ></TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={[
            styles.dot,
            {
              backgroundColor:
                activeIndex === 2 || activeIndex === -2
                  ? Colors.primary
                  : "#fff",
            },
          ]}
        ></TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },

  btnStarted: {
    backgroundColor: Colors.primary,
    width: 180,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 10,
  },

  btnStartedLabel: {
    color: "#fff",
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
    justifyContent: "center",
    alignItems: "center",
  },
});

type StartScreenProps = {
  navigation: StackNavigationProp<IRootStackParamList>;
};
