import React, { ReactElement } from "react";
import { View, Text } from "react-native";
import { ProfileView } from "./ProfileView";

type ProfileScreenProps = {};

const ProfileScreen = ({}: ProfileScreenProps): ReactElement => {
  return <ProfileView />;
};

export default ProfileScreen;
