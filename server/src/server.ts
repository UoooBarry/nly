import express from "express";
import cors from 'cors';
import './config/database';
import seed from './data/seed';

import logger from 'morgan';

import categoryRouter from './routes/category';
import recipeRouter from './routes/recipe';
import letterRouter from './routes/letter';

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cors());
app.get('env') === 'production' ? app.use(logger('combined')) : app.use(logger('dev'));

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
