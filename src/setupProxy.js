const proxy = require("http-proxy-middleware");

// This is the proxy that forwards all request to /user to our server.

module.exports = function(app) {
  app.use(proxy("/user", { target: "http://localhost:5000/" }));
};
