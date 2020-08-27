import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser'
import PORT from "./config/PORT";
import profile_router from "./routes/profile";
import session_router from "./routes/session";

const app = express()
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('*', (req, res) => {
    // console.log(database.getAll())
    res.sendFile(process.cwd() + '/build' + req.url)
})

app.use('/account/profile', profile_router)
app.use('/session', session_router)

app.listen(PORT, () => {
    console.log('SERVER START ON PORT', PORT)
    setInterval(function () {
        fetch("https://login-production.herokuapp.com")
            .then((r) => {
                console.log('update')
            })
    }, 200000); // every time update for dont sleep
})


