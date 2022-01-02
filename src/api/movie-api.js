
export const getUpcomingMovies = () => {
    return fetch(
       '/api/movies/tmdb/upcoming'
    ).then(res => res.json())
    .then(res => console.log(res));
  };


  export const getTrendingMovies = () => {
    return fetch(
       '/api/movies/tmdb/trending'
    ).then(res => res.json())
    .then(res => console.log(res));
  };

  export const getTopRatedMovies = () => {
    return fetch(
       '/api/movies/tmdb/toprated'
    ).then(res => res.json())
    .then(res => console.log(res));
  };