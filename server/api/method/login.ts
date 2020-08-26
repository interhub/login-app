import {ResLoginType} from "../../types/types";

export default function (login: string): ResLoginType<true> | ResLoginType<false> {
    let isUser = this.checkUser(login)
    let failData: ResLoginType<false> = {
        message: 'Такого аккаунта не существует',
        result: false
    }
    let succesData: ResLoginType<true> = {
        result: true,
        message: '',
        attemptId: '',
        channel: ''
    }
    return isUser ? succesData : failData;
}