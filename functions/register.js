const User = require('../models/User');

const messages = require('../util/messages');

module.exports = (discordID, name, channel) => {
    register(discordID, name)
        .then(msg => channel.send(msg)
            .catch(console.error))
        .catch(console.error);
}

const register = (discordID, name) => {
    return new Promise((resolve, reject) => {
        User.findOne({ discordID })
            .then(user => {
                if (user)
                    resolve('Already Registered!');
                else
                    new User({ discordID, name })
                        .save()
                        .then(_ => {
                            resolve('Registration Success!');
                        })
                        .catch(console.error);
            })
            .catch(console.error);
    })
}