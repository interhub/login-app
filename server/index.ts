import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser'
import PORT from "./config/PORT";
import profile_router from "./routes/profile";
import session_router from "./routes/session";
import fetch from "node-fetch";
import path from 'path'

const app = express()
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/account/profile', profile_router)
app.use('/session', session_router)

app.use(express.static( process.cwd()+'/build'));

app.get('*', (req, res) => {
     res.sendFile(process.cwd() + '/build/index.html')
})


app.listen(PORT, () => {
    console.log('SERVER START ON PORT', PORT)
    setInterval(function () {
        fetch("https://login-production.herokuapp.com/test")
            .then((r) => {
                console.log('update')
            })
    }, 200000); // every time update for dont sleep
})


