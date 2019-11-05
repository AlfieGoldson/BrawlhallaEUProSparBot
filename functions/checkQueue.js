const Player = require('../models/Player');
const beginMatch = require('./beginMatch');

module.exports = (gamemode, channel) => {
    checkQueue(gamemode)
        .then(msg => channel.send(msg))
        .catch(console.error);
}

const checkQueue = (gamemode) => {
    return new Promise((resolve, reject) => {
        Player.find({ state: `In${gamemode}Queue` })
            .then(players => {
                if (gamemode === '1v1' || gamemode === 'X1v1' || players.length >= 2)
                    beginMatch(gamemode, player, players);
                else if (gamemode === '2v2' || gamemode === 'X2v2' || players.length >= 4)
                    beginMatch(gamemode, player, players.filter((x, i) => i < 4));
            })
    })
}