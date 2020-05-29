import React, { ReactElement } from "react";
import { Dimensions, FlatList, Image, View, StyleSheet } from "react-native";
import { ImagesData } from "../../../dummies/Images";
import { TapResizeHandler } from "../../../common/TapResizeHandler";

const WINDOW_WIDTH = Dimensions.get("window").width;
const CONTENT_WIDTH = WINDOW_WIDTH - 30;
const BOOK_COVER_WIDTH = CONTENT_WIDTH / 2 - 10;
const BOOK_COVER_HEIGHT = BOOK_COVER_WIDTH * 1.3;

type TabProps = {};

export const Tab = ({}: TabProps): ReactElement => {
  const renderItem = ({ item, index }: any): ReactElement => {
    return (
      <TapResizeHandler>
        <Image
          source={item.source}
          style={[styles.image, { marginRight: index % 2 === 0 ? 20 : 0 }]}
        />
      </TapResizeHandler>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={ImagesData}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={{ paddingVertical: 15 }}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={{ width: 10, height: 20 }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },

  image: {
    width: BOOK_COVER_WIDTH,
    height: BOOK_COVER_HEIGHT,
    alignSelf: "flex-end",
    borderRadius: 10,
  },
});
