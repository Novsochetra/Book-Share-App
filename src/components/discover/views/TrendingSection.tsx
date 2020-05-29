import React, { ReactElement } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageSourcePropType,
} from "react-native";
import { TapResizeHandler } from "../../../common/TapResizeHandler";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const SPACER = 10;
const SPACER_WIDTH = (SPACER * 3) / 2;
const TRENDING_CONTAINER = SCREEN_WIDTH - 30;
const TRENDING_BOOK_WIDTH = TRENDING_CONTAINER / 3 - SPACER;

type TrendingSectionProps = {
  images: Array<{ name: string; source: ImageSourcePropType }>;
};

export const TrendingSection = ({
  images,
}: TrendingSectionProps): ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitleText}>Trending Books</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          width: TRENDING_CONTAINER,
        }}
      >
        {images.map((item, index) => (
          <TapResizeHandler key={`trending ${index}`}>
            <View style={[styles.bookCoverWrapper]}>
              <Image source={item.source} style={styles.bookCover} />
            </View>
          </TapResizeHandler>
        ))}
      </View>
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

  bookCoverWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SPACER_WIDTH,
  },

  bookCover: {
    width: TRENDING_BOOK_WIDTH,
    height: 160,
    borderRadius: 10,
  },
});
