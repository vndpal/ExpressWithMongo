const mongoose = require('mongoose')

const contestResultSchema = new mongoose.Schema({
    points: {
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

module.exports = mongoose.model('contest_result', contestResultSchema)