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
                        beginQueue: require('./functions/beginQueue'),
                        endQueue: require('./functions/endQueue')
                    });
                }).catch(reject);
        });
    }
}