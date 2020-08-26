import express, {Request, Response} from 'express'
import {
    BodyConfirmType,
    BodyLoginType,
    BodyRegType,
    ConfirmUser,
    ProfileUser,
    ResConfirmType,
    ResProfileType,
    ResRegType,
    ResReportType,
    UserType
} from "../types/types";
import api from "../api/api";
import database, {TABLES} from "../db/database";

const router = express()

//PROFILE
router.get('/', (req: Request, res: Response) => {
    const {token}: any = req.headers
    let {login} = database.get<{ token: string }>(TABLES.token, {token}) || {login: ''}
    let user = database.get<{ login: string }>(TABLES.user, {login})
    let data: ResProfileType & UserType | ResReportType = user ? {...user, ...ProfileUser} : {
        result: false,
        message: ''
    }
    res.send({...data})
})
//REGISTRATION
router.post('/', (req: Request, res: Response) => {
    let {login}: BodyRegType = req.body
    if (!login)
        return console.log('NOT LOGIN')
    let data: ResRegType | ResReportType = api.registration(login)
    res.send({...data,})
})
//LOGIN
router.post('/login', (req: Request, res: Response) => {
    const {login}: BodyLoginType = req.body;
    if (!login)
        return console.log('NOT LOGIN')
    const data = api.login(login)
    res.send({...data})
})
//VALIDATE CODE
router.post('/login/confirm', (req: Request, res: Response) => {
    const {code}: BodyConfirmType = req.body;
    let result: ResReportType = api.verifyUserByCode(code)
    let data: ResConfirmType = {...ConfirmUser, ...result, success: result.result}
    res.send({...data})
})

export default router