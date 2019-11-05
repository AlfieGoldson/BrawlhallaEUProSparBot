const Player = require('../models/Player');
const Queue = require('../models/Schemas/QueueSchema');

module.exports = (discordID, channel) => {
    endQueue(discordID)
        .then(msg => channel.send(msg)
            .catch(console.error))
        .catch(console.error);
}

const endQueue = (discordID) => {
    return new Promise((resolve, reject) => {
        Player.findOne({ discordID })
            .then(player => {
                if (!player)
                    resolve('Not Registered!');
                else if (player.status !== 'InQueue') {
                    resolve('Not In Queue!');
                }
                else {
                    player.status = 'Idle';
                    player.queues[0].status = 'Canceled';

                    player.save()
                    .then(_ => resolve('Queue Stopped!'))
                    .catch(console.error);
                }
            })
            .catch(console.error);
    })
}