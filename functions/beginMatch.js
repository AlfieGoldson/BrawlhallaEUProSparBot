const shuffle = require('shuffle-array');
const Match = require('../models/Match');

module.exports = (gamemode, players, channel) => {
    duos = gamemode.includes('2v2');
    shuffle(players);

    let teamSize = players.length / 2;
    let team1, team2;

    team1.players = players.filter((_, i) => i < teamSize);
    team1.teamRating = team1.players.reduce((a, b) => a + b, 0) / team1.players.length;
    team1.players = team1.players.map(x => x.discordID);

    team2.players = players.filter((_, i) => i >= teamSize);
    team2.teamRating = team2.players.reduce((a, b) => a + b, 0) / team1.players.length;
    team2.players = team2.players.map(x => x.discordID);

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
                                value: match.teamA.players.map(x => `${x.name} (${x.rating}/${x.peakRating} Peak)\n`),
                                inline: true
                            },
                            {
                                name: `Team B (${match.teamB.teamRating} Elo)`,
                                value: match.teamB.players.map(x => `${x.name} (${x.rating}/${x.peakRating} Peak)\n`),
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