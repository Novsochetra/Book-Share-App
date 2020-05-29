import React from "react";
import {
  Dimensions,
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import BackgroundHeader from "../../../assets/images/background-header";
import { ProfileImage } from "./ProfileImage";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

type HeaderProps = {
  // images: Array<{ source: any; name: string }>;
  // searchText: string;
  // onChangeSearch: (text: string) => void;
};

export const Header = ({}: HeaderProps) => {
  const { top } = useSafeArea();
  return (
    <View style={styles.headerWrapper}>
      <BackgroundHeader width={SCREEN_WIDTH} style={styles.imageContainer} />

      <Text style={styles.title}>Sochetra Nov</Text>
      <View style={styles.infoWrapper}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <View style={styles.sectionDetail}>
            <Text style={styles.amountText}>21</Text>
            <Text style={styles.label}>Books</Text>
          </View>
          <View style={styles.sectionDetail}>
            <Text style={styles.amountText}>50k</Text>
            <Text style={styles.label}>Followers</Text>
          </View>
          <View style={styles.sectionDetail}>
            <Text style={styles.amountText}>30</Text>
            <Text style={styles.label}>Following</Text>
          </View>

          <ProfileImage />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    transform: [{ scaleX: 1.1 }, { scaleY: 1 }],
    top: -120,
    position: "absolute",
  },

  headerWrapper: {
    height: 210,
    paddingHorizontal: 30,
    justifyContent: "flex-end",
    marginBottom: 30,
  },

  infoWrapper: {
    height: 120,
    flexDirection: "row",
    justifyContent: "center",
  },

  title: {
    marginVertical: 10,
    marginLeft: 15,
    fontSize: 24,
    color: "#fff",
    position: "absolute",
    top: 50,
  },

  sectionDetail: {
    justifyContent: "center",
    alignItems: "center",
  },

  amountText: {
    fontSize: 24,
    color: "rgba(33, 33, 33, 0.5)",
    fontWeight: "bold",
  },

  label: {
    fontSize: 10,
    color: "rgba(33, 33, 33, 0.5)",
  },
});
