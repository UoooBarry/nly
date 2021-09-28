import express from "express";
import './config/database';
import seed from './data/seed';

import categoryRouter from './routes/category';
import recipeRouter from './routes/recipe';

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

const port = 3000; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use('/api/categories', categoryRouter);
app.use('/api/recipes', recipeRouter);

// start the Express server
app.listen(port, () => {
  // Run seed data
  seed();
});
