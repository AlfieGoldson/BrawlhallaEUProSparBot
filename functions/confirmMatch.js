const getPlayerCurrentMatch = require('./util/getPlayerCurrentMatch');

module.exports = (discordID, confirm, channel) => {
    getPlayerCurrentMatch(discordID)
        .then(match => {
            if (match.state === 'Started')
                channel.send("Match score hasn't been reported yet. Type !report [score_team_A] [score_team_B] to report the scores");
            if (match.state === 'Confirmed' || match.state === 'Canceled')
                channel.send("Match score has already been confirmed. If there's an issue, tag an overseer.");
            else {
                match.state = 
                match
                    .save()
                    .then(_ => {
                        channel.send(`Updated Room to ${roomNumber}`);
                    })
            }
        })
}