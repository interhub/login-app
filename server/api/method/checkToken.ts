import database, {TABLES} from "../../db/database";

export default function (token: string): boolean {
    let tokenObj = database.get<{ token: string }>(TABLES.token, {token})
    return !!tokenObj
}