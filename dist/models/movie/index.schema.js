"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const movieSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    image: String,
    price: {
        type: Number,
        required: true
    },
    time: {
        type: [String],
        required: true
    },
    times: {
        type: [{
                time: String,
                available: {
                    type: Boolean,
                    default: true
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
            }],
        required: true
    },
    theater: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Theater'
    }
});
exports.default = movieSchema;
//# sourceMappingURL=index.schema.js.map