"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../db/database"));
const crypto_1 = __importDefault(require("crypto"));
const getRandomString = () => crypto_1.default.createHash('sha256').update(crypto_1.default.randomBytes(10).toString()).digest('hex');
function default_1(oldToken, login) {
    let newToken = getRandomString();
    let isExistToken = this.checkToken(oldToken);
    if (isExistToken && !login) {
        database_1.default.update("token" /* token */, { token: oldToken }, { token: newToken });
        return true;
    }
    if (login) {
        let refresh_token = getRandomString();
        database_1.default.add("token" /* token */, { token: newToken, refresh_token, login });
        return true;
    }
    return false;
}
exports.default = default_1;
