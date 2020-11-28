const express = require('express')
const router = express.Router()
const PlayerInfo = require('../models/player_info')

router.get('/', async (req, res) => {
    try {
        const playerInfo = await PlayerInfo.find()
        res.json(playerInfo)
    }
    catch (err) {
        res.send('Error: ' + err)
    }
})

router.post('/', async (req, res) => {
    const playerInfo = new PlayerInfo({
        player_credit_points: req.body.player_credit_points,
        name: req.body.name,
        player_role_type: req.body.player_role_type,
        player_team_name: req.body.player_team_name
    })

    try {
        const a1 = await playerInfo.save()
        res.json(a1)
    }
    catch (err) {
        res.send('Error: ' + err)
    }
})


module.exports = router