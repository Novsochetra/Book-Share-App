import React, { ReactElement } from "react";
import {
  View,
  ScrollView,
  Dimensions,
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
  onChangeSearch: (text: string) => void;
};

export const DisCoverView = ({
  images,
  searchText,
  onChangeSearch,
}: DisCoverViewProps): ReactElement => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderSection
          images={images}
          searchText={searchText}
          onChangeSearch={onChangeSearch}
        />

        <StorySection images={images} />

        <TrendingSection images={images} />

        <BestShareSection images={images} />

        <RecentlyViewSection images={images} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
