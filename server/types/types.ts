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

export type ResReportType = { message: string, result: boolean, code?: string }

export type ResLoginType<Success> = ResReportType & (Success extends true ?
    { attemptId: string, channel: string } : {})

export type ResRegType = ResReportType

export const ConfirmUser = {
    "success": true,
    "id": "some id",
    "krrParams": {
        "krrAccessToken": "",
        "krrRefreshToken": "",
        "loginConfirmCookie": ""
    }
}
export type ResConfirmType = typeof ConfirmUser

export const ProfileUser = {
    "profileData": {
        "address": {},
        "block": {},
        "cards": [],
        "categories": [],
        "channels": {"email": {"verified": true}, "phone": {"verified": true}, "sms": {"verified": true}},
        "documents": [{"number": "", "type": ""}],
        "email": "",
        "initials": {"original": {"name": "", "secondName": "", "surname": ""}},
        "initialsIsEditable": true,
        "phone": "",
        "security": {},
        "status": {"cardNo": ""},
        "gender": ""
    },
    "bonusData": {"qualifying": 0, "household": 0, "level": null, "redemption": 0, "levelExpire": null},
    "profileIsLimited": true
}
export type ResProfileType = typeof ProfileUser

