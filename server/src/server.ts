import express from "express";
import cors from 'cors';
import './config/database';
import seed from './data/seed';

import categoryRouter from './routes/category';
import recipeRouter from './routes/recipe';
import letterRouter from './routes/letter';

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cors());

const port = 3000; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use('/api/categories', categoryRouter);
app.use('/api/recipes', recipeRouter);
app.use('/api/letters', letterRouter);

// start the Express server
app.listen(port, () => {
  // Run seed data
  seed();
});
