"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
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
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('SERVAK)))))');
});
const PORT = 3001;
app.listen(PORT, () => {
    console.log('SERVER START ON PORT ', PORT);
});
