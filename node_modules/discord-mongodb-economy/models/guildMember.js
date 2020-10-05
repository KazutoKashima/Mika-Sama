const mongoose = require("mongoose");

const guildMember = new mongoose.Schema({
    memberID: {
        type: String,
        default: null,
    },
    guildID: {
        type: String,
        default: null,
    },
    xp: {
        type: Number,
        default: 0,
    },
    level: {
        type: Number,
        default: 0,
    },
    money: {
        type: String,
        default: null,
    },
    bank: {
        type: String,
        default: null,
    },
    dailySlowmode: {
        type: String,
        default: null,
    },
    weeklySlowmode: {
        type: String,
        default: null,
    },
    mothlySlowmode: {
        type: String,
        default: null,
    },
    workSlowmode: {
        type: String,
        default: null,
    },
    robSlowmode: {
        type: String,
        default: null,
    },
    genre: {
        type: String,
        default: null,
    },
    age: {
        type: String,
        default: null,
    },
    biography: {
        type: String,
        default: null,
    },
});

module.exports = mongoose.model('guildMemberData', guildMember);