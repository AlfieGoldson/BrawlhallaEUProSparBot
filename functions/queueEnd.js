const Player = require('../models/Player');
const Queue = require('../models/Queue');

const messages = require('../util/messages');

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
                    resolve(messages.queue.failure.NOT_REGISTERED);
                else if (player.status !== 'InQueue') {
                    resolve(messages.queue.failure.NOT_IN_QUEUE);
                }
                else {
                    player.status = 'Idle';
                    player.queues[0].status = 'Canceled';

                    player.save()
                    .then(_ => resolve(messages.queue.success.QUEUE_STOP_SUCCESS))
                    .catch(console.error);
                }
            })
            .catch(console.error);
    })
}