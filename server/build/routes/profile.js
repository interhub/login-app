"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const types_1 = require("../types/types");
const api_1 = __importDefault(require("../api/api"));
const database_1 = __importDefault(require("../db/database"));
const router = express_1.default();
//PROFILE
router.get('/', (req, res, next) => {
    const { token } = req.headers;
    let { login } = database_1.default.get("token" /* token */, { token }) || { login: '' };
    let user = database_1.default.get("user" /* user */, { login });
    let data = user ? Object.assign(Object.assign(Object.assign({}, user), types_1.ProfileUser), { result: true }) :
        {
            result: false,
            message: ''
        };
    res.send(Object.assign({}, data));
    next();
});
//REGISTRATION
router.post('/', (req, res) => {
    let { login } = req.body;
    if (!login)
        return console.log('NOT LOGIN');
    let data = api_1.default.registration(login);
    res.send(Object.assign({}, data));
});
//LOGIN
router.post('/login', (req, res) => {
    const { login } = req.body;
    if (!login)
        return console.log('NOT LOGIN');
    const data = api_1.default.login(login);
    res.send(Object.assign({}, data));
});
//VALIDATE CODE
router.post('/login/confirm', (req, res) => {
    const { code } = req.body;
    let result = api_1.default.verifyUserByCode(code);
    let data = Object.assign(Object.assign(Object.assign({}, types_1.ConfirmUser), result), { success: result.result });
    res.send(Object.assign({}, data));
});
exports.default = router;
