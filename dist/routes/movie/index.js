"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const index_model_1 = __importDefault(require("../../models/movie/index.model"));
const index_model_2 = __importDefault(require("../../models/theater/index.model"));
const bson_1 = require("bson");
/**
 *
 */
router.get('/movie', (req, res) => {
    index_model_1.default.find({}).populate('theater').exec((err, data) => {
        if (err) {
            throw Error;
        }
        res.json(data);
    });
});
/**
 *
 */
router.get('/movie/:id', (req, res) => {
    index_model_1.default.findOne({ '_id': new bson_1.ObjectId(req.params.id) }, (err, data) => {
        if (err) {
            throw Error;
        }
        res.json(data);
    });
});
/**
 *
 */
router.post('/movie', (req, res) => {
    const item = req.body;
    index_model_2.default.findOne({ '_id': new bson_1.ObjectId(req.body.theater) }, (err, data) => {
        if (err) {
            console.log(err);
        }
        const space = data.space;
        item['times'] = item.time;
        item['times'] = item.times.map((time) => {
            return {
                time: time,
                space: space
            };
        });
        const movie = new index_model_1.default(item);
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
router.put('/movie/:id', (req, res) => {
    index_model_1.default.findOne({ '_id': new bson_1.ObjectId(req.params.id) }, (err, data) => {
        if (err) {
            console.log(err);
        }
        const movie = data;
        const booked = req.body;
        if (booked.seats.length && data) {
            booked.seats.forEach((el) => {
                movie.times.filter((item) => item.time === booked.time)[0].space.map((r) => {
                    if (r.row == el.row) {
                        r.seats.map((s) => {
                            if (s.seat == el.seat) {
                                s.available = false;
                            }
                            return s;
                        });
                        return r;
                    }
                });
            });
            movie.times.filter((item) => item.time === booked.time)[0].available = false;
            movie.times.filter((item) => item.time === booked.time)[0].space.filter((r) => {
                return r.seats.filter((s) => {
                    if (s.available === true) {
                        movie.times.filter((item) => item.time === booked.time)[0].available = true;
                    }
                });
            });
            index_model_1.default.findOneAndUpdate({ '_id': new bson_1.ObjectId(req.params.id) }, movie, { new: true }, (err, newData) => {
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
router.delete('/movie/:id', (req, res) => {
    res.json([]);
});
module.exports = router;
//# sourceMappingURL=index.js.map