import express from 'express';
import { Request, Response } from 'express';
const router = express.Router();

import Reservation from '../../models/reservation/index.model';

/**
 *
 */
router.get('/reservation', (req: Request, res: Response) => {
  res.json([]);
});

/**
 *
 */
router.post('/reservation', (req: Request, res: Response) => {
  res.json([]);
});

/**
 *
 */
router.put('/reservation/:id', (req: Request, res: Response) => {
  res.json([]);
});

/**
 *
 */
router.delete('/reservation/:id', (req: Request, res: Response) => {
  res.json([]);
});

module.exports = router;
