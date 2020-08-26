"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../db/database"));
function default_1(login) {
    let newCode = Array(4).fill(1).map(() => Math.floor(Math.random() * 10)).join('');
    let code = database_1.default.get("key" /* key */, { login });
    if (code) {
        database_1.default.update("key" /* key */, { login }, { code: newCode });
    }
    else {
        database_1.default.add("key" /* key */, { code: newCode, login });
    }
    return newCode;
}
exports.default = default_1;
