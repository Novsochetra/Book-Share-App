import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { IRootStackParamList } from "../../../App";
import { DisCoverView } from "./DisCoverView";
import { BooksData } from "../../dummies/Books";

type DiscoverScreenProps = {
  navigation: StackNavigationProp<IRootStackParamList>;
};

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
    <DisCoverView
      onChangeSearch={onChangeSearch}
      searchText={search}
      images={Images}
      books={BooksData}
    />
  );
};

export default DiscoverScreen;
