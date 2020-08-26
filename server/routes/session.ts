import express, {Request, Response} from 'express'
import {TokenType} from "../types/types";
import api from "../api/api";
import database, {TABLES} from "../db/database";

const router = express()

router.post('/guest', (req: Request, res: Response) => {
    let {login} = req.body
    let tokenObj: TokenType = database.get<{ login: string }>(TABLES.token, {login})
    console.log('tokenObj',tokenObj, login,'login')
    if (!tokenObj) {
        api.updateToken(null, login)
        tokenObj = database.get<{ login: string }>(TABLES.token, {login})
    }
    console.log(database.getAll())
    res.send({...tokenObj})
})

router.post('/refresh', (req: Request, res: Response) => {
    const {token}: any = req.headers
    let {login} = database.get<{ token: string }>(TABLES.token, {token})
    api.updateToken(token)
    let newTokenObj: TokenType = database.get<{ login: string }>(TABLES.token, {login})
    res.send({...newTokenObj})
})

export default router