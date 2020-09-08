// Require express library
const express = require("express");

// Invoke the express library and store it  in  the "app" variable
const app = express();

// Create an event listener to listen to the port
app.listen(3000, () => {
  console.log("Listening on PORT 3000");
});

// Get the index.html file when user  visits below path
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

// Get the about.html file when user  visits below path
app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

// Redirect to about.html file when user visits "/about-us" path
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// Get the 404.html page when user enters a non existant url
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
