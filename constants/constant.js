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

function wicketType() {
    return [
        'Bold', 'Catch', 'LBW', 'Stumping', 'Run-Out', 'Obstruct-Field'
    ];
}

function extraType() {
    return [
        "Wide", "No-Ball", "Leg-Bye", "Bye"
    ];
}

module.exports =
{
    response, playerType, wicketType, extraType
}
