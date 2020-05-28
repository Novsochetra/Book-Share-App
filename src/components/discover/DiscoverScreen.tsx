import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Feather as FeatherIcon } from "@expo/vector-icons";
import { IRootStackParamList } from "../../../App";
import { Header } from "./views/Header";
import { TapResizeHandler } from "../../common/TapResizeHandler";

type DiscoverScreenProps = {
  navigation: StackNavigationProp<IRootStackParamList>;
};

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const SPACER = 10;
const SPACER_WIDTH = (SPACER * 3) / 2;
const TRENDING_CONTAINER = SCREEN_WIDTH - 30;
const TRENDING_BOOK_WIDTH = TRENDING_CONTAINER / 3 - SPACER;

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

export const DiscoverScreen = ({}: DiscoverScreenProps) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          images={Images}
          searchText={search}
          onChangeSearch={onChangeSearch}
        />

        <View style={styles.storyContainer}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            horizontal
          >
            <TapResizeHandler>
              <View style={styles.storyWrapper}>
                <View style={styles.addBook}>
                  <FeatherIcon name="plus" color="#fff" size={30} />
                </View>
                <Text style={styles.storyLabel}>Add</Text>
              </View>
            </TapResizeHandler>
            {Images.map((item, index) => (
              <TapResizeHandler key={`story ${index}`}>
                <View style={styles.storyWrapper}>
                  <Image source={item.source} style={styles.storyImage} />
                  <Text style={styles.storyLabel}>{item.name}</Text>
                </View>
              </TapResizeHandler>
            ))}
          </ScrollView>
        </View>

        <View style={{ paddingHorizontal: 15 }}>
          <Text style={styles.sectionTitleText}>Trending Books</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
              width: TRENDING_CONTAINER,
            }}
          >
            {Images.map((item, index) => (
              <TapResizeHandler key={`trending ${index}`}>
                <View style={[styles.bookCoverWrapper]}>
                  <Image source={item.source} style={styles.bookCover} />
                </View>
              </TapResizeHandler>
            ))}
          </View>
        </View>

        <View style={{ paddingHorizontal: 15 }}>
          <Text style={styles.sectionTitleText}>Best Share</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {Images.map((item, index) => (
              <TapResizeHandler key={`bestShare ${index}`}>
                <View style={styles.bestShareCoverWrapper}>
                  <Image source={item.source} style={styles.bookCover} />
                  <Text style={styles.bestShareBookTitle}>{item.name}</Text>
                  <Text style={styles.bestShareBookAuthor}>by Jake Arnott</Text>
                </View>
              </TapResizeHandler>
            ))}
          </ScrollView>
        </View>

        <View style={{ paddingHorizontal: 15 }}>
          <Text style={styles.sectionTitleText}>Recently Viewed</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {Images.map((item, index) => (
              <TapResizeHandler key={`recentlyView ${index}`}>
                <View style={styles.bestShareCoverWrapper}>
                  <Image source={item.source} style={styles.bookCover} />
                  <Text style={styles.bestShareBookTitle}>{item.name}</Text>
                  <Text style={styles.bestShareBookAuthor}>by Jake Arnott</Text>
                </View>
              </TapResizeHandler>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  addBook: {
    borderRadius: 30,
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "#707070",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },

  storyContainer: {
    marginVertical: 10,
  },

  storyWrapper: {
    margin: 10,
    alignItems: "center",
  },

  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#707070",
  },

  storyLabel: {
    marginTop: 5,
    fontSize: 10,
  },

  bookCoverWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SPACER_WIDTH,
  },

  bookCover: {
    width: TRENDING_BOOK_WIDTH,
    height: 160,
    borderRadius: 10,
    // margin: 5,
  },

  bookCoverLabel: {
    color: "#fff",
    fontSize: 12,
  },

  sectionTitleText: {
    fontSize: 24,
    marginBottom: 20,
  },

  //   BEST SHARE SECTION
  bestShareCoverWrapper: {
    marginBottom: SPACER_WIDTH,
    marginRight: SPACER_WIDTH,
  },

  bestShareBookTitle: {
    fontSize: 15,
  },

  bestShareBookAuthor: {
    fontSize: 11,
    color: "#212121",
  },
});

export default DiscoverScreen;
