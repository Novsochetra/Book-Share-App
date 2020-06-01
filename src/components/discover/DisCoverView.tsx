import React, { ReactElement } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { HeaderSection } from "./views/HeaderSection";
import { StorySection } from "./views/StorySection";
import { TrendingSection } from "./views/TrendingSection";
import { BestShareSection } from "./views/BestShareSection";
import { RecentlyViewSection } from "./views/RecentlyViewSection";

type DisCoverViewProps = {
  searchText: string;
  images: Array<{ source: ImageSourcePropType; name: string }>;
  books: Array<{ source: ImageSourcePropType; name: string }>;
  onChangeSearch: (text: string) => void;
};

export const DisCoverView = ({
  images,
  books,
  searchText,
  onChangeSearch,
}: DisCoverViewProps): ReactElement => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderSection
          books={books}
          searchText={searchText}
          onChangeSearch={onChangeSearch}
        />

        <StorySection images={images} />

        <TrendingSection books={books} />

        <BestShareSection books={books} />

        <RecentlyViewSection books={books} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
