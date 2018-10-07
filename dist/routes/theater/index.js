"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const index_model_1 = __importDefault(require("../../models/theater/index.model"));
/**
 *
 */
router.get('/theater', (req, res) => {
    res.json([]);
});
/**
 *
 */
router.post('/theater', (req, res) => {
    const item = req.body;
    item['space'] = [];
    let seats = [];
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
    const theater = new index_model_1.default(item);
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
router.put('/theater/:id', (req, res) => {
    res.json([]);
});
/**
 *
 */
router.delete('/theater/:id', (req, res) => {
    res.json([]);
});
module.exports = router;
//# sourceMappingURL=index.js.map