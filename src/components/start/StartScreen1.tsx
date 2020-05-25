import React, { ReactElement, useState, useRef, LegacyRef } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SvgXml } from "react-native-svg";
import Colors from "../../utils/Colors";
import Start1 from "../../assets/images/start-1.svg";
import Start2 from "../../assets/images/start-2.svg";
import Start3 from "../../assets/images/start-3.svg";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const IMAGE_WIDTH = SCREEN_WIDTH - 100 * 2;
const IMAGE_HEIGHT = 300;

export const StartScreen1 = (): ReactElement => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<any>(null);

  return (
    <View style={styles.container}>
      <ScrollView
        decelerationRate="fast"
        snapToInterval={SCREEN_WIDTH}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        onMomentumScrollEnd={({
          nativeEvent: {
            contentOffset: { x },
          },
        }) => {
          setActiveIndex(x / SCREEN_WIDTH);
        }}
        horizontal
        pagingEnabled={true}
      >
        <View style={styles.itemContainer}>
          <Start1 width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
          <View style={styles.textWrapper}>
            <Text style={styles.text}>
              share your favourite books with your family And Friends
            </Text>
          </View>
        </View>

        <View style={styles.itemContainer}>
          <Start2 width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
          <View style={styles.textWrapper}>
            <Text style={styles.text}>
              discovery 20 million books shelved online
            </Text>
          </View>
        </View>

        <View style={styles.itemContainer}>
          <Start3 width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Buy and Sell books With Us</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.dotContainer}>
        <TouchableOpacity
          onPress={() => {
            setActiveIndex(0);
            scrollViewRef?.current?.scrollTo({
              x: 0,
              y: 0,
              animated: true,
            });
          }}
          style={[
            styles.dot,
            { backgroundColor: activeIndex === 0 ? Colors.primary : "#fff" },
          ]}
        ></TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveIndex(1);
            scrollViewRef?.current?.scrollTo({
              x: SCREEN_WIDTH * 1,
              y: 0,
              animated: true,
            });
          }}
          style={[
            styles.dot,
            { backgroundColor: activeIndex === 1 ? Colors.primary : "#fff" },
          ]}
        ></TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveIndex(2);
            scrollViewRef?.current?.scrollTo({
              x: SCREEN_WIDTH * 2,
              y: 0,
              animated: true,
            });
          }}
          style={[
            styles.dot,
            { backgroundColor: activeIndex === 2 ? Colors.primary : "#fff" },
          ]}
        ></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  itemContainer: {
    flex: 1,
    width: SCREEN_WIDTH,
    alignItems: "center",
    top: 200,
  },

  text: {
    fontSize: 20,
    textAlign: "center",
  },

  textWrapper: {
    width: SCREEN_WIDTH - 80 * 2,
  },

  dotContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    justifyContent: "center",
    height: 20,
  },

  dot: {
    width: 15,
    height: 15,
    backgroundColor: "#fff",
    borderRadius: 15 / 2,
    borderColor: Colors.primary,
    borderWidth: 1,
    top: (SCREEN_HEIGHT / 3) * 2,
    margin: 5,
  },
});
