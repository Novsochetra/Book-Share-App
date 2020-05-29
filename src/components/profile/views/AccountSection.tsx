import React, { ReactElement } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather as FeatherIcon } from "@expo/vector-icons";
import Colors from "../../../utils/Colors";
import { AccountSectionItem } from "./AccountSectionItem";

type AccountSectionProps = {};

const AccountSection = ({}: AccountSectionProps): ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>
      <View style={styles.wrapper}>
        <AccountSectionItem iconName="shopping-cart" value="My Cart" />
        <View style={styles.divider} />
        <AccountSectionItem iconName="credit-card" value="Purchase" />
        <View style={styles.divider} />
        <AccountSectionItem iconName="user" value="Account" />
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

export default AccountSection;
