const mongoose = require('mongoose')

const contestRankSchema = new mongoose.Schema({
    rank: {
        type: Number,
        required: true
    },
    contest_id: {
        type: Number,
        required: true
    },
    user_id: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('contest_rank', contestRankSchema)