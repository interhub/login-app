"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = __importDefault(require("./metod/login"));
const registration_1 = __importDefault(require("./metod/registration"));
const getCode_1 = __importDefault(require("./metod/getCode"));
const verifyUserByCode_1 = __importDefault(require("./metod/verifyUserByCode"));
const checkToken_1 = __importDefault(require("./metod/checkToken"));
const updateToken_1 = __importDefault(require("./metod/updateToken"));
class API {
    constructor() {
        this.login = login_1.default.bind(this);
        this.registration = registration_1.default.bind(this);
        this.getCode = getCode_1.default.bind(this);
        this.verifyUserByCode = verifyUserByCode_1.default.bind(this);
        this.updateToken = updateToken_1.default.bind(this);
        this.checkToken = checkToken_1.default.bind(this);
    }
}
exports.default = new API();
