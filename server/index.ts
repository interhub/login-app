import cors from 'cors'
import express from 'express'
import DB from "./db/database"
import API from "./api/api"

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
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('SERVAK)))))')
})

const PORT = 3001
app.listen(PORT, () => {
    console.log('SERVER START ON PORT ', PORT)
})


