## TV Timer

An app that allows users to search for films, takes break number and duration inputs, and calculates either what time the film will finish at given a start time, or what time the user needs to start at in order to finish by a certain time.

Features a React based front-end, an ExpressJS based back-end, and consumes The Movie Database API (https://developers.themoviedb.org/3/getting-started/introduction).

It can be found hosted at https://tv-timer.herokuapp.com/. Apparently, free Heroku apps go to sleep after 30 minutes of inactivity, so it might be slow on the initial load.

To get your own copy working, clone this repository, then run ```docker-compose up --build```. You'll need to get your own API key from The Movie Database and make a .env file in the server folder with ```REACT_APP_API_KEY_BEARER=YOURAPIKEY```. You should be able to find it working on localhost:4000.

Issues that need solving:

- Make the calculator page smaller
- Add input labels
- Add input validation
- Make responsive
- Add powered by The Movie Database somewhere
- Look into why films sometimes don't load posters
- Get rid of console logs
- Work on reducing the number of requests
- Make results page look better when there's only one result

Extras:

- Add icons to buttons
- Add option to toggle unpopular films
- Add sorting options
- Add toggle for adult films
- Try out brightness filter on backdrop
