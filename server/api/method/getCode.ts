import database, {TABLES} from "../../db/database";
import {CodeType} from "../../types/types";

export default function (login: string): string {
    let newCode = Array(4).fill(1).map(() => Math.floor(Math.random() * 10)).join('')
    let code = database.get<{ login: string }>(TABLES.key, {login})
    if (code) {
        database.update<{ code: string }>(TABLES.key, {login}, {code: newCode})
    } else {
        database.add<CodeType>(TABLES.key, {code: newCode, login})
    }
    return newCode
}