import React, { useState } from "react";

export const TvContext = React.createContext(null);

const TvContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  

  const addToTvFavorites = (tv) => {
    setFavorites([...favorites,tv.id])
  };
  
  return (
    <TvContext.Provider
      value={{
        favorites,
        addToTvFavorites
      }}
    >
      {props.children}
    </TvContext.Provider>
  );
};

export default TvContextProvider;