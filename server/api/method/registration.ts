import {ResRegType, ResReportType, UserType} from "../../types/types";
import database, {TABLES} from "../../db/database";

export default function (login: string): ResRegType | ResReportType {
    let user: UserType = {
        login,
        name: '',
        create_at: Date.now(),
        udid: '123'
    }
    let isExist = database.get<{ login: string }>(TABLES.user, {login})
    if (!isExist) {
        database.add(TABLES.user, {...user})
        this.updateToken('', login)
        let code = this.getCode(login)
        return {message: '', result: true, code, attemptId: 'a955002f-9166-4a3c-8d1e-c488c9d772b7'} //TODO FIX attemptId
    }
    //fail - user not exist
    return {message: 'Пользователь уже существует', result: false}
}