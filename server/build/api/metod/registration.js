"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const updateToken_1 = __importDefault(require("./updateToken"));
const database_1 = __importDefault(require("../../db/database"));
exports.default = (login) => {
    let user = {
        login,
        name: '',
        create_at: Date.now()
    };
    let isExist = database_1.default.get("user" /* user */, { login });
    if (!isExist) {
        database_1.default.add("user" /* user */, Object.assign({}, user));
    }
    updateToken_1.default(login);
};
