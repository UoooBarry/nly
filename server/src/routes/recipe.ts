import express from 'express';
import Recipe from '../models/recipe';

const router = express.Router();

router.get('/', (req, res) => {
  Recipe.find({}, (err, recipes) => {
    if (err) {
      res.json({ status: 'ok', payload: { message: err } });
    }
    res.json({ status: 'ok', payload: { recipes } });
  });
});

router.get('/:id', (req, res) => {
  Recipe.findById(req.params.id, (err: any, recipe: typeof Recipe) => {
    if (err) {
      res.json({ status: 'ok', payload: { message: err } });
    }
    res.json({ status: 'ok', payload: { recipe } });
  });
});

router.post('/', (req, res) => {
  Recipe.create(req.body, (err: any, recipe: typeof Recipe) => {
    if (err) {
      res.json({ status: 'ok', payload: { message: err } });
    }
    res.json({ status: 'ok', payload: { recipe } });
  });
});

router.put('/:id', (req, res) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body, (err: any, recipe: typeof Recipe) => {
    if (err) {
      res.json({ status: 'ok', payload: { message: err } });
    }
    let newRecipe = Object.assign(recipe, req.body);
    res.json({ status: 'ok', payload: { newRecipe } });
  });
});

export default router;
