const express = require("express");
const multer = require("multer");

const UserController = require("./controllers/UserController");
const EventController = require("./controllers/EventController");
const uploadConfig = require("./config/upload");

const routes = express.Router();
const upload = multer(uploadConfig);

// Routers
routes.get("/", (req, res) => {
  res.send("Hello F world!!");
});

// Event
routes.get("/event/:eventId", EventController.getEventId);
routes.post(
  "/event/create",
  upload.single("thumbnail"),
  EventController.createEvent
);

// User
routes.post("/user/register", UserController.createUser);
routes.get("/user/:userId", UserController.getUserById);

module.exports = routes;
