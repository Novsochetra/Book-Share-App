import React, { ReactElement } from "react";
import { View, StyleSheet, ImagePropertiesSourceOptions } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import { Header } from "./views/Headers";
import { MaterialTopTabNavigator } from "./views/MaterialTopTabNavigator";

type LibraryViewProps = {
  data: Array<{
    name: string;
    source: ImagePropertiesSourceOptions;
    genre?: string;
  }>;
};

export const LibraryView = ({ data }: LibraryViewProps) => {
  const { top } = useSafeArea();
  return (
    <View style={styles.container}>
      <Header safeAreaHeight={top} searchValue={""} onChangeSearch={() => {}} />
      <MaterialTopTabNavigator data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
