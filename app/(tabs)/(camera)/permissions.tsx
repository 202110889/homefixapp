import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import * as ExpoMediaLibrary from "expo-media-library";
import { router, Stack } from "expo-router";
import * as React from "react";
import {
  Alert,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
} from "react-native";
import { Camera, CameraPermissionStatus } from "react-native-vision-camera";
const ICON_SIZE = 26;

export default function PermissionScreen() {
  const [CameraPermissionStatus, setCameraPermissionStatus] =
    React.useState<CameraPermissionStatus>("not-determined");

  const [mediaLibraryPermission, requestMediaLibraryPermission] =
    ExpoMediaLibrary.usePermissions();

  const requestCameraPermission = async () => {
    const permission = await Camera.requestCameraPermission();
    setCameraPermissionStatus(permission);
  };
  const handleContinue = () => {
    if (
      CameraPermissionStatus === "granted" &&
      mediaLibraryPermission?.granted
    ) {
      router.push("/(tabs)/(camera)/cameraview");
    } else {
      Alert.alert("권한을 마저 설정해 주세요.");
    }
  };
  console.log(CameraPermissionStatus);
  console.log(mediaLibraryPermission);
  return (
    <>
      <Stack.Screen options={{ headerTitle: "Permissions" }} />
      <ThemedView style={styles.container}>
        <View style={styles.spacer} />
        <ThemedText style={styles.subtitle}>
          Homefix AI가 사진을 인식하기 위해 권한이 필요합니다.
        </ThemedText>
        <View style={styles.spacer} />
        <View style={styles.row}>
          <Ionicons
            name="lock-closed-outline"
            size={ICON_SIZE}
            color={"orange"}
          />
          <ThemedText style={styles.footnote}>Required</ThemedText>
        </View>
        <View style={styles.spacer}></View>
        <View
          style={StyleSheet.compose(styles.row, styles.permissionContainer)}
        >
          <Ionicons name="camera-outline" size={ICON_SIZE} color={"gray"} />
          <View style={styles.permissionText}>
            <ThemedText type="subtitle">Camera</ThemedText>
            <ThemedText>사진을 찍는 데 사용됩니다.</ThemedText>
          </View>

          <Switch
            trackColor={{ true: "orange" }}
            value={CameraPermissionStatus === "granted"}
            onChange={async () => {
              await requestCameraPermission();
            }}
          />
        </View>
        <View style={styles.spacer}></View>
        <View
          style={StyleSheet.compose(styles.row, styles.permissionContainer)}
        >
          <Ionicons name="images-outline" size={ICON_SIZE} color={"gray"} />
          <View style={styles.permissionText}>
            <ThemedText type="subtitle">Gallery</ThemedText>
            <ThemedText>사진을 불러올 때 사용합니다.</ThemedText>
          </View>

          <Switch
            trackColor={{ true: "orange" }}
            value={mediaLibraryPermission?.granted}
            // @ts-ignore
            onChange={async () => await requestMediaLibraryPermission()}
          />
        </View>
        <View style={styles.spacer} />
        <View style={styles.spacer} />
        <View style={styles.spacer} />

        <TouchableOpacity
          style={StyleSheet.compose(styles.row, styles.continueButton)}
          onPress={handleContinue}
        >
          <Ionicons
            name="arrow-forward-outline"
            color={"black"}
            size={ICON_SIZE}
          />
        </TouchableOpacity>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  subtitle: {
    textAlign: "center",
  },
  footnote: {
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  spacer: {
    marginVertical: 8,
  },
  permissionContainer: {
    backgroundColor: "#ffffff20",
    borderRadius: 10,
    padding: 10,
    justifyContent: "flex-start",
  },
  permissionText: {
    marginLeft: 10,
    flexShrink: 1,
    flexGrow: 1,
  },
  continueButton: {
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 50,
    alignSelf: "center",
  },
});
