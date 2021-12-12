import React, { useContext } from "react";
import PageTemplate from "../components/templateTvListPage";
import { TvContext } from "../contexts/tvContext";
import { useQueries } from "react-query";
import { getTVShows } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromTvFavorites from "../components/cardIcons/removeFromTvFavourites";

const FavoriteTvShowPage = () => {
  const {favoritetv: showsIds } = useContext(TvContext);

  // Create an array of queries and run in parallel.
  const tvfavoriteShowQueries = useQueries(
    showsIds.map((showsId) => {
      return {
        queryKey: ["show", { id: showsId }],
        queryFn: getTVShows,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = tvfavoriteShowQueries.find((s) => s.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const shows = tvfavoriteShowQueries.map((q) => q.data);


  return (
    <PageTemplate
      title="Favorite Tv Shows"
      shows={shows}
      action={(show) => {
        return (
          <>
            <RemoveFromTvFavorites show={show} />
            
          </>
        );
      }}
    />
  );
};

export default FavoriteTvShowPage;