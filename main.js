const mongoose = require('mongoose');

module.exports = {
    connect: (database) => {
        return new Promise((resolve, reject) => {
            mongoose.createConnection(database, { useNewUrlParser: true, useUnifiedTopology: true })
                .then((connection) => {
                    module.exports.queueDB = connection;
                    resolve({
                        register: require('./functions/register'),
                        beginQueue: require('./functions/beginQueue'),
                        endQueue: require('./functions/endQueue')
                    });
                }).catch(reject);
        });
    }
}