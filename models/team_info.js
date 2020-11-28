const mongoose = require('mongoose')

const teamInfoSchema = new mongoose.Schema({
    team_name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('team_info', teamInfoSchema)