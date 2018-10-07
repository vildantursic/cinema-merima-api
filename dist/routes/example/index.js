"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/**
 *
 */
router.get('/example', (req, res) => {
    res.send('W-API example GET');
});
/**
 *
 */
router.post('/example', (req, res) => {
    res.send('W-API example POST');
});
/**
 *
 */
router.put('/example/:id', (req, res) => {
    res.send('W-API example PUT');
});
/**
 *
 */
router.delete('/example/:id', (req, res) => {
    res.send('W-API example DELETE');
});
module.exports = router;
//# sourceMappingURL=index.js.map