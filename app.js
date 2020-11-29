const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const url = "mongodb+srv://mongo:mongo@cluster0.lmmmb.mongodb.net/primier11?retryWrites=true&w=majority";

var port = process.env.PORT || 8080;
const app = express()


mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('connected')
})

app.use(cors())
app.use(express.json())
//routes
const alienRouter = require('./routers/aliens')
app.use('/aliens', alienRouter)

const playerInfoRouter = require('./routers/palyerInfo')
app.use('/playerInfo', playerInfoRouter)

const tournamentRouter = require('./routers/tournaments')
app.use('/tournament', tournamentRouter)

const matchRouter = require('./routers/matchInfo')
app.use('/match', matchRouter)
//end of router

app.listen(port, () => {
    console.log('sever started...')
})
