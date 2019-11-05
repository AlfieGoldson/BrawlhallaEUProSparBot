const Player = require('../models/Player');
const checkQueue = require('./checkQueue');

module.exports = (discordID, gamemode, channel) => {
    beginQueue(discordID, gamemode)
        .then(msg => {
            channel.send(msg)
            checkQueue(gamemode);
        })
        .catch(console.error);
}

const beginQueue = (discordID, gamemode) => {
    return new Promise((resolve, reject) => {
        Player.findOne({ discordID })
            .then(player => {
                if (!player)
                    resolve('Not Registered!');
                else if (['In1v1Queue', 'In2v2Queue', 'InX1v1Queue', 'InX2v2Queue'].includes(player.status))
                    resolve('Already In Queue!');
                else if (['In1v1Match', 'In2v2Match', 'InX1v1Match', 'InX2v2Match'].includes(player.status))
                    resolve('Still In A Match!')
                else if (player.status === 'Idle') {
                    player.state = `In${gamemode}Queue`;
                    player.queues.push({
                        gamemode,
                        state: 'Active'
                    });
                    player.save()
                        .then(_ => {
                            resolve('Successfully Queuing!');
                        })
                }
            })
            .catch(console.error);
    })
}