import express from 'express';
import Recipe, { IRecipe } from '../models/recipe';
import Category from '../models/category';

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
  Recipe.findById(req.params.id, (err: any, recipe: IRecipe) => {
    if (err) {
      res.json({ status: 'ok', payload: { message: err } });
    }
    res.json({ status: 'ok', payload: { recipe } });
  });
});

router.post('/', (req, res) => {
  Recipe.create(req.body, async (err: any, recipe: IRecipe) => {
    if (err) {
      res.json({ status: 'ok', payload: { message: err } });
    }
    await Category.findByIdAndUpdate(req.body.category, { $push: { recipes: recipe._id } })
    res.json({ status: 'ok', payload: { recipe } });
  });
});

router.put('/:id', (req, res) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body, (err: any, recipe: IRecipe) => {
    if (err) {
      res.json({ status: 'ok', payload: { message: err } });
    }
    const newRecipe = Object.assign(recipe, req.body);
    res.json({ status: 'ok', payload: { newRecipe } });
  });
});

export default router;
