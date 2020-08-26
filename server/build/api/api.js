"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = __importDefault(require("./method/login"));
const registration_1 = __importDefault(require("./method/registration"));
const getCode_1 = __importDefault(require("./method/getCode"));
const verifyUserByCode_1 = __importDefault(require("./method/verifyUserByCode"));
const checkToken_1 = __importDefault(require("./method/checkToken"));
const updateToken_1 = __importDefault(require("./method/updateToken"));
const checkUser_1 = __importDefault(require("./method/checkUser"));
class API {
    constructor() {
        this.login = login_1.default.bind(this);
        this.registration = registration_1.default.bind(this);
        this.getCode = getCode_1.default.bind(this);
        this.verifyUserByCode = verifyUserByCode_1.default.bind(this);
        this.updateToken = updateToken_1.default.bind(this);
        this.checkToken = checkToken_1.default.bind(this);
        this.checkUser = checkUser_1.default.bind(this);
    }
}
exports.default = new API();
