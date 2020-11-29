const mongoose = require('mongoose')

const tournamentInfoSchema = new mongoose.Schema({
    tournament_name: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('tournament_info', tournamentInfoSchema)