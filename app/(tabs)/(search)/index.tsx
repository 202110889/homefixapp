import React, { createContext, useState } from "react";

export const MediaContext = createContext("");
const Search = () => {
  const [media, setMedia] = useState([]);
  // useLocalSearchParams().media;
  console.log(MediaContext);
  return <MediaContext.Provider value={media}></MediaContext.Provider>;
};

export default Search;
