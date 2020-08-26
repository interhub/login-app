import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser'
import PORT from "./config/PORT";
import profile_router from "./routes/profile";
import session_router from "./routes/session";
import api from "./api/api";
import database from "./db/database";

const app = express()
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// let data= api.registration('89622639809')
// console.log(data)
// console.log(api.verifyUserByCode(data.code))
// console.log(database.getAll())

app.get('/', (req, res) => {
    res.send('TEST SERVER')
})

app.use('/account/profile', profile_router)
app.use('/session', session_router)

app.listen(PORT, () => {
    console.log('SERVER START ON PORT', PORT)
})


