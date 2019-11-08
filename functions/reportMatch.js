const getPlayerCurrentMatch = require('./util/getPlayerCurrentMatch');
const getPlayerEmbed = require('./util/getPlayerEmbed');

module.exports = (discordID, scoreTeamA, scoreTeamB, force, channel) => {
    getPlayerCurrentMatch(discordID)
        .then(match => {
            if (match.state !== 'Started' && !force)
                channel.send("Couldn't update the room number, the match has already ended");
            else {
                try {
                    scoreTeamA = parseInt(scoreTeamA);
                    scoreTeamB = parseInt(scoreTeamB);
                }
                catch {
                    channel.send('Bad score format.');
                    return;
                }

                let winner = -1;
                if (scoreTeamA < 0 && scoreTeamB < 0)
                    winner = -1;
                else if (scoreTeamB < scoreTeamA)
                    winner = 0;
                else if (scoreTeamA < scoreTeamB)
                    winner = 1;
                else if (scoreTeamA === scoreTeamB)
                    winner = 2;

                match.scoreTeamA = scoreTeamA;
                match.scoreTeamB = scoreTeamB;
                match.winner = winner;

                match
                    .save()
                    .then(_ => {
                        channel.send({ embed: getPlayerEmbed(match, showScore) });
                    })
            }
        })
}