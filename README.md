## TV Timer

An app that allows users to search for films, takes break number and duration inputs, and calculates either what time the film will finish at given a start time, or what time the user needs to start at in order to finish by a certain time. 

Features a React based front-end, an ExpressJS based back-end, and consumes The Movie Database API (https://developers.themoviedb.org/3/getting-started/introduction).

It can be found hosted at https://tv-timer.herokuapp.com/

To get your own copy working, clone this repository, run npm install, and then npm run server. You should find it working on http://localhost:8080/.

Issues that need solving:
- Make the calculator page smaller
- Remove backdrop if the user navigates back from final page
- Add input labels
- Add input validation
- Make responsive
- Add powered by The Movie Database somewhere
- Look into why films sometimes don't load posters
- Add error boundaries
- Get rid of console logs

Extras:
- Add icons to buttons
- Add option to toggle unpopular films
- Add sorting options
- Add toggle for adult films
- Try out brightness filter on backdrop
