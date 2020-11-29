function response(success, message, res) {
    return {
        success: success,
        message: message,
        res: res
    };
}

function playerType() {
    return [
        "Batsman", "Bowler", "All-Rounder", "Wicket-Keeper"
    ];
}

module.exports =
{
    response, playerType
}
