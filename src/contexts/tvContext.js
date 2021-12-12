import React, { useState } from "react";

export const TvContext = React.createContext(null);

const TvContextProvider = (props) => {
  const [favoritetv, setTvFavorites] = useState( [] )  

  const addToTvFavorites = (show) => {
    setTvFavorites([...favoritetv,show.id])
  };
  // We will use this function in a later section
  const removeFromTvFavorites = (show) => {
    setTvFavorites( favoritetv.filter(
      (mId) => mId !== show.id
    ) )
  };
  
  return (
    <TvContext.Provider
      value={{
        favoritetv,
        addToTvFavorites,
        removeFromTvFavorites,
      }}
    >
      {props.children}
    </TvContext.Provider>
  );
};

export default TvContextProvider;