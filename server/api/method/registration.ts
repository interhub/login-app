import {ResRegType, UserType} from "../../types/types";
import database, {TABLES} from "../../db/database";

export default function (login: string): ResRegType {
    let user: UserType = {
        login,
        name: '',
        create_at: Date.now()
    }
    let isExist = database.get<{ login: string }>(TABLES.user, {login})
    if (!isExist) {
        database.add(TABLES.user, {...user})
        this.updateToken(login)
        let code = this.getCode(login)
        return {message: '', result: true, code}
    }
    //fail - user not exist
    return {message: 'Не удалось создать аккаунт', result: false}
}