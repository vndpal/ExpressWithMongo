const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb+srv://mongo:mongo@cluster0.lmmmb.mongodb.net/primier11?retryWrites=true&w=majority";

var port = process.env.PORT || 8080;
const app = express()


mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('connected')
})

app.use(express.json())

const alienRouter = require('./routers/aliens')
app.use('/aliens', alienRouter)

const playerInfoRouter = require('./routers/palyerInfo')
app.use('/playerInfo', playerInfoRouter)

app.listen(port, () => {
    console.log('sever started...')
})
