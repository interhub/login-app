import express, {Request, Response} from 'express'
import {BodyConfirmType, BodyLoginType, BodyRegType} from "../types/types";
import api from "../api/api";

const router = express()

//PROFILE
router.get('/', (req: Request, res: Response) => {
    res.send('adwadaw')
})
//REGISTRATION
router.post('/', (req: Request, res: Response) => {
    let {login}: BodyRegType = req.body
    if (!login)
        return console.log('NOT LOGIN')
    let data = api.registration(login)
    res.send({...data})
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
router.post('/confirm', (req: Request, res: Response) => {
    const {code}: BodyConfirmType = req.body;
    let data = api.verifyUserByCode(code)
    res.send({...data})
})

export default router