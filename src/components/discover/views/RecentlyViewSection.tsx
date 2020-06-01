import React, { ReactElement } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageSourcePropType,
  Dimensions,
} from "react-native";
import { TapResizeHandler } from "../../../common/TapResizeHandler";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const SPACER = 10;
const SPACER_WIDTH = (SPACER * 3) / 2;
const TRENDING_CONTAINER = SCREEN_WIDTH - 30;
const TRENDING_BOOK_WIDTH = TRENDING_CONTAINER / 3 - SPACER;

type RecentlyViewSection = {
  books: Array<{ name: string; source: ImageSourcePropType }>;
};

export const RecentlyViewSection = ({
  books,
}: RecentlyViewSection): ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitleText}>Recently Viewed</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {books.map((item, index) => (
          <TapResizeHandler key={`recentlyView ${index}`}>
            <View style={styles.bestShareCoverWrapper}>
              <Image source={item.source} style={styles.bookCover} />
              <Text style={styles.bestShareBookTitle}>{item.name}</Text>
              <Text style={styles.bestShareBookAuthor}>by Jake Arnott</Text>
            </View>
          </TapResizeHandler>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },

  sectionTitleText: {
    fontSize: 24,
    marginBottom: 20,
  },

  bookCover: {
    width: TRENDING_BOOK_WIDTH,
    height: 160,
    borderRadius: 10,
  },

  //   BEST SHARE SECTION
  bestShareCoverWrapper: {
    marginBottom: SPACER_WIDTH,
    marginRight: SPACER_WIDTH,
  },

  bestShareBookTitle: {
    fontSize: 15,
  },

  bestShareBookAuthor: {
    fontSize: 11,
    color: "#212121",
  },
});
