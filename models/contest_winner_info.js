const mongoose = require('mongoose')

const contestWinnerInfoSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    contest_id: {
        type: Number,
        required: true
    },
    rank_from: {
        type: String,
        required: true
    },
    rank_to: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('contest_winner_info', contestWinnerInfoSchema)