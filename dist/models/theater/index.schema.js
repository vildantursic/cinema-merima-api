"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const theaterSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    numberOfSeats: {
        type: Number,
        default: 40
    },
    space: {
        type: [
            {
                row: String,
                seats: [
                    {
                        seat: String,
                        available: Boolean
                    }
                ]
            }
        ],
        required: true
    }
});
exports.default = theaterSchema;
//# sourceMappingURL=index.schema.js.map