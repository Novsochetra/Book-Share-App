import React, { ReactElement } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Feather as FeatherIcon } from "@expo/vector-icons";

type HeaderProps = {
  safeAreaHeight: number;
  searchValue: string;
  onChangeSearch: (text: string) => void;
};

export const Header = ({
  searchValue,
  safeAreaHeight,
  onChangeSearch,
}: HeaderProps): ReactElement => {
  return (
    <View
      style={[
        styles.container,
        { marginTop: safeAreaHeight, paddingHorizontal: 15 },
      ]}
    >
      <View style={styles.wrapper}>
        <TextInput
          onChangeText={onChangeSearch}
          value={searchValue}
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
          name="sliders"
          color="#000"
          size={20}
          style={styles.filterIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginBottom: 10,
  },

  wrapper: {
    borderRadius: 20,
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    elevation: 5,
  },

  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 5,
    paddingLeft: 40,
    paddingRight: 10,
    height: 40,
  },

  iconSearch: {
    position: "absolute",
    top: 10,
    left: 15,
  },

  filterIcon: {
    position: "absolute",
    top: 10,
    right: 25,
  },
});
