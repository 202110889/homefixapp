import * as ExpoMediaLibrary from "expo-media-library";
import * as React from "react";
import { Text, View } from "react-native";
import { CameraPermissionStatus } from "react-native-vision-camera";

export default function PermissionScreen() {
  const [CameraPermissionStatus, setCameraPermissionStatus] =
    React.useState<CameraPermissionStatus>("not-determined");

  const [mediaLibraryPermission, requestMediaLibraryPermissions] =
    ExpoMediaLibrary.usePermissions();
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>카메라 권한이 필요합니다.</Text>
      </View>
    </>
  );
}
