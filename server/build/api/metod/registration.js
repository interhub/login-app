"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../db/database"));
function default_1(login) {
    let user = {
        login,
        name: '',
        create_at: Date.now()
    };
    let isExist = database_1.default.get("user" /* user */, { login });
    if (!isExist) {
        database_1.default.add("user" /* user */, Object.assign({}, user));
        this.updateToken(login);
        return { message: '', result: true };
    }
    //fail - user not exist
    return { message: 'Не удалось создать аккаунт', result: false };
}
exports.default = default_1;
