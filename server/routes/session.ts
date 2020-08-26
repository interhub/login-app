import express, {Request, Response} from 'express'
import {ResReportType, TokenType} from "../types/types";
import api from "../api/api";
import database, {TABLES} from "../db/database";

const router = express()

router.post('/guest', (req: Request, res: Response) => {
    let {login, udid} = req.body
    let tokenObj: TokenType = database.get<{ login: string }>(TABLES.token, {login})
    if (!tokenObj) {
        api.updateToken(null, login)
        tokenObj = database.get<{ login: string }>(TABLES.token, {login})
    }
    database.update<{ udid: string }>(TABLES.user, {login}, {udid})
    res.send({...tokenObj})
})

router.post('/refresh', (req: Request, res: Response) => {
    const {token}: any = req.headers
    if (!token)
        return console.log('NOT TOKEN')
    let {login} = database.get<{ token: string }>(TABLES.token, {token}) || {login: ''}
    api.updateToken(token)
    let newTokenObj: TokenType | ResReportType = database.get<{ login: string }>(TABLES.token, {login}) || {
        result: false,
        message: ''
    }
    res.send({...newTokenObj})
})

export default router