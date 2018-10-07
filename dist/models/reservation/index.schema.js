"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const reservationSchema = new mongoose_1.default.Schema({
    reservationTime: {
        type: Date,
        required: true
    },
    movieTime: Date,
    movie: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    theater: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Theater',
        required: true
    },
    price: {
        type: String,
        required: true
    },
    numberOfTickets: {
        type: Number,
        required: true,
        default: 1
    },
    seats: {
        type: [String],
        required: true
    },
    employee: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});
exports.default = reservationSchema;
//# sourceMappingURL=index.schema.js.map