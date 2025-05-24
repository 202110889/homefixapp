import CameraButton from "@/components/CameraButton";
import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet } from "react-native";

const Media = () => {
  const { media, type } = useLocalSearchParams();
  console.log(media);
  const router = useRouter();
  return (
    <ThemedView style={styles.container}>
      <Image
        source={{ uri: `file://${media}` }}
        style={{ width: "100%", height: "80%", resizeMode: "contain" }}
      />
      <CameraButton
        title="사진 사용하기"
        containerStyle={{ alignSelf: "center" }}
        onPress={() => {
          router.push({
            pathname: "../(search)/",
            params: { media: media },
          });
        }}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default Media;
