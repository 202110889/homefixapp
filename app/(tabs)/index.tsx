import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "blue",
          fontSize: 50,
        }}
      >
        Welcome
      </Text>
      <Text>Open Camera</Text>
    </View>
  );
}

// one screen for one route
// route grouping: 상위 디렉토리를 소괄호로로 감싸 표기되지 않게 함.
// 