import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser'
import PORT from "./config/PORT";
import api from "./api/api";
import database from "./db/database";

//TODO DATABASE TEST DOCS
// console.log(DB.getAll())
// DB.add('tabs', {id: 12})
// DB.add('tabs', {id: 15})
// console.log(DB.getAll())
// DB.update('tabs', {id: 15}, {name: 16})
// console.log(DB.getAll())
// DB.remove('tabs', {name: 16})
// console.log(DB.getAll())
// API.registration('hi')

const app = express()
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

api.registration('89622639809')
api.registration('89622639809')
console.log(database.getAll())

app.get('/', (req, res) => {
    res.send('SERVAK)))))')
})

app.listen(PORT, () => {
    console.log('SERVER START ON PORT', PORT)
})


