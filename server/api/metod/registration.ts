import {UserType} from "../../types/types";
import database, {TABLES} from "../../db/database";

export default function (login: string) {
    let user: UserType = {
        login,
        name: '',
        create_at: Date.now()
    }
    let isExist = database.get<{ login: string }>(TABLES.user, {login})
    if (!isExist) {
        database.add(TABLES.user, {...user})
    }
    this.updateToken(login)
}