import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
// import {getTopRatedMovies} from '../api/tmdb-api'
import {getTopRatedMovies} from '../api/movie-api'
import  AddToFavouriteIcon from "../components/cardIcons/addToFavorites"


const TopRatedMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('toprated', getTopRatedMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

   

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavouriteIcon movie={movie} />
      }}
    />
);
};

export default TopRatedMoviesPage;