import express from 'express';
import { Request, Response } from 'express';
const router = express.Router();

import Theater from '../../models/theater/index.model';

/**
 *
 */
router.get('/theater', (req: Request, res: Response) => {
  res.json([]);
});

/**
 *
 */
router.post('/theater', (req: Request, res: Response) => {
  const item = req.body;
  item['space'] = [];
  let seats: any = [];
  ['A', 'B', 'C', 'D', 'E', 'F', 'G'].forEach((row) => {
    for (let i = 0; i < 8; i++) {
      seats.push({
        seat: i,
        available: true
      });
    }
    item['space'].push({
      row: row,
      seats: seats
    });
    seats = [];
  });

  const theater = new Theater(item);
  theater.save((err, data) => {
    if (err) {
      throw Error;
    }

    res.json(data);
  });
});

/**
 *
 */
router.put('/theater/:id', (req: Request, res: Response) => {
  res.json([]);
});

/**
 *
 */
router.delete('/theater/:id', (req: Request, res: Response) => {
  res.json([]);
});

module.exports = router;
