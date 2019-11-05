const shuffle = require('shuffle-array');
const Match = require('../models/Match');

module.exports = (gamemode, players, channel) => {
    console.log('Begin Match');

    shuffle(players);

    let teamSize = players.length / 2;

    let playersTeam1 = players.filter((_, i) => i < teamSize);
    let team1 = {
        players: playersTeam1,
        teamRating: playersTeam1.reduce((a, b) => a + b.rating, 0) / teamSize
    };

    let playersTeam2 = players.filter((_, i) => i >= teamSize);
    let team2 = {
        players: playersTeam2,
        teamRating: playersTeam2.reduce((a, b) => a + b.rating, 0) / teamSize

    };

    // Higher Team Rating is considered higher seed (Team A)
    let is1A = team1.teamRating > team2.teamRating;

    new Match({
        teamA: is1A ? team1 : team2,
        teamB: is1A ? team2 : team1,
        gamemode,
        scoreTeamA: 0,
        scoreTeamA: 0,
    })
        .save()
        .then(match => {
            let playerPromises = [];
            for (let i = 0; i < players.length; i++) {
                playerPromises.push(new Promise((resolve, reject) => {
                    players[i].match = match._id;
                    players[i].state = `In${gamemode}Match`;
                    players[i]
                        .save()
                        .then(resolve())
                        .catch(console.error);
                }))
            }
            Promise.all(playerPromises)
                .then(_ => {
                    const matchEmbed = {
                        color: 0x0099ff,
                        title: 'Match',
                        description: 'Team A is better seed, and creates the room. type `!room [RoomNumber]` when the room is created.',
                        fields: [
                            {
                                name: `Team A (${match.teamA.teamRating} Elo)`,
                                value: match.teamA.players.map(x => `${x.name} (${x.rating}/${x.peakRating} Peak)\n`).join(),
                                inline: true
                            },
                            {
                                name: `Team B (${match.teamB.teamRating} Elo)`,
                                value: match.teamB.players.map(x => `${x.name} (${x.rating}/${x.peakRating} Peak)\n`).join(),
                                inline: true
                            }
                        ],
                        timestamp: new Date(),
                        footer: {
                            text: 'EU Pro Spar / Rank X Bot'
                        },
                    };
                    channel.send({ embed: matchEmbed });
                })
                .catch(console.error);
        })
        .catch(console.error);
}