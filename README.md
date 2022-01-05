# Assignment 2 - Web API.
Name: Adam Boland

# Features.
Feature 1 - Login Feature added + validation
Feature 2 - Logout Feature added
Feature 3 - PrivateRoutes added so user must sign in to acess site
Feature 4 - Updated API link so upcoming, trending, genres now no longer contact TMDB directly and use my own API


# React App: 
npm install

# API Configuration
REACT_APP_TMDB_KEY=
FAST_REFRESH=false

# API Design
Similar to before, new login added when app is loaded up

# Security and Authentication
All Routes Protected bar login and sign up so user needs to sign in before moving into the site

# Integrating with React App
I migrated each api call 1 by 1 to point to my api which then points to tmdb. 
I used proxy 8080 so my react app knew where to look for the api calls. (This can be used in postman to load new users/ movies) 

