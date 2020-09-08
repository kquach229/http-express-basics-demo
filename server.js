// Require http module
const http = require("http");

// Require the file system module
const fs = require("fs");

// Invoke the createServer method from the http module and store in "server" variable
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // Set header
  res.setHeader("Content-Type", "text/html");

  // Set main path
  let path = "./views/";

  // Set switch case statements for view urls depending on url path
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;

    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;

    // Redirect page to the about.html page  when user visits "about-me" path and set status code to 301
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;

    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
    }
  });
});

// Listen to the server on port 3000
server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
