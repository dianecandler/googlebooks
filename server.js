const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;
// added after setting up Mongodb atlas.cloud to save file in Heroku
require("dotenv").config();

const mongoose = require("mongoose");

const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view - order matters here
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true,
useFindAndModify: false, useUnifiedTopology: true }
);

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
  