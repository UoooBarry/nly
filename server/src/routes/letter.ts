import express from 'express';
import Letter, { ILetter } from '../models/letter';

const router = express.Router();

router.get('/', (req, res) => {
  Letter.find({}).sort('-updatedAt').exec((err: any, letters: []) => {
    if (err) {
      res.json({ status: 'ok', payload: { message: err } });
    }
    res.json({ status: 'ok', payload: { letters } });
  });
});

router.post('/', (req, res) => {
  Letter.create(req.body, (err: any, letter: ILetter) => {
    if (err) {
      res.json({ status: 'ok', payload: { message: err } });
    }
    res.json({ status: 'ok', payload: { letter } });
  });
});

router.get('/:id', (req, res) => {
  Letter.findById(req.params.id, (err: any, letter: ILetter) => {
    if (err) {
      res.json({ status: 'ok', payload: { message: err } });
    }
    res.json({ status: 'ok', payload: { letter } });
  });
});

router.put('/:id', (req, res) => {
  Letter.findByIdAndUpdate(req.params.id, req.body, (err: any, letter: ILetter) => {
    if (err) {
      res.json({ status: 'ok', payload: { message: err } });
    }
    res.json({ status: 'ok', payload: { letter } });
  });
});

export default router;
