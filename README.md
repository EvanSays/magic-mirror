# Movie Tracker

  This project is working off the The Movie DB API (https://www.themoviedb.org/documentation/api - note you'll need to go create an account to get an API key). The idea of the project is to be able to sign in as a user and save favorite movies. Pretty simple right? HA HA not!

  Bc this is still in beta here is what you'll need to know.
  * Using PostgreSQL
  * Setting up steps:
    * `npm install`
    * `createdb` - assuming you have postgreSQL
    * `psql -f ./src/sql/users.sql`
    * `npm start` - visit `/api/users` - should see a json response.
  * 2 APIs - MovieDB and your very own api
  * Fetch upcoming movies from MovieDB


### API
  Hopefully you will be using fetch to make all your api calls. If you are making a post request note that you will need to pass in headers - with a `'Content-Type': 'application/json'`. Additionally you will need to pass any any required fields into the body.

###### Users

 * ##### Sign In `/api/users`

  To sign in you will need to pass in *email* and *password* to the *body*.
  Emails should be sent in all lowercase. - ex: `{..., body: {email: 'tim@aol.com', password: 'password'} }`
  The database starts off with a single user inside. -> { email: tman2272@aol.com password: password }. Keep in mind the response will send the entire user back.

* ##### Create Account - `/api/users/new`
  Creating an account must have all input fields filled in (name, email, password)
  You must send all three into the body. Passwords are case sensitive.
  Keep in mind the response only gives the new user ID.

* ##### Add Favorite - `/users/favorites/new`
  To save a favorite you must send into the body: movie_id, user_id and title, poster_path, release_date, vote_average, overview.
  Keep in mind the response only gives the new favorite id

* ##### Receive All Favorites - `/users/:id/favorites`
  To get a users favorite movies you need to send in the user ID through the params. This will return an array favorite objects.

* ##### Delete a Favorite - `/users/:id/favorites/:favID`
  To delete a users favorite you must send in the users id and id of the movie.

### Iterations

##### Iteration 0: Pull in movie API
  * Pull most recent movies from MovieDB API.
  * Display each movie on root index `/`

##### Iteration 1: Sign In / Sign Out Functionality
  * Be able to sign in on page `/login` and redirect user to `/`
    * Flash "Email and Password do not match" - if password is incorrect
  * Ability to create a user.
    * Flash "Email has already been used" - if email has been taken
  * Should only take legit emails - regex - Extension

##### Iteration 2: Favorites
  * Each movie should be displayed with a favorite button.
  * If the user is not signed in and clicks on a favorite button the user will be prompted with the request to create an account.
  * Validate favorites before adding to db. Aka does that user already have the movie stored as favorites.
  * If the user visits `/favorites` they should see a list of all their favorite movies.
  * Once on `/favorites` the user should have the option to delete the movie.
