import { StatusBar, Platform } from "react-native";

export const StatusBarHeight =
  Platform.OS === "ios" ? 44 : StatusBar.currentHeight + 10;
