import React, { ReactNode, ReactElement, useMemo } from "react";
import {} from "react-native";
import Animated, {
  Clock,
  useCode,
  block,
  Value,
  Easing,
} from "react-native-reanimated";
import { TapGestureHandler, State } from "react-native-gesture-handler";
import { useTapGestureHandler } from "react-native-redash";

type TapResizeHandlerProps = {
  children: ReactNode;
};

const { cond, eq, clockRunning, set, startClock, timing, stopClock } = Animated;

function runTiming(clock: Animated.Clock, value: number, dest: number) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 10,
    toValue: new Value(0),
    easing: Easing.linear,
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, stopClock(clock)),
    state.position,
  ]);
}

const Component = ({ children }: TapResizeHandlerProps): ReactElement => {
  const { gestureHandler, state } = useTapGestureHandler();

  const { clock } = useMemo(() => ({ clock: new Clock() }), []);
  const scale = new Value(1);

  useCode(
    () =>
      block([
        cond(
          eq(state, State.BEGAN),
          block([set(scale, runTiming(clock, 1, 0.95))])
        ),
        cond(
          eq(state, State.FAILED),
          block([block([set(scale, runTiming(clock, 0.95, 1))])])
        ),
        cond(
          eq(state, State.CANCELLED),
          block([block([set(scale, runTiming(clock, 0.95, 1))])])
        ),
        cond(
          eq(state, State.END),
          block([set(scale, runTiming(clock, 0.95, 1))])
        ),
      ]),
    []
  );

  return (
    <TapGestureHandler {...gestureHandler}>
      <Animated.View style={{ transform: [{ scale }] }}>
        {children}
      </Animated.View>
    </TapGestureHandler>
  );
};

export const TapResizeHandler = React.memo(Component);
