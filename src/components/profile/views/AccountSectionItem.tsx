import React, { ReactElement } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather as FeatherIcon } from "@expo/vector-icons";
import { Colors } from "../../../utils/Colors";

type AccountSectionItemProps = {
  iconName: string;
  value: string;
};

export const AccountSectionItem = ({
  iconName,
  value,
}: AccountSectionItemProps): ReactElement => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <FeatherIcon
        name={iconName}
        size={25}
        color={Colors.primary}
        style={styles.icon}
      />
      <Text>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
  },

  icon: {
    marginHorizontal: 10,
  },

  text: {
    fontSize: 14,
  },
});
