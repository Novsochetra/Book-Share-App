import React from "react";
import {
  Image,
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { Feather as FeatherIcon } from "@expo/vector-icons";
import { TapResizeHandler } from "../../../common/TapResizeHandler";

type StorySectionProps = {
  images: Array<{ source: ImageSourcePropType; name: string }>;
};

export const StorySection = ({ images }: StorySectionProps) => {
  return (
    <View style={styles.storyContainer}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        horizontal
      >
        <TapResizeHandler>
          <View style={styles.storyWrapper}>
            <View style={styles.addBook}>
              <FeatherIcon name="plus" color="#fff" size={30} />
            </View>
            <Text style={styles.storyLabel}>Add</Text>
          </View>
        </TapResizeHandler>
        {images.map((item, index) => (
          <TapResizeHandler key={`story ${index}`}>
            <View style={styles.storyWrapper}>
              <Image source={item.source} style={styles.storyImage} />
              <Text style={styles.storyLabel}>{item.name}</Text>
            </View>
          </TapResizeHandler>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  storyContainer: {
    marginVertical: 10,
  },

  addBook: {
    borderRadius: 30,
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "#707070",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },

  storyWrapper: {
    margin: 10,
    alignItems: "center",
  },

  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#707070",
  },

  storyLabel: {
    marginTop: 5,
    fontSize: 10,
  },
});
