const express = require("express");
const UserController = require("./controllers/UserController");
const routes = express.Router();

// Routers
routes.get("/", (req, res) => {
  res.send("Hello F world!!");
});

routes.post("/register", UserController.store);

module.exports = routes;
