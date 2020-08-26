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
const database_1 = __importDefault(require("./db/database"));
const app = express_1.default();
app.use(cookie_parser_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// let data= api.registration('89622639809')
// console.log(data)
// console.log(api.verifyUserByCode(data.code))
app.get('/', (req, res) => {
    console.log(database_1.default.getAll());
    res.send('TEST SERVER');
});
app.use('/account/profile', profile_1.default);
app.use('/session', session_1.default);
app.listen(PORT_1.default, () => {
    console.log('SERVER START ON PORT', PORT_1.default);
});
