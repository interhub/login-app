"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const PORT_1 = __importDefault(require("./config/PORT"));
const api_1 = __importDefault(require("./api/api"));
const database_1 = __importDefault(require("./db/database"));
//TODO DATABASE TEST DOCS
// console.log(DB.getAll())
// DB.add('tabs', {id: 12})
// DB.add('tabs', {id: 15})
// console.log(DB.getAll())
// DB.update('tabs', {id: 15}, {name: 16})
// console.log(DB.getAll())
// DB.remove('tabs', {name: 16})
// console.log(DB.getAll())
// API.registration('hi')
const app = express_1.default();
app.use(cookie_parser_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
api_1.default.registration('89622639809');
api_1.default.registration('89622639809');
console.log(database_1.default.getAll());
app.get('/', (req, res) => {
    res.send('SERVAK)))))');
});
app.listen(PORT_1.default, () => {
    console.log('SERVER START ON PORT', PORT_1.default);
});
