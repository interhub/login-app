import database, {TABLES} from "../../db/database";

export default function (login: string): string {
    let tokenObj = database.get<{ login: string }>(TABLES.token, {login})
    return tokenObj ? tokenObj.token : ''
}