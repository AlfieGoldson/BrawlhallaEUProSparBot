const mongoose = require('mongoose');

module.exports = {
    connect: (database) => {
        return new Promise((resolve, reject) => {
            mongoose.createConnection(database, { useNewUrlParser: true, useUnifiedTopology: true })
                .then((connection) => {
                    module.exports.queueDB = connection;
                    console.log('📙  • Database Connection Sucessful!');
                    resolve({
                        register: require('./functions/register'),
                        startQueue: require('./functions/queueStart'),
                        endQueue: require('./functions/queueEnd'),
                        endQueue: require('./functions/matchStart'),
                        endQueue: require('./functions/matchEnd')
                    });
                }).catch(reject);
        });
    }
}