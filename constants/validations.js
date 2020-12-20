const Joi = require('joi')
const stanRes = require('../constants/constant')

function checkTeamBalance(team) {
    try {
        const schema = Joi.object({
            batsman: Joi.number().min(3).max(6),
            bowler: Joi.number().min(3).max(6),
            allRounder: Joi.number().min(1).max(3),
            wicketKeeper: Joi.number().min(1).max(2)
        })
        const { error, value } = schema.validate(team);
        return stanRes.response(error == undefined, error ? error.message : '', {})
    }
    catch (err) {
        return stanRes.response(false, err.toString(), {});
    }
}

module.exports =
{
    checkTeamBalance
}
