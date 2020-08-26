//DATABASE
export type UserType = {
    login: string
    name: string
    create_at: number
    udid: string
}

export type TokenType = {
    token: string
    refresh_token: string
    login: string
}

export type CodeType = {
    code: string
    login: string
}

export type DataType = CodeType & TokenType & UserType

//REQUEST CLIENT

export type BodyLoginType = { login: string }
export type BodyRegType = { login: string, confirmationGDPRDate: number }
export type BodyConfirmType = { attemptId: string, code: string }

//RESPONSES

export type ResReportType = { message: string, result: boolean, code?:string }

export type ResLoginType<Success> = ResReportType & (Success extends true ?
    { attemptId: string, channel: string } : {})

export type ResRegType = ResReportType

export type ResConfirmType = { "success": true, "id": "some id", "krrParams": { "krrAccessToken": "some access token", "krrRefreshToken": "some refresh tokne", "loginConfirmCookie": "some cookie" } }

export type ResProfileType = { "profileData": { "address": {}, "block": {}, "cards": [], "categories": [], "channels": { "email": { "verified": true }, "phone": { "verified": true }, "sms": { "verified": true } }, "documents": [{ "number": "2400111222", "type": "PS" }], "email": "email@gmail.com", "initials": { "original": { "name": "", "secondName": "", "surname": "" } }, "initialsIsEditable": true, "phone": "+79995554433", "security": {}, "status": { "cardNo": "1024444228" }, "gender": "" }, "bonusData": { "qualifying": 0, "household": 0, "level": null, "redemption": 0, "levelExpire": null }, "profileIsLimited": true }

