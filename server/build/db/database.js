"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Databse {
    constructor() {
        this.tables = {
            key: [],
            user: [],
            token: []
        };
    }
    findIndex(table, param) {
        this.addTable(table);
        let key = Object.keys(param)[0];
        return this.tables[table].findIndex((obj) => obj[key] === param[key]);
    }
    addTable(table) {
        if (!this.tables[table]) {
            this.tables[table] = [];
        }
    }
    add(table, data) {
        this.addTable(table);
        this.tables[table].push(data);
        return true;
    }
    remove(table, param) {
        var _a;
        this.addTable(table);
        let index = this.findIndex(table, param);
        (_a = this.tables[table]) === null || _a === void 0 ? void 0 : _a.splice(index, 1);
        return true;
    }
    get(table, param) {
        var _a;
        this.addTable(table);
        let key = Object.keys(param)[0];
        return ((_a = this.tables[table]) === null || _a === void 0 ? void 0 : _a.find((obj) => obj[key] === param[key])) || null;
    }
    update(table, param, newData) {
        var _a, _b, _c, _d, _e, _f;
        this.addTable(table);
        let key = Object.keys(param)[0];
        let newKey = Object.keys(newData)[0];
        let index = this.findIndex(table, param);
        let isExist = !!((_c = (_b = (_a = this.tables) === null || _a === void 0 ? void 0 : _a[table]) === null || _b === void 0 ? void 0 : _b[index]) === null || _c === void 0 ? void 0 : _c[newKey]);
        if (isExist) {
            // @ts-ignore
            (_f = (_e = (_d = this.tables) === null || _d === void 0 ? void 0 : _d[table]) === null || _e === void 0 ? void 0 : _e[index]) === null || _f === void 0 ? void 0 : _f[newKey] = newData[newKey];
            return true;
        }
        return false;
    }
    getAll() {
        return this.tables;
    }
}
exports.default = new Databse();
