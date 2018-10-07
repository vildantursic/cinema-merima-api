"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const foodSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L'],
        required: true
    },
    image: String,
    type: {
        type: String,
        enum: ['snack', 'drink', 'sweet'],
        required: true
    }
});
exports.default = foodSchema;
//# sourceMappingURL=index.schema.js.map