const mongoose = require("mongoose");

const usersData = new mongoose.Schema({
    userID: {
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
    likes: {
        type: String,
        default: null,
    },
    likeSlowmode: {
        type: String,
        default: null,
    }
});

module.exports = mongoose.model('userData', usersData);