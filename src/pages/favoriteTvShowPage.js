import React, { useContext } from "react";
import PageTemplate from "../components/templateTvListPage";
import { TvContext } from "../contexts/tvContext";
import { useQueries } from "react-query";
import { getTv } from "../api/tmdb-api";
import Spinner from '../components/spinner';

const FavoriteTvShowPage = () => {
  const {favorites: tvIds } = useContext(TvContext);

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
      title="Favorite Tv Shows"
      tvshows={tvshows}
    />
  );
};

export default FavoriteTvShowPage;