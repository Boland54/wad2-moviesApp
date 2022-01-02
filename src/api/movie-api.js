export const getUpcomingMovies = () => {
    return fetch(
       '/api/movies/tmdb/upcoming',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json())
    .then(res => console.log(res));
  };


  export const getTrendingMovies = () => {
    return fetch(
       '/api/movies/tmdb/trending',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json())
    .then(res => console.log(res));
  };

  export const getTopRatedMovies = () => {
    return fetch(
       '/api/movies/tmdb/toprated',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json())
    .then(res => console.log(res));
  };