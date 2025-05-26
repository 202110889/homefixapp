import { useLocalSearchParams } from "expo-router";
import React, { createContext, useState } from "react";
import { Image } from "react-native";

export const MediaContext = createContext("");
const Search = () => {
  const [media, setMedia] = useState(useLocalSearchParams().media);
  // useLocalSearchParams().media;
  console.log(MediaContext);
  return (
    <>
      <Image
        source={{ uri: `file://${media}` }}
        style={{ width: "100%", height: "80%", resizeMode: "contain" }}
      />
    </>
  );
};

export default Search;
