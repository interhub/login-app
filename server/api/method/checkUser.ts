import database, {TABLES} from "../../db/database";

export default function (login: string) {
    let user = database.get(TABLES.user, {login})
    return !!user
}