import React, { ReactElement } from "react";
import { View, Text, ImagePropertiesSourceOptions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Tab as TabScreen, Tab } from "./Tab";
import Colors from "../../../utils/Colors";

type MaterialTopTabNavigatorProps = {
  data: Array<{
    name: string;
    source: ImagePropertiesSourceOptions;
    genre?: string;
  }>;
};

type IMaterialTopTabNavigatorProps = {
  General: undefined;
  New: undefined;
  MostView: undefined;
};

const MaterialTab = createMaterialTopTabNavigator<
  IMaterialTopTabNavigatorProps
>();

export const MaterialTopTabNavigator = ({
  data,
}: MaterialTopTabNavigatorProps): ReactElement => {
  return (
    <MaterialTab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.secondary,
        indicatorStyle: {
          backgroundColor: Colors.primary,
        },
      }}
    >
      <MaterialTab.Screen
        name="General"
        component={TabScreen}
        options={{ title: "General" }}
      />
      <MaterialTab.Screen
        name="New"
        component={TabScreen}
        options={{ title: "New" }}
      />
      <MaterialTab.Screen
        name="MostView"
        component={TabScreen}
        options={{ title: "Most Viewed" }}
      />
    </MaterialTab.Navigator>
  );
};
