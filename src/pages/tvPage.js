import React from "react";
import PageTemplate from "../components/templateTvListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTVShows} from '../api/tmdb-api'
import AddToTvFavouritesIcon from '../components/cardIcons/addToTvFavourites'



const TvPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('tv', getTVShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvs = data.results;

    // Redundant, but necessary to avoid app crashing.
    const favoritetv = tvs.filter(m => m.favorite)
    localStorage.setItem('tv', JSON.stringify(favoritetv))

  return (
    <PageTemplate
      title="Discover Tv Shows"
      tvs={tvs}
      action={(tv) => {
        return <AddToTvFavouritesIcon tv={tv} />
      }}
    
    />    
  );
};

export default TvPage;