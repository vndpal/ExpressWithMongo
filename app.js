const express = require('express')
// const mongoose = require('mongoose')
// const url = "mongodb+srv://mongo:mongo@cluster0.lmmmb.mongodb.net/myDB?retryWrites=true&w=majority";

var port = process.env.PORT || 8080;
const app = express()

var cors = require('cors');

app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.options('*', cors());

// mongoose.connect(url, { useNewUrlParser: true })
// const con = mongoose.connection

// con.on('open', () => {
//     console.log('connected')
// })

// app.use(express.json())

// const alienRouter = require('./routers/aliens')
// app.use('/aliens', alienRouter)
app.get('/', (req, res) => res.send('Working!!!'));

app.listen(port, () => {
    console.log('sever started...')
})
