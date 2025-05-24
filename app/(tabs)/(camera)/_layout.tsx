// show nav only in this screen
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground } from "react-native";

const CameraLayout = () => {
  return (
    // Bottom Nav bar
    <Tabs screenOptions={{ lazy: true }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: () => {
            return (
              <>
                <ImageBackground source={require("@/assets/images/icon.png")}>
                  <Image source={require("@/assets/images/favicon.png")} />
                </ImageBackground>
              </>
            );
          },
        }}
      />
      <Tabs.Screen
        name="cameraview"
        options={{
          title: "Camera",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="permissions"
        options={{
          title: "Permissions",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default CameraLayout;
