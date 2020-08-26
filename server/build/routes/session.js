"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("../api/api"));
const database_1 = __importDefault(require("../db/database"));
const router = express_1.default();
router.post('/guest', (req, res) => {
    let { login } = req.body;
    let tokenObj = database_1.default.get("token" /* token */, { login });
    if (!tokenObj) {
        api_1.default.updateToken(null, login);
        tokenObj = database_1.default.get("token" /* token */, { login });
    }
    res.send(Object.assign({}, tokenObj));
});
router.post('/refresh', (req, res) => {
    const { token } = req.headers;
    if (!token)
        return console.log('NOT TOKEN');
    let { login } = database_1.default.get("token" /* token */, { token }) || { login: '' };
    api_1.default.updateToken(token);
    let newTokenObj = database_1.default.get("token" /* token */, { login }) || {
        result: false,
        message: ''
    };
    res.send(Object.assign({}, newTokenObj));
});
exports.default = router;
