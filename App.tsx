import React, { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, Route, useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StartScreen } from "./src/components/start/StartScreen";
import { Feather } from "@expo/vector-icons";
import { IntroScreen } from "./src/components/intro/IntroScreen";
import { DiscoverScreen } from "./src/components/discover/DiscoverScreen";
import Colors from "./src/utils/Colors";

console.disableYellowBox = true;

const RootStack = createStackNavigator<IRootStackParamList>();
const BottomTab = createBottomTabNavigator<IBottomTabParamList>();

const BottomMenu = (): ReactElement => {
  return (
    <BottomTab.Navigator
      initialRouteName="Discover"
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: "lightgray",
        style: {
          paddingTop: 15,
          height: 100,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
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
        component={() => <Text>Library</Text>}
      />
      <BottomTab.Screen
        name="Store"
        component={() => <Text>Store</Text>}
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
        component={() => <Text>Profile</Text>}
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
        <RootStack.Navigator initialRouteName="Intro" headerMode="none">
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
