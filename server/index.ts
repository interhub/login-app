import cors from 'cors'
import express from 'express'
// import * as DB from "./db"


// const x =()=>console.log(DB.getAll())

const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.send('SERVAK)))))')
})

const PORT=3001
app.listen(PORT,()=>{
    console.log('SERVER START ON PORT ',PORT)
})


