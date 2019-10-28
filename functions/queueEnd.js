const User = require('../models/User');
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
        User.findOne({ discordID })
            .then(user => {
                if (!user)
                    resolve(messages.queue.failure.NOT_REGISTERED);
                else if (user.status !== 'InQueue') {
                    resolve(messages.queue.failure.NOT_IN_QUEUE);
                }
                else {
                    user.status = 'Idle';
                    user.queues[0].status = 'Canceled';

                    user.save()
                    .then(_ => resolve(messages.queue.success.QUEUE_STOP_SUCCESS))
                    .catch(console.error);
                }
            })
            .catch(console.error);
    })
}