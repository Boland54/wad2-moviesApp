import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getTv } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";

const FavoriteTvShowPage = () => {
  const {favorites: tvIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const favoriteTvShowQueries = useQueries(
    tvIds.map((tvId) => {
      return {
        queryKey: ["tv", { id: tvId }],
        queryFn: getTv,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteTvShowQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const tvshows = favoriteTvShowQueries.map((q) => q.data);

  return (
    <PageTemplate
      title="Favorite Movies"
      tvshows={tvshows}
      action={(tv) => {
        // return (
        //   <>
        //     <RemoveFromFavorites tv={tv} />
        //     <WriteReview tv={tv} />
        //   </>
        // );
      }}
    />
  );
};

export default FavoriteTvShowPage;