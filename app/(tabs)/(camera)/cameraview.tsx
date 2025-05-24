import { Colors } from "@/constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { Redirect, useRouter } from "expo-router";
// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from "react-native-vision-camera";

const CameraView = () => {
  const router = useRouter();
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice("back");
  console.log(device);
  console.log(hasPermission);

  const camera = React.useRef<Camera>(null);
  const takePicture = async () => {
    try {
      if (camera.current == null) throw new Error("Camera ref is null");
      console.log("Taking a Picture...");
      const photo = await camera.current.takePhoto({
        enableShutterSound: true,
      });
      router.push({
        pathname: "/media",
        params: { media: photo.path, type: "photo" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (hasPermission === false) {
    console.log("redirecting");
    return <Redirect href="/(tabs)/(camera)/permissions" />;
  }

  if (!device || hasPermission === undefined) {
    console.log("device not found");
    return <View />;
  }
  console.log("Camera view");
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 7, borderRadius: 20, overflow: "hidden" }}>
          <Camera
            ref={camera}
            style={{ flex: 1 }}
            device={device}
            isActive={true}
            photo={true}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: Colors.dark.background,
          }}
        >
          <TouchableHighlight onPress={takePicture}>
            <FontAwesome5
              name="dot-circle"
              size={55}
              color={"white"}
            ></FontAwesome5>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
});

export default CameraView;
