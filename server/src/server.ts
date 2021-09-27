import express from "express";
import './config/database';
import seed from './data/seed';

import categoryRouter from './routes/category'

const app = express();
const port = 3000; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use('/api/categories', categoryRouter);

// start the Express server
app.listen(port, () => {
  // Run seed data
  seed();
});
