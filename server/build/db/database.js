"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Databse {
    constructor() {
        this.tables = {
            key: [],
            user: []
        };
    }
    findIndex(table, param) {
        this.addTable(table);
        let key = Object.keys(param)[0];
        return this.tables[table].findIndex((obj) => obj[key] === param[key]);
    }
    addTable(table = '') {
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
        this.addTable(table);
        let key = Object.keys(param)[0];
        return this.tables[table].find((obj) => obj[key] === param[key]) || [];
    }
    update(table, param, newData) {
        var _a, _b, _c;
        this.addTable(table);
        let key = Object.keys(param)[0];
        let newKey = Object.keys(newData)[0];
        let index = this.findIndex(table, param);
        // @ts-ignore
        return (_c = (_b = (_a = this.tables) === null || _a === void 0 ? void 0 : _a[table]) === null || _b === void 0 ? void 0 : _b[index]) === null || _c === void 0 ? void 0 : _c[newKey] = newData[newKey];
    }
    getAll() {
        return this.tables;
    }
}
exports.default = new Databse();
