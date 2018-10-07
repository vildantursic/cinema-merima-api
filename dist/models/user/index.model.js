"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const index_schema_1 = __importDefault(require("./index.schema"));
const User = mongoose_1.default.model('User', index_schema_1.default);
exports.default = User;
//# sourceMappingURL=index.model.js.map