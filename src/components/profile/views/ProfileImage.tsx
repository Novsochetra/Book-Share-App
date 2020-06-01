import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import profileImageSource from "../../../assets/images/profile.jpg";
import { Colors } from "../../../utils/Colors";

type ProfileImageProps = {};

export const ProfileImage = ({}: ProfileImageProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        <Image source={profileImageSource} style={styles.profileImage} />
      </View>
      <TouchableOpacity style={styles.btnEditProfile}>
        <Text style={styles.btnEditProfileLabel}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
  },

  profileWrapper: {
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  btnEditProfile: {
    backgroundColor: Colors.primary,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },

  btnEditProfileLabel: {
    fontSize: 13,
    color: "#fff",
  },
});
