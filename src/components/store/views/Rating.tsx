import React, { ReactElement, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Entypo as EntypoIcon } from "@expo/vector-icons";
import { Colors } from "../../../utils/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

type RatingProps = {};

export const Rating = ({}: RatingProps): ReactElement => {
  const [rating, setRating] = useState(0);
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => setRating(1)} style={styles.wrapper}>
        <EntypoIcon
          name="star"
          size={15}
          color={rating > 0 && rating >= 1 ? Colors.primary : Colors.secondary}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setRating(2)} style={styles.wrapper}>
        <EntypoIcon
          name="star"
          size={15}
          color={rating > 0 && rating >= 2 ? Colors.primary : Colors.secondary}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setRating(3)} style={styles.wrapper}>
        <EntypoIcon
          name="star"
          size={15}
          color={rating > 0 && rating >= 3 ? Colors.primary : Colors.secondary}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setRating(4)} style={styles.wrapper}>
        <EntypoIcon
          name="star"
          size={15}
          color={rating > 0 && rating >= 4 ? Colors.primary : Colors.secondary}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setRating(5)} style={styles.wrapper}>
        <EntypoIcon
          name="star"
          size={15}
          color={rating > 0 && rating >= 5 ? Colors.primary : Colors.secondary}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 2,
  },
});
