import React, { isValidElement, useMemo, useState } from "react";
import {
  Dimensions,
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Feather as FeatherIcon } from "@expo/vector-icons";
import { SafeAreaView, useSafeArea } from "react-native-safe-area-context";
import Animated, {
  diffClamp,
  useCode,
  add,
  Extrapolate,
  interpolate,
} from "react-native-reanimated";
import {
  usePanGestureHandler,
  withOffset,
  withSpring,
  withDecay,
} from "react-native-redash";
import BackgroundHeader from "../../../assets/images/background-header";
import { StatusBarHeight } from "../../../utils/Statusbar";
import { PanGestureHandler } from "react-native-gesture-handler";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const BOOK_COVER_MARGIN = 5;
const BOOK_COVER_WIDTH = SCREEN_WIDTH / 5 - BOOK_COVER_MARGIN * 2;
const BOOK_COVER_CONTAINER_WIDTH = BOOK_COVER_WIDTH + BOOK_COVER_MARGIN * 2;

const { clockRunning, startClock, stopClock, eq, cond, block } = Animated;

type HeaderSectionProps = {
  images: Array<{ source: any; name: string }>;
  searchText: string;
  onChangeSearch: (text: string) => void;
};

export const HeaderSection = ({
  searchText,
  onChangeSearch,
  images,
}: HeaderSectionProps) => {
  const {
    gestureHandler,
    position,
    state,
    translation,
    velocity,
  } = usePanGestureHandler();

  // const translateX = withOffset(translation.x, state);
  const minDiffClamp = useMemo(
    () => -(BOOK_COVER_WIDTH + BOOK_COVER_MARGIN * 2) * (images.length - 5),
    [images]
  );

  const maxDiffClampValue = 0;

  const x = withDecay({
    state,
    value: translation.x,
    velocity: velocity.x,
    deceleration: 0.997,
  });

  const translateX = diffClamp(x, minDiffClamp, maxDiffClampValue);
  const [containerWidth, setContainerWidth] = useState(SCREEN_WIDTH);
  const visibleCards = Math.floor(containerWidth / BOOK_COVER_CONTAINER_WIDTH);

  return (
    <View style={styles.headerWrapper}>
      {/* <BackgroundHeader
        width={SCREEN_WIDTH}
        height={300}
        style={styles.imageContainer}
      /> */}

      {/* <View
        style={[
          styles.searchWrapper,
          {
            marginTop: StatusBarHeight,
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
      </View> */}

      <Text style={styles.title}>Our Top Picks</Text>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{ flexDirection: "row", transform: [{ translateX }] }}
          onLayout={({ nativeEvent: { layout } }) =>
            setContainerWidth(layout.width)
          }
        >
          {images.map((item, index) => {
            // const isTop = 0;
            // const isAppearring = HEIGHT * visibleCards;
            // const isDisappearing = -HEIGHT;
            // const isBottom = HEIGHT * (visibleCards - 1);
            // const positionY = add(y, index * HEIGHT);

            // const isLeft = 0;

            // isLeft < isCenter < isRight

            // isRight < isCenter < isLeft

            const isEndLeft = 0;

            const isDisappearing = -BOOK_COVER_CONTAINER_WIDTH;
            const isAppearring = BOOK_COVER_CONTAINER_WIDTH * visibleCards;
            const isCenter =
              -BOOK_COVER_CONTAINER_WIDTH * (index + 1) +
              BOOK_COVER_CONTAINER_WIDTH * 2;

            const isLeft = 0;
            const isRight = BOOK_COVER_CONTAINER_WIDTH * (visibleCards - 10);

            console.log("IsLeft: ", isRight, " => ", isCenter, " => ", isLeft);
            const positionX = add(
              translateX,
              index * BOOK_COVER_WIDTH + BOOK_COVER_MARGIN * 2
            );

            const scale = interpolate(positionX, {
              // inputRange: [isLeft, isCenter, isRight],
              // outputRange: [0.5, 1, 0.5],
              // inputRange: [
              //   -BOOK_COVER_CONTAINER_WIDTH * (index + 1),
              //   -10,
              //   BOOK_COVER_CONTAINER_WIDTH * (index + 1),
              //   BOOK_COVER_CONTAINER_WIDTH * (index + 2),
              //   // BOOK_COVER_CONTAINER_WIDTH * index + 2,
              // ],
              // outputRange: [0.5, 0.5, 1, 0.5],
              inputRange: [isLeft, isAppearring, isRight],
              outputRange: [1, 1, 0.5],
              extrapolate: Extrapolate.CLAMP,
            });

            // const scale = 1;

            // const scale = interpolate(positionY, {
            //   inputRange: [isDisappearing, isTop, isBottom, isAppearring],
            //   outputRange: [0.5, 1, 1, 0.5],
            //   extrapolate: Extrapolate.CLAMP,
            // })

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
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    transform: [{ scaleX: 1.1 }, { scaleY: 1.5 }],
    top: -10,
    position: "absolute",
  },

  headerWrapper: {
    height: 350,
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
    // width: 75,
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
