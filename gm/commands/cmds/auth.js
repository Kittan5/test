let mongodb = require(ROOT +'/config/db/mongodb');
let register = require(ROOT + '/modules/auth/register');
let login = require(ROOT + '/modules/auth/login');
let save = require(ROOT +'/modules/auth/save');

let User = mongodb.getUserModel();

//console.log(user);

module.exports = {
    register: (player, fullText, username, email, password, confirmPassword) => {
        register(player, fullText, username, email, password, confirmPassword);
    },
    login: (player, fullText, username,  password) => {
        login(player, fullText, username,  password)
    },
    save: (player) => {
        save(player)
    }
};