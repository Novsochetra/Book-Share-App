import React, { ReactElement, useMemo, ReactNode, useState } from "react";
import { Dimensions } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { usePanGestureHandler, withSpring } from "react-native-redash";
import Animated, { Extrapolate, Value, Clock } from "react-native-reanimated";

const {
  interpolate,
  debug,
  cond,
  block,
  useCode,
  eq,
  call,
  floor,
  onChange,
  divide,
  set,
  multiply,
  neq,
} = Animated;

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const SPRING_CONFIG = {
  damping: 20,
  mass: 1,
  overshootClamping: true,
  restDisplacementThreshold: 0.001,
  restSpeedThreshold: 0.001,
  stiffness: 400,
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

  const { translateX, index } = useMemo(
    () => ({
      translateX: new Value(0),
      index: new Value(0),
    }),
    []
  );

  const SNAP_POINTS = useMemo(() => items.map((_, i) => -SCREEN_WIDTH * i), [
    items,
  ]);

  const velo = interpolate(velocity.x, {
    inputRange: [-1500, velocity.x],
    outputRange: [-1500, 1500],
    extrapolate: Extrapolate.CLAMP,
  });

  const setIndex = (
    value: Animated.Node<number>,
    velocity: Animated.Node<number>
  ) => {
    return block([
      set(index, multiply(floor(divide(floor(value), SCREEN_WIDTH)), -1)),
      index,
    ]);
  };

  useCode(
    () =>
      block([
        onChange(
          state,
          cond(
            eq(state, State.END),
            call([index, translateX], ([index, translateX]) => {
              console.log("Index: ", index);
              onChangeIndex(index);
            })
          )
        ),
        cond(
          neq(velocity.x, 0),
          block([
            set(
              translateX,
              withSpring({
                state,
                value: translation.x,
                snapPoints: SNAP_POINTS,
                velocity: velo,
                config: SPRING_CONFIG,
              })
            ),
            setIndex(translateX, velocity.x),
          ])
        ),
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

  onChangeIndex: (index: number) => void;
}
