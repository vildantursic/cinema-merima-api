"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const index_schema_1 = __importDefault(require("./index.schema"));
const Example = mongoose_1.default.model('Example', index_schema_1.default);
exports.default = Example;
//# sourceMappingURL=index.model.js.map