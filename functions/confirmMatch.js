const eloCalculator = require('./util/eloCalculator');

module.exports = (match, confirm, force, channel) => {
    if (match.state === 'Started')
        channel.send("Match score hasn't been reported yet. Type !report [score_team_A] [score_team_B] to report the scores");
    if ((match.state === 'Confirmed' || match.state === 'Canceled') && !force)
        channel.send("Match score has already been confirmed. If there's an issue, tag an overseer.");
    else {
        if (confirm) {
            match.state = 'Confirmed';
            match.save()
                .then(_ => {
                    let playerPromises = [];
                    const teams = [match.teamA, match.teamB];
                    for (let j = 0; j < 2; j++)
                        const team = teams[j];
                    for (let i = 0; i < team.players.length; i++) {
                        playerPromises.push(new Promise((resolve, reject) => {
                            players[i].match = null;
                            players[i].state = `Idle`;
                            players[i]
                                .save()
                                .then(_ => {

                                })
                                .catch(console.error);
                        }))
                    }
                    Promise.all(playerPromises)
                        .then(_ => {
                            channel.send(`Match has been successfully confirmed`);
                        })
                })
        }
        else {
            match.state = 'Started';
            match
                .save()
                .then(_ => {
                    channel.send('Match has been denied, please report the correct results, or ask an overseer');
                })
        }
    }
}