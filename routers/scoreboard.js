const express = require('express')
const router = express.Router()
const ScoreboardInfo = require('../models/scoreboard_details')
const PlayerInfo = require('../models/player_info')
const constants = require('../constants/constant')


router.get('/', async (req, res) => {
    try {
        const scoreInfo = await ScoreboardInfo.find()
        if (scoreInfo.length) {
            const resp = constants.response(true, 'Data found', scoreInfo)
            res.json(resp)
        }
        else {
            const resp = constants.response(false, 'No Data found', scoreInfo)
            res.json(resp)
        }
    }
    catch (err) {
        const resp = constants.response(false, err, {})
        res.send(resp)
    }
})

router.post('/', async (req, res) => {
    try {

        const latestScore = await ScoreboardInfo.where({ match_id: req.body.match_id }).sort({ _id: 'desc' }).findOne();
        // res.json(latestScore)
        if (latestScore.extra_type == "Wide" || latestScore.extra_type == "No-Ball") {
            if (latestScore.ball != req.body.ball) {
                const resp = constants.response(false, `Invalid Ball passed, value should be ${latestScore.ball}`, req.body)
                res.json(resp)
                return;
            }
            else if (latestScore.over != req.body.over) {
                const resp = constants.response(false, `Invalid Over passed, value should be ${latestScore.over}`, req.body)
                res.json(resp)
                return;
            }
        }
        else if (latestScore.ball == 6) {
            if (req.body.ball != 1) {
                const resp = constants.response(false, `Invalid Ball passed, value should be 1`, req.body)
                res.json(resp)
                return;
            }
            else if (req.body.over != latestScore.over + 1) {
                const resp = constants.response(false, `Invalid over passed, value should be ${latestScore.over + 1}`, req.body)
                res.json(resp)
                return;
            }
        }
        else {
            if (req.body.ball != latestScore.ball + 1) {
                const resp = constants.response(false, `Invalid Ball passed, value should be ${latestScore.ball + 1}`, req.body)
                res.json(resp)
                return;
            }
            else if (req.body.over != latestScore.over) {
                const resp = constants.response(false, `Invalid over passed, value should be ${latestScore.over}`, req.body)
                res.json(resp)
                return;
            }
        }

        const scoreInfo = new ScoreboardInfo({
            ball: req.body.ball,
            over: req.body.over,
            run: req.body.run,
            batsman_id: req.body.batsman_id,
            bowler_id: req.body.bowler_id,
            fielder_id: req.body.fielder_id,
            is_wicket: req.body.is_wicket,
            wicket_type: req.body.wicket_type,
            extras: req.body.extras,
            extra_type: req.body.extra_type,
            match_id: req.body.match_id
        })

        const a1 = await scoreInfo.save()
        const resp = constants.response(true, 'Data inserted successfully !', a1)
        res.json(resp)

    }
    catch (err) {
        console.log(err);
        const resp = constants.response(false, err, {})
        res.send(resp)
    }
})


module.exports = router