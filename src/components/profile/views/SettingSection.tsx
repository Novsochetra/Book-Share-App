import React, { ReactElement } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather as FeatherIcon } from "@expo/vector-icons";
import Colors from "../../../utils/Colors";
import { AccountSectionItem } from "./AccountSectionItem";

type SettingSectionProps = {};

export const SettingSection = ({}: SettingSectionProps): ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.wrapper}>
        <AccountSectionItem iconName="sun" value="Night Mode" />
        <View style={styles.divider} />
        <AccountSectionItem iconName="bell" value="Notification" />
        <View style={styles.divider} />
        <AccountSectionItem iconName="globe" value="Language" />
        <View style={styles.divider} />
        <AccountSectionItem iconName="help-circle" value="Help" />
        <View style={styles.divider} />
        <AccountSectionItem iconName="log-out" value="Sign Out" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginVertical: 10,
  },

  title: {
    fontSize: 14,
    color: "#C1C1C1",
    marginBottom: 10,
  },

  wrapper: {
    borderRadius: 10,
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,

    elevation: 2,
  },

  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#F0F0F0",
  },
});
