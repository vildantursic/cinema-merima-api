import express from 'express';
import { Request, Response } from 'express';
const router = express.Router();
import { ObjectId } from 'bson';

import Food from '../../models/food/index.model';

/**
 *
 */
router.get('/food', (req: Request, res: Response) => {
  Food.find({}).exec((err: any, data: any) => {
    if (err) {
      throw Error;
    }

    res.json(data);
  });
});

/**
 *
 */
router.post('/food', (req: Request, res: Response) => {
  const food = new Food(req.body);
  food.save((err, data) => {
    if (err) {
      throw Error;
    }

    res.json(data);
  });
});

/**
 *
 */
router.put('/food/:id', (req: Request, res: Response) => {
  Food.findOneAndUpdate({ '_id': new ObjectId(req.params.id) }, req.body, {new: true}, (err, newData) => {
    if (err) {
      console.log(err);
    }

    res.json(newData);
  });
});

/**
 *
 */
router.delete('/food/:id', (req: Request, res: Response) => {
  res.json([]);
});

module.exports = router;
