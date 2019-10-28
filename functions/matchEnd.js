const Player = require('../models/Player');
const Match = require('../models/Match');
const MatchReport = require('../models/MatchReport');


module.exports = (discordID, scoreTeamA, scoreTeamB, channel) => {
    endMatch(discordID, scoreTeamA, scoreTeamB)
        .then(msg => channel.send(msg)
            .catch(console.error))
        .catch(console.error);
}

// End Match
const endMatch = (discordID, scoreTeamA, scoreTeamB) => {
    return new Promise((resolve, reject) => {
        Player.findOne({ discordID }) // Find Player
            .then(player => {
                if (player) { // Check if player is Registered
                    if (player.matches[0]) { // Check if players has started at least 1 match
                        if (player.matches[0].state === "OnGoing") { // Check if the player's last match is still going on
                            Match.findById(player.matches[0]) // Find Match
                                .then(match => {
                                    if (match.state === 'OnGoing') {
                                        match.scoreTeamA = scoreTeamA;
                                        match.scoreTeamB = scoreTeamB;
                                        match.winner = scoreTeamA > scoreTeamB ? 0 : (scoreTeamB > scoreTeamA ? 1 : -1);
                                        match.state = 'Reported';
                                        match.save()
                                            .then()
                                            .catch();
                                    }
                                })
                                .catch(error)
                        }
                    }
                }
            })
            .catch(console.error);
    })
}