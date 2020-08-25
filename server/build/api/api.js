"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = __importDefault(require("./metod/login"));
const registration_1 = __importDefault(require("./metod/registration"));
const getCode_1 = __importDefault(require("./metod/getCode"));
const verifyUserByCode_1 = __importDefault(require("./metod/verifyUserByCode"));
exports.default = {
    login: login_1.default,
    registration: registration_1.default,
    getCode: getCode_1.default,
    verifyUserByCode: verifyUserByCode_1.default
};
