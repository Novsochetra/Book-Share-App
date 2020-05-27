import React from "react";
import {
  Dimensions,
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Feather as FeatherIcon } from "@expo/vector-icons";
import { SafeAreaView, useSafeArea } from "react-native-safe-area-context";
import BackgroundHeader from "../../../assets/images/background-header";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

type HeaderProps = {
  images: Array<{ source: any; name: string }>;
  searchText: string;
  onChangeSearch: (text: string) => void;
};

export const Header = ({ searchText, onChangeSearch, images }: HeaderProps) => {
  const { top } = useSafeArea();
  return (
    <View style={styles.headerWrapper}>
      <BackgroundHeader
        width={SCREEN_WIDTH}
        height={300}
        style={styles.imageContainer}
      />

      <View
        style={
          (styles.searchWrapper, { marginTop: top, paddingHorizontal: 15 })
        }
      >
        <TextInput
          onChangeText={onChangeSearch}
          value={searchText}
          style={styles.searchInput}
          placeholder="Search Books, Authors"
          clearButtonMode="always"
        />
        <FeatherIcon
          name="search"
          color="#000"
          size={20}
          style={styles.iconSearch}
        />
        <FeatherIcon
          name="filter"
          color="#000"
          size={20}
          style={styles.filterIcon}
        />
      </View>

      <Text style={styles.title}>Our Top Picks</Text>

      <ScrollView
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        horizontal
      >
        {images.map((item, index) => (
          <View style={styles.bookCoverWrapper}>
            <Image source={item.source} style={styles.bookCover} />
            <Text style={styles.bookCoverLabel}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    transform: [{ scaleX: 1.1 }, { scaleY: 1.5 }],
    top: -10,
    position: "absolute",
  },

  headerWrapper: {
    height: 350,
    justifyContent: "center",
  },

  searchWrapper: {
    height: 40,
  },

  searchInput: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#5ABD8C",
    borderRadius: 20,
    paddingVertical: 5,
    paddingLeft: 40,
    paddingRight: 10,
    height: 40,
  },

  iconSearch: {
    position: "absolute",
    top: 10,
    left: 25,
  },

  filterIcon: {
    position: "absolute",
    top: 10,
    right: 25,
  },

  title: {
    marginVertical: 10,
    marginLeft: 15,
    fontSize: 24,
    color: "#fff",
  },

  bookCoverWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },

  bookCover: {
    width: 75,
    height: 100,
    borderRadius: 10,
    margin: 5,
  },

  bookCoverLabel: {
    color: "#fff",
    fontSize: 12,
  },
});
