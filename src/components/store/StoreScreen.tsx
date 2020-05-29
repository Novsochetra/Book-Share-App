import React, { ReactElement, useState } from "react";
import { View, Text } from "react-native";
import { StoreView } from "./StoreView";

type StoreScreenProps = {};

export const StoreScreen = ({}: StoreScreenProps): ReactElement => {
  const [searchText, setSearchText] = useState("");

  const onSearchChange = (text: string) => setSearchText(text);
  return <StoreView searchText={searchText} onSearchChange={onSearchChange} />;
};
