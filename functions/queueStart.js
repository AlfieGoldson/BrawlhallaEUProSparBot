const Player = require('../models/Player');
const Queue = require('../models/Queue');

const messages = require('../util/messages');

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
                    resolve('Already In A Match!')
                }
                else if (player.status === 'Idle') {
                    Queue.find({ gamemode })
                    const newQueue = new Queue({
                        player: player,
                        gamemode
                    })
                        .save()
                        .then(queue => {
                            player.status = 'InQueue';
                            player.queues.push(queue);
                            player
                                .save()
                                .then(_ => resolve('Queue Started!'))
                                .catch(console.error);
                        })
                        .catch(console.error)
                }
            })
            .catch(console.error);
    })
}