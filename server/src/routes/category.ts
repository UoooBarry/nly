import express from 'express';
import Category from '../models/category';

const router = express.Router();

router.get('/', (req, res) => {
  Category.find({}, (err, categories) => {
    if (err) {
      res.json({ status: 'ok', payload: { message: err } });
    }
    res.json({ status: 'ok', payload: { categories } });
  });
});

router.get('/:id', (req, res) => {
  Category.findById(req.params.id, (err: any, category: typeof Category) => {
    if (err) {
      res.json({ status: 'ok', payload: { message: err } });
    }
    res.json({ status: 'ok', payload: { category } });
  });
});

router.post('/', (req, res) => {
  Category.create(req.body, (err: any, category: typeof Category) => {
    if (err) {
      res.json({ status: 'ok', payload: { message: err } });
    }
    res.json({ status: 'ok', payload: { category } });
  })
});

export default router;
