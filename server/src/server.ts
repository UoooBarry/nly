import express from "express";
import './config/database';
import seed from './data/seed';

const app = express();
const port = 3000; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
  // Run seed data
  seed();
});
