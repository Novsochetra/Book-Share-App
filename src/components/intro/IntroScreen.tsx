import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Header } from "./views/Header";
import Colors from "../../utils/Colors";
import { StackNavigationProp } from "@react-navigation/stack";
import { IRootStackParamList } from "../../../App";
import { Item } from "./views/Item";

let Images = [
  { source: require("../../assets/images/discover-1.jpg"), name: "History" },
  { source: require("../../assets/images/discover-2.jpg"), name: "Science" },
  { source: require("../../assets/images/discover-3.jpg"), name: "Law" },
  { source: require("../../assets/images/discover-4.jpg"), name: "Food" },
  { source: require("../../assets/images/discover-5.jpg"), name: "Medicine" },
  { source: require("../../assets/images/discover-6.jpg"), name: "Art" },
  { source: require("../../assets/images/discover-7.jpg"), name: "Culture" },
  { source: require("../../assets/images/discover-8.jpg"), name: "Sport" },
  { source: require("../../assets/images/discover-9.jpg"), name: "Politic" },
];

type IntroScreenProps = {
  navigation: StackNavigationProp<IRootStackParamList>;
};

export const IntroScreen = ({ navigation }: IntroScreenProps) => {
  const [images, setImages] = useState(Images);
  const renderItem = ({ item, index }: any) => (
    <Item key={`intro ${index}`} source={item.source} title={item.name} />
  );

  const onLoadMoreContent = (): void => {
    setImages((prevState) => [
      ...prevState,
      {
        source: require("../../assets/images/discover-9.jpg"),
        name: "Politic",
      },
      {
        source: require("../../assets/images/discover-9.jpg"),
        name: "Politic",
      },
      {
        source: require("../../assets/images/discover-9.jpg"),
        name: "Politic",
      },
    ]);
  };

  const renderFooterComponent = () => {
    return (
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={onLoadMoreContent}>
          <Text style={styles.moreTopicText}>More Topics</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnApply}
          onPress={() =>
            navigation.navigate("RootBottomTab", { screen: "Discover" })
          }
        >
          <Text style={styles.btnLabel}>Apply</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        extraData={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        ListHeaderComponent={Header}
        ListFooterComponent={renderFooterComponent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  footerContainer: {
    flex: 1,
    alignItems: "center",
  },

  btnApply: {
    backgroundColor: Colors.primary,
    width: 180,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 10,
  },

  btnLabel: {
    color: "#fff",
    fontSize: 20,
  },

  moreTopicText: {
    color: Colors.primary,
    textDecorationLine: "underline",
  },
});
