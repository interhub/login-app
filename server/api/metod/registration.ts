import {UserType} from "../../types/types";
import updateToken from "./updateToken";
import database, {TABLES} from "../../db/database";

export default (login: string) => {
    let user: UserType = {
        login,
        name: '',
        create_at: Date.now()
    }
    let isExist = database.get<{login:string}>(TABLES.user, {login})
    if (!isExist) {
        database.add(TABLES.user, {...user})
    }

    updateToken(login)
}