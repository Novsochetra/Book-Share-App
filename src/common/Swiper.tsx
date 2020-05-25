import React, { ReactElement, useMemo, ReactNode } from "react";
import { Text, Dimensions } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { usePanGestureHandler, withSpring, spring } from "react-native-redash";
import Animated from "react-native-reanimated";

const {
  interpolate,
  Extrapolate,
  debug,
  cond,
  block,
  useCode,
  eq,
  call,
  floor,
  onChange,
  divide,
  Value,
  greaterThan,
  set,
  and,
  modulo,
  multiply,
  Clock,
  clockRunning,
  stopClock,
  startClock,
  not,
} = Animated;

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const SPRING_CONFIG = {
  damping: 12,
  mass: 1,
  overshootClamping: false,
  restDisplacementThreshold: 0.001,
  restSpeedThreshold: 0.001,
  stiffness: 100,
};

export const Swiper = ({
  items,
  children,
  onChangeIndex,
}: SwiperProps): ReactElement => {
  const {
    gestureHandler,
    position,
    state,
    translation,
    velocity,
  } = usePanGestureHandler();

  const index = new Value(0);
  const shouldSnap = new Value(0);
  const clock = new Clock();

  const SNAP_POINTS = useMemo(() => items.map((_, i) => -SCREEN_WIDTH * i), [
    items,
  ]);

  const velo = interpolate(velocity.x, {
    inputRange: [-1500, velocity.x],
    outputRange: [-1500, 1500],
    extrapolate: Extrapolate.CLAMP,
  });

  const translateX = withSpring({
    state,
    value: translation.x,
    snapPoints: SNAP_POINTS,
    velocity: velo,
    config: SPRING_CONFIG,
  });

  const setIndex = (value: Animated.Node<number>) => {
    return block([
      set(index, multiply(floor(divide(floor(value), SCREEN_WIDTH)), -1)),
      index,
    ]);
  };

  useCode(
    () =>
      //   cond(eq(state, State.END), block([setIndex(translateX)])),
      block([
        cond(eq(state, State.UNDETERMINED), [startClock(clock)]),
        cond(eq(state, State.END), [stopClock(clock)]),
        cond(
          and(eq(state, State.END), not(clockRunning(clock))),
          block([setIndex(translateX), debug("INDEX: ", index)])
        ),
        //   block([setIndex(translateX), call([], () => {})])
      ]),

    []
  );

  return (
    <PanGestureHandler {...gestureHandler}>
      <Animated.View
        style={{
          height: SCREEN_HEIGHT,
          top: 200,
          flexDirection: "row",
          transform: [{ translateX }],
        }}
      >
        {children}
      </Animated.View>
    </PanGestureHandler>
  );
};

interface SwiperProps {
  items: Array<{ source: any; value?: string }>;
  children?: ReactNode;

  onChangeIndex: (index: Animated.Node<number>) => void;
}
