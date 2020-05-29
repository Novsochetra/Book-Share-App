import React, { ReactElement } from "react";
import { View, Text } from "react-native";
import { LibraryView } from "./LibraryView";
import { ImagesData } from "../../dummies/Images";

type LibraryScreenProps = {};

export const LibraryScreen = ({}: LibraryScreenProps): ReactElement => {
  return <LibraryView data={ImagesData} />;
};
