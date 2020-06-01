import React, { isValidElement, useMemo, useState } from "react";
import {
  Dimensions,
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { Feather as FeatherIcon } from "@expo/vector-icons";
import Animated, {
  diffClamp,
  add,
  Extrapolate,
  interpolate,
} from "react-native-reanimated";
import { usePanGestureHandler, withDecay } from "react-native-redash";
import BackgroundHeader from "../../../assets/images/background-header";
import { PanGestureHandler } from "react-native-gesture-handler";
import { useSafeArea } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const BOOK_COVER_MARGIN = 5;
const BOOK_COVER_WIDTH = SCREEN_WIDTH / 5 - BOOK_COVER_MARGIN * 2;
const BOOK_COVER_CONTAINER_WIDTH = BOOK_COVER_WIDTH + BOOK_COVER_MARGIN * 2;

const { clockRunning, startClock, stopClock, eq, cond, block } = Animated;

type HeaderSectionProps = {
  books: Array<{ source: any; name: string }>;
  searchText: string;
  onChangeSearch: (text: string) => void;
};

export const HeaderSection = ({
  books,
  searchText,
  onChangeSearch,
}: HeaderSectionProps) => {
  const {
    gestureHandler,
    state,
    translation,
    velocity,
  } = usePanGestureHandler();

  const { top } = useSafeArea();

  const minDiffClamp = useMemo(
    () => -(BOOK_COVER_WIDTH + BOOK_COVER_MARGIN * 2) * (books.length - 5),
    [books]
  );

  const maxDiffClampValue = 0;

  const x = withDecay({
    state,
    value: translation.x,
    velocity: velocity.x,
    deceleration: 0.997,
  });

  const translateX = diffClamp(x, minDiffClamp, maxDiffClampValue);
  const visibleCards = 5;

  return (
    <PanGestureHandler {...gestureHandler}>
      <Animated.View style={styles.headerWrapper}>
        <BackgroundHeader
          width={SCREEN_WIDTH}
          height={300}
          style={styles.imageContainer}
        />

        <View
          style={[
            styles.searchWrapper,
            {
              paddingHorizontal: 15,
            },
          ]}
        >
          <TextInput
            onChangeText={onChangeSearch}
            value={searchText}
            style={styles.searchInput}
            placeholder="Search Books, Authors"
            clearButtonMode="always"
          />
          <FeatherIcon
            name="search"
            color="#000"
            size={20}
            style={styles.iconSearch}
          />
          <FeatherIcon
            name="sliders"
            color="#000"
            size={20}
            style={styles.filterIcon}
          />
        </View>

        <Text style={styles.title}>Our Top Picks</Text>

        <Animated.View
          style={{ flexDirection: "row", transform: [{ translateX }] }}
        >
          {books.map((item, index) => {
            const isTop = 0;
            const isAppearring = BOOK_COVER_CONTAINER_WIDTH * visibleCards;
            const isDisappearing = -BOOK_COVER_CONTAINER_WIDTH;
            const isCenter =
              (BOOK_COVER_CONTAINER_WIDTH * (visibleCards - 1)) / 2;
            const isBottom = BOOK_COVER_CONTAINER_WIDTH * (visibleCards - 1);

            const positionX = add(
              translateX,
              index * BOOK_COVER_CONTAINER_WIDTH
            );

            const scale = interpolate(positionX, {
              inputRange: [
                isDisappearing,
                isTop,
                isCenter,
                isBottom,
                isAppearring,
              ],
              outputRange: [0.5, 0.7, 1, 0.7, 0.7],
              extrapolate: Extrapolate.CLAMP,
            });

            return (
              <Animated.View
                key={`book ${index}`}
                style={[styles.bookCoverWrapper, { transform: [{ scale }] }]}
              >
                <Image source={item.source} style={styles.bookCover} />
                <Text style={styles.bookCoverLabel}>{item.name}</Text>
              </Animated.View>
            );
          })}
        </Animated.View>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    transform: [{ scaleX: 1.1 }, { scaleY: 1.2 }],
    top: -10,
    position: "absolute",
  },

  headerWrapper: {
    height: 310,
    justifyContent: "center",
  },

  searchWrapper: {
    height: 40,
  },

  searchInput: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#5ABD8C",
    borderRadius: 20,
    paddingVertical: 5,
    paddingLeft: 40,
    paddingRight: 10,
    height: 40,
  },

  iconSearch: {
    position: "absolute",
    top: 10,
    left: 25,
  },

  filterIcon: {
    position: "absolute",
    top: 10,
    right: 25,
  },

  title: {
    marginVertical: 10,
    marginLeft: 15,
    fontSize: 24,
    color: "#fff",
  },

  bookCoverWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },

  bookCover: {
    width: BOOK_COVER_WIDTH,
    height: 100,
    borderRadius: 10,
    margin: BOOK_COVER_MARGIN,
  },

  bookCoverLabel: {
    color: "#fff",
    fontSize: 12,
  },
});
