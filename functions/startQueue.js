const Player = require('../models/Player');
const Queue = require('../models/Schemas/QueueSchema');

const startMatch = require('./startMatch');

module.exports = (discordID, gamemode, channel) => {
    beginQueue(discordID, gamemode)
        .then(msg => channel.send(msg)
            .catch(console.error))
        .catch(console.error);
}

const beginQueue = (discordID, gamemode) => {
    return new Promise((resolve, reject) => {
        Player.findOne({ discordID })
            .then(player => {
                if (!player)
                    resolve('Not Registered!');
                else if (player.status === 'InQueue') {
                    resolve('Already In Queue!');
                }
                else if (player.status === 'InMatch') {
                    resolve('Still In A Match!')
                }
                else if (player.status === 'Idle') {
                }
            })
            .catch(console.error);
    })
}