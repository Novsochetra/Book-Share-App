import React, { ReactElement } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Colors } from "../../../utils/Colors";
import { Entypo as EntypoIcon } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TapResizeHandler } from "../../../common/TapResizeHandler";
import { Rating } from "./Rating";

const SCREEN_WIDTH = Dimensions.get("window").width;
const BOOK_COVER_WIDTH = SCREEN_WIDTH / 3;
const BOOK_COVER_HEIGHT = BOOK_COVER_WIDTH * 1.3;

type BookItemProps = {
  item: { name: string; source: ImageSourcePropType; genre: string };
};

export const BookItem = ({ item }: BookItemProps): ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <TapResizeHandler>
          <Image source={item.source} style={styles.image} />
        </TapResizeHandler>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.bookTitle}>The Heart of Hell</Text>
        <Text style={styles.bookAuthor}>Mitch Weiss</Text>
        <Rating />
        <Text style={styles.bookDescription}>
          The untold story of courage and sacrifice in the shadow of Iwo Jima.
        </Text>
        <View style={styles.buttonGroupWrapper}>
          <TouchableOpacity style={[styles.btn, styles.btnAddToCart]}>
            <Text style={[styles.btnLabel]}>Add to cart</Text>
          </TouchableOpacity>
          <View style={styles.btnWrapper}>
            <TouchableOpacity style={[styles.btn, styles.btnAddToWishlist]}>
              <Text style={[styles.btnLabel, styles.btnAddToWishlistLabel]}>
                Add to wishlist
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 15,
  },

  imageWrapper: {
    width: BOOK_COVER_WIDTH,
    height: BOOK_COVER_HEIGHT,
  },

  image: {
    width: "100%",
    height: BOOK_COVER_HEIGHT,

    borderRadius: 15,
  },

  contentContainer: {
    flex: 2,
    padding: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  bookTitle: {
    fontSize: 20,
    color: "rgba(36, 33, 38, 0.75)",
  },

  bookDescription: {
    fontSize: 10,
    color: "rgba(36, 33, 38, 0.25)",
  },

  bookAuthor: {
    fontSize: 12,
    color: "rgba(36, 33, 38, 0.5)",
  },

  buttonGroupWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  btnWrapper: {
    shadowColor: "#767676",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    elevation: 2,
  },

  btn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },

  btnLabel: {
    color: "#fff",
    fontSize: 11,
  },
  btnAddToCart: { alignSelf: "flex-end" },

  btnAddToWishlist: {
    backgroundColor: "#fff",
  },

  btnAddToWishlistLabel: {
    color: "#000",
  },
});
