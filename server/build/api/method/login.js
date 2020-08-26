"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(login) {
    let isUser = this.checkUser(login);
    let code = this.getCode(login);
    let failData = {
        message: 'Такого аккаунта не существует',
        result: false
    };
    let succesData = {
        result: true,
        message: '',
        attemptId: '123',
        channel: '123',
        code
    };
    return isUser ? succesData : failData;
}
exports.default = default_1;
