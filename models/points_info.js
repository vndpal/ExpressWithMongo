const mongoose = require('mongoose')

const pointsInfoSchema = new mongoose.Schema({
    event: {
        type: String,
        required: true
    },
    point: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('points_info', pointsInfoSchema)