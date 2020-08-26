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
        create_at: Date.now(),
        udid: '123'
    };
    let isExist = database_1.default.get("user" /* user */, { login });
    if (!isExist) {
        database_1.default.add("user" /* user */, Object.assign({}, user));
        this.updateToken('', login);
        let code = this.getCode(login);
        return { message: '', result: true, code, attemptId: 'a955002f-9166-4a3c-8d1e-c488c9d772b7' }; //TODO FIX attemptId
    }
    //fail - user not exist
    return { message: 'Пользователь уже существует', result: false };
}
exports.default = default_1;
