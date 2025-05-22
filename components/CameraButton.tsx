import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React, { ComponentProps } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface CameraButtonProps {
  onPress: () => void;
  title?: string;
  iconName?: ComponentProps<typeof Ionicons>["name"];
  containerStyle?: StyleProp<ViewStyle>;
  iconSize?: number;
}

const CameraButton = ({
  onPress,
  iconName,
  title,
  containerStyle,
  iconSize,
}: CameraButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: Colors.dark.background,
          borderRadius: title ? 6 : 40,
          alignSelf: "flex-start",
        },
        containerStyle,
      ]}
    >
      {iconName && (
        <Ionicons name={iconName} size={iconSize ?? 20} color="white" />
      )}
      {title ? (
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: "white",
          }}
        >
          {title}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};

export default CameraButton;

const styles = StyleSheet.create({
  container: {
    padding: 7,
    borderRadius: 40,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
});
