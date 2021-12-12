import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TvDetailPage from "./pages/tvDetailsPage";
import TvPage from './pages/tvPage';
import FavoriteTvShowPage from "./pages/favoriteTvShowPage"; // NEW
import AuthContextProvider from "./contexts/AuthContext";
import HomeLoginPage from './pages/HomeLoginpage'
import Loginpage from "./pages/LoginPage";
import Registerpage from "./pages/Registerpage";
import Profilepage from "./pages/Profilepage";
import TestPage from "./pages/TestPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <AuthContextProvider>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <SiteHeader />      {/* New Header  */}
    <MoviesContextProvider>
            {" "}
      <Switch>
          <Route exact path='/login' component={Loginpage} />
          <Route exact path='/register' component={Registerpage} />
          <Route exact path='/profile' component={Profilepage} />
          <Route exact path='/test' component={TestPage} />
          <Route
            exact
            path='/forgot-password'
            component={ForgotPasswordPage}
          />
          <Route
            exact
            path='/reset-password'
            component={ResetPasswordPage}
          />
      <Route exact path="/tv/favorites" component={FavoriteTvShowPage} />
      <Route exact path="/tv/discovertv" component={TvPage} />
      <Route path="/tv/:id" component={TvDetailPage} />
      <Route exact path="/movies/top-rated" component={TopRatedMoviesPage} />
      <Route exact path="/reviews/form" component={AddMovieReviewPage} />
      <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
      <Route path="/reviews/:id" component={MovieReviewPage} />
        <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route path="/movies/:id" component={MoviePage} />
        <Route path="/movies/all" component={HomePage} />
        <Route exact path="/" component={HomeLoginPage} />
        <Redirect from="*" to="/" />
      </Switch>
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </AuthContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));