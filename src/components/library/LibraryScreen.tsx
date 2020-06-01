import React, { ReactElement } from "react";
import {} from "react-native";
import { LibraryView } from "./LibraryView";
import { BooksData } from "../../dummies/Books";

type LibraryScreenProps = {};

export const LibraryScreen = ({}: LibraryScreenProps): ReactElement => {
  return <LibraryView data={BooksData} />;
};
