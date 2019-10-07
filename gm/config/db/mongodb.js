require('colors');
const mongoose = require('mongoose');
const schemes = require('./schemes');

class MongoDB {
    constructor() {
        this._connected = false;
        this._run();
    }

    _run() {
        const self = this;
        mongoose.connect('mongodb://localhost/RageDayZ', {useNewUrlParser: true, useUnifiedTopology: true})
            .then(result => {
                this._connected = true;
                console.log('MongoDB connected'.green);
            })
            .catch(error => {
                console.log(`[MongoDM]: Error '${error.name}'.`.red);
            });
        self._userModel = mongoose.model('User', schemes.user);
        self._pointsModel = mongoose.model('Points', schemes.points);
    }

    getUserModel() {
        return this._userModel;
    }

    getPointModel(){
        return this._pointsModel;
    }
}

module.exports = new MongoDB;