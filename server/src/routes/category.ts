import express from 'express';
import Category, { ICategory } from '../models/category';
import verifyToken from '../middleware/apiTokenVerify';

const router = express.Router();

router.get('/', (req, res) => {
  Category.find({}).populate({
    path:'recipes'
  }).exec((err, categories) => {
    if (err) {
      res.json({ status: 'ok', payload: { message: err } });
    }
    res.json({ status: 'ok', payload: { categories } });
  });
});

router.get('/:id', (req, res) => {
  Category.findById(req.params.id).populate({
    path:'recipes'
  }).exec((err, category) => {
    if (err) {
      res.json({ status: 'ok', payload: { message: err } });
    }
    res.json({ status: 'ok', payload: { category } });
  });
});

router.post('/', verifyToken, (req, res) => {
  Category.create(req.body, (err: any, category: ICategory) => {
    if (err) {
      res.json({ status: 'ok', payload: { message: err } });
    }
    res.json({ status: 'ok', payload: { category } });
  })
});

router.put('/:id', verifyToken, (req, res) => {
  Category.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, category) => {
    if (err) {
      res.json({ status: 'ok', payload: { message: err } });
    }
    res.json({ status: 'ok', payload: { category } });
  });
});

export default router;
