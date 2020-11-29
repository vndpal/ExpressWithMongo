const express = require('express')
const router = express.Router()
const PlayerInfo = require('../models/player_info')
const TeamInfo = require('../models/team_info')
const standResp = require('../constants/response')


router.get('/getPlayerType', async (req, res) => {
    try {
        const resp = standResp.response(true, 'Player Type Found', standResp.playerType())
        res.json(resp)
        res.json(playerInfo)
    }
    catch (err) {
        const resp = standResp.response(false, err, {})
        res.send(resp)
    }
})

router.get('/', async (req, res) => {
    try {
        const playerInfo = await PlayerInfo.find()
        if (playerInfo.length) {
            const resp = standResp.response(true, 'Data found', playerInfo)
            res.json(resp)
        }
        else {
            const resp = standResp.response(false, 'No Data found', playerInfo)
            res.json(resp)
        }
        res.json(playerInfo)
    }
    catch (err) {
        const resp = standResp.response(false, err, {})
        res.send(resp)
    }
})

router.post('/', async (req, res) => {
    try {
        const teamName = req.body.player_team_name.toUpperCase();
        const playerType = req.body.player_role_type;
        if (standResp.playerType().indexOf(playerType) < -1) {
            const resp = standResp.response(false, 'Invalid player role provided', {})
            res.json(resp)
        }
        const teamInfo = await TeamInfo.findOne({ team_name: teamName })
        if (teamInfo) {
            const playerInfo = new PlayerInfo({
                player_credit_points: req.body.player_credit_points,
                name: req.body.name.toUpperCase(),
                player_role_type: req.body.player_role_type,
                player_team_name: teamName
            })

            const a1 = await playerInfo.save()
            const resp = standResp.response(true, 'Data inserted successfully !', a1)
            res.json(resp)
        }
        else {
            const resp = standResp.response(false, 'Invalid Team Name provided', {})
            res.json(resp)
        }

    }
    catch (err) {
        console.log(err);
        const resp = standResp.response(false, err, {})
        res.send(resp)
    }
})


module.exports = router