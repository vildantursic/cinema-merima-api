"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const index_model_1 = __importDefault(require("../../models/user/index.model"));
/**
 *
 */
router.post('/login', (req, res) => {
    index_model_1.default.findOne(req.body, (err, data) => {
        if (err) {
            console.log(err);
        }
        res.json('token');
    });
});
/**
 *
 */
router.post('/register', (req, res) => {
    const user = new index_model_1.default(req.body);
    user.save((err, data) => {
        if (err) {
            throw Error;
        }
        res.json(data);
    });
});
module.exports = router;
//# sourceMappingURL=index.js.map