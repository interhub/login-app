"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../db/database"));
function default_1(login) {
    return !!database_1.default.get("key" /* key */, { login });
}
exports.default = default_1;
