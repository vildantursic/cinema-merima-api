"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const bson_1 = require("bson");
const index_model_1 = __importDefault(require("../../models/food/index.model"));
/**
 *
 */
router.get('/food', (req, res) => {
    index_model_1.default.find({}).exec((err, data) => {
        if (err) {
            throw Error;
        }
        res.json(data);
    });
});
/**
 *
 */
router.post('/food', (req, res) => {
    const food = new index_model_1.default(req.body);
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
router.put('/food/:id', (req, res) => {
    index_model_1.default.findOneAndUpdate({ '_id': new bson_1.ObjectId(req.params.id) }, req.body, { new: true }, (err, newData) => {
        if (err) {
            console.log(err);
        }
        res.json(newData);
    });
});
/**
 *
 */
router.delete('/food/:id', (req, res) => {
    res.json([]);
});
module.exports = router;
//# sourceMappingURL=index.js.map