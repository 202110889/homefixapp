import { Redirect, useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import {
  useCameraDevice,
  useCameraPermission,
} from "react-native-vision-camera";

const Camera = () => {
  const { hasPermission } = useCameraPermission();
  const redirectToPermissions = !hasPermission;
  const router = useRouter();

  const device = useCameraDevice("back");
  if (redirectToPermissions) return <Redirect href="/(tabs)/permissions" />;
  if (!device) return <></>;
  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
};

export default Camera;

// 현재 권한설정후 카메라로 링크 시 child 오류
