"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../db/database"));
function default_1(code) {
    let result = !!database_1.default.get("key" /* key */, { code });
    if (result) {
        database_1.default.remove("key" /* key */, { code });
    }
    return { result, message: '' };
}
exports.default = default_1;
