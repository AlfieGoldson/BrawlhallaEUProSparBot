const mongoose = require('mongoose');

module.exports = {
    PlayerSchema: new mongoose.Schema(),
    QueueSchema: new mongoose.Schema(),
    TeamSchema: new mongoose.Schema(),
    MatchReportSchema: new mongoose.Schema(),
    MatchSchema: new mongoose.Schema()
}