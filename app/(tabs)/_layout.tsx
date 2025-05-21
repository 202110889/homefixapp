// show nav only in this screen
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground } from "react-native";

const _Layout = () => {
  return (
    // Bottom Nav bar
    <Tabs>
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
        name="camera"
        options={{
          title: "Camera",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="permissions"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _Layout;
