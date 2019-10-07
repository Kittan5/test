const mongoose = require('mongoose');

let user = new mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    money: {
        type: Number,
        default: 100
    },
    health: {
        type: Number,
        default: 100
    },
    armour: {
        type: Number,
        default: 0
    },
    cords: {
        type: Object,
    }
});

let points = new mongoose.Schema({
    point: {
        type: String,
    },
    cords: {
        type: Object,
    }
})

module.exports = {
    user,
    points
};