import express from 'express';
import { Request, Response } from 'express';
const router = express.Router();

import User from '../../models/user/index.model';

/**
 *
 */
router.post('/login', (req: Request, res: Response) => {
  User.findOne(req.body, (err, data) => {
    if (err) {
      console.log(err);
    }

    res.json('token');
  });
});

/**
 *
 */
router.post('/register', (req: Request, res: Response) => {
  const user = new User(req.body);
  user.save((err, data) => {
    if (err) {
      throw Error;
    }

    res.json(data);
  });
});

module.exports = router;
