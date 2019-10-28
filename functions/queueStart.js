const User = require('../models/User');
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
        User.findOne({ discordID })
            .then(user => {
                if (!user)
                    resolve('Not Registered!');
                else if (user.status === 'InQueue') {
                    resolve('Already In Queue!');
                }
                else if (user.status === 'InMatch') {
                    resolve('Already In A Match!')
                }
                else if (user.status === 'Idle') {
                    Queue.find({ gamemode })
                    const newQueue = new Queue({
                        player: user,
                        gamemode
                    })
                        .save()
                        .then(queue => {
                            user.status = 'InQueue';
                            user.queues.push(queue);
                            user
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