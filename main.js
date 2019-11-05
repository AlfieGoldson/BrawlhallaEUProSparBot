const mongoose = require('mongoose');

module.exports = {
    connect: (database) => {
        return new Promise((resolve, reject) => {
            mongoose.createConnection(database, { useNewUrlParser: true, useUnifiedTopology: true })
                .then((connection) => {
                    module.exports.queueDB = connection;
                    // console.log('> Database Connection Sucessful!');
                    resolve({
                        registerPlayer: require('./functions/register'),
                        startQueue: require('./functions/startQueue'),
                        endQueue: require('./functions/endQueue'),
                        startMatch: require('./functions/startMatch'),
                        endMatch: require('./functions/endMatch')
                    });
                }).catch(reject);
        });
    }
}