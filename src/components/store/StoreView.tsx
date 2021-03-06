import React, { ReactElement } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Header } from "./views/Header";
import { useSafeArea } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { BooksData } from "../../dummies/Books";
import { BookItem } from "./views/BookItem";

type StoreViewProps = {
  searchText: string;
  onSearchChange: (text: string) => void;
};

export const StoreView = ({
  searchText,
  onSearchChange,
}: StoreViewProps): ReactElement => {
  const { top } = useSafeArea();

  const renderItem = ({
    item,
    index,
  }: {
    item: any;
    index: number;
  }): ReactElement => {
    return <BookItem key={`store-book-item-${index}`} item={item} />;
  };

  return (
    <View style={styles.container}>
      <Header
        safeAreaHeight={top}
        onChangeSearch={onSearchChange}
        searchValue={searchText}
      />
      <FlatList
        data={BooksData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentWrapper: { padding: 15 },
});
