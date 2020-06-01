import React, { ReactElement } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, Route, useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { enableScreens } from "react-native-screens";
import { StartScreen } from "./src/components/start/StartScreen";
import { Feather } from "@expo/vector-icons";
import { IntroScreen } from "./src/components/intro/IntroScreen";
import { DiscoverScreen } from "./src/components/discover/DiscoverScreen";
import { LibraryScreen } from "./src/components/library/LibraryScreen";
import Colors from "./src/utils/Colors";
import { StoreScreen } from "./src/components/store/StoreScreen";
import ProfileScreen from "./src/components/profile/ProfileScreen";
enableScreens();

console.disableYellowBox = true;

const RootStack = createStackNavigator<IRootStackParamList>();
const BottomTab = createMaterialBottomTabNavigator<IBottomTabParamList>();

const BottomMenu = (): ReactElement => {
  return (
    <BottomTab.Navigator
      initialRouteName="Discover"
      activeColor={Colors.primary}
      barStyle={{ backgroundColor: "#fff" }}
      sceneAnimationEnabled={Platform.OS === "ios"} // TODO: Since it has buggy with android elevation
    >
      <BottomTab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="search"
              size={25}
              color={focused ? Colors.primary : "lightgray"}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Library"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="book"
              size={25}
              color={focused ? Colors.primary : "lightgray"}
            />
          ),
        }}
        component={LibraryScreen}
      />
      <BottomTab.Screen
        name="Store"
        component={StoreScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="shopping-cart"
              size={25}
              color={focused ? Colors.primary : "lightgray"}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={25}
              color={focused ? Colors.primary : "lightgray"}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const RootStackNavigator = (): React.ReactElement => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="RootBottomTab" headerMode="none">
          <RootStack.Screen name="RootBottomTab" component={BottomMenu} />
          <RootStack.Screen name="Intro" component={IntroScreen} />
          <RootStack.Screen name="Start" component={StartScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const App = (): React.ReactElement => {
  return <RootStackNavigator />;
};

export type IRootStackParamList = {
  RootBottomTab: undefined;
  Start: undefined;
  Intro: undefined;
};

export type IBottomTabParamList = {
  Discover: undefined;
  Library: undefined;
  Store: undefined;
  Profile: undefined;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
