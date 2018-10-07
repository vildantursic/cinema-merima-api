import express from 'express';
import { Request, Response } from 'express';
const router = express.Router();

import Movie from '../../models/movie/index.model';
import Theater from '../../models/theater/index.model';
import { ObjectId } from 'bson';

/**
 *
 */
router.get('/movie', (req: Request, res: Response) => {
  Movie.find({}).populate('theater').exec((err: any, data: any) => {
    if (err) {
      throw Error;
    }

    res.json(data);
  });
});

/**
 *
 */
router.get('/movie/:id', (req: Request, res: Response) => {
  Movie.findOne({ '_id': new ObjectId(req.params.id) }, (err, data) => {
    if (err) {
      throw Error;
    }

    res.json(data);
  });
});

/**
 *
 */
router.post('/movie', (req: Request, res: Response) => {
  const item = req.body;
  Theater.findOne({ '_id': new ObjectId(req.body.theater) }, (err, data: any) => {
    if (err) {
      console.log(err);
    }

    const space = data.space;
    item['times'] = item.time;
    item['times'] = item.times.map((time: string) => {
      return {
        time: time,
        space: space
      };
    });

    const movie = new Movie(item);
    movie.save((err, data) => {
      if (err) {
        console.log(err);
      }

      res.json(data);
    });
  });
});

/**
 *
 */
router.put('/movie/:id', (req: Request, res: Response) => {
  Movie.findOne({ '_id': new ObjectId(req.params.id) }, (err, data: any) => {
    if (err) {
      console.log(err);
    }
    const movie = data;
    const booked = req.body;
    if (booked.seats.length && data) {
      booked.seats.forEach((el: any) => {
        movie.times.filter((item: any) => item.time === booked.time)[0].space.map((r: any) => {
          if (r.row == el.row) {
            r.seats.map((s: any) => {
              if (s.seat == el.seat) {
                s.available = false;
              }
              return s;
            });
            return r;
          }
        });
      });

      movie.times.filter((item: any) => item.time === booked.time)[0].available = false;
      movie.times.filter((item: any) => item.time === booked.time)[0].space.filter((r: any) => {
        return r.seats.filter((s: any) => {
          if (s.available === true) {
            movie.times.filter((item: any) => item.time === booked.time)[0].available = true;
          }
        });
      });

      Movie.findOneAndUpdate({ '_id': new ObjectId(req.params.id) }, movie, {new: true}, (err, newData) => {
        if (err) {
          console.log(err);
        }

        res.json(newData);
      });
    }
  });
});

/**
 *
 */
router.delete('/movie/:id', (req: Request, res: Response) => {
  res.json([]);
});

module.exports = router;
