"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const PORT_1 = __importDefault(require("./config/PORT"));
const profile_1 = __importDefault(require("./routes/profile"));
const session_1 = __importDefault(require("./routes/session"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const app = express_1.default();
app.use(cookie_parser_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/account/profile', profile_1.default);
app.use('/session', session_1.default);
app.use(express_1.default.static(process.cwd() + '/build'));
app.get('*', (req, res) => {
    res.sendFile(process.cwd() + '/build/index.html');
});
app.listen(PORT_1.default, () => {
    console.log('SERVER START ON PORT', PORT_1.default);
    setInterval(function () {
        node_fetch_1.default("https://login-production.herokuapp.com/test")
            .then((r) => {
            console.log('update');
        });
    }, 200000); // every time update for dont sleep
});
