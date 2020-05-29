import React, { ReactElement, useRef, useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";

import { Header } from "./views/Header";
import AccountSection from "./views/AccountSection";
import { SettingSection } from "./views/SettingSection";
import { ScrollView } from "react-native-gesture-handler";

type ProfileViewProps = {};

export const ProfileView = ({}: ProfileViewProps): ReactElement => {
  const { top } = useSafeArea();
  const ref = useRef(null);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <AccountSection />
        <SettingSection />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
