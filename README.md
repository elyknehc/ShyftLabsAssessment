# ShyftLabsAssessment


Stack:
Next.js, MongoDB, Node.js, Express.js

# Running the Backend
To get started, clone the repository

Change directory into the backend and run npm i in the terminal to install required dependencies

Start up the backend using node server.js

_Notes:_
_I did not use an .env file because there would only be two people accessing this repo, me and whoever is looking over the code.
In a real scenario, I would be using an .env file to restrict information for the mongoose connection link.
The MongoDB connection should allow anyone to connect. If you have issues connecting to it please let me know and I can whitelist your IP if needed._
_Port runs on localhost:3000._

# Running the Frontend

Change directory into client

Run npm i in the terminal to install required dependencies

Run npm run dev to start up the client (frontend), port runs on any host that is not 3000.

# Notes:
I completed the home page, consisting of the navigation bar.
Head to the students page, where you can add a student and validates the inputs - then displays all of the user information from the backend.
API requests are done through axios.

# Design choices:
Next.js because of easily built in navigation.
Express.js and Node.js to set up an API
MongoDB for scalibility and Mongoose allows for easy object mapping.
