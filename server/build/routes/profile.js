"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("../api/api"));
const router = express_1.default();
//PROFILE
router.get('/', (req, res) => {
    res.send('adwadaw');
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
    let data = api_1.default.verifyUserByCode(code);
    res.send(Object.assign({}, data));
});
exports.default = router;
