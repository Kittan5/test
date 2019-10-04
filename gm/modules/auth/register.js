let mongodb = require(ROOT +'/config/db/mongodb');
let User = mongodb.getUserModel();
module.exports = (player, fullText, username, email, password) => {
        if (!fullText) return console.log('/register [login] [email] [password]');
        if(/^[a-zA-Z0-9-]{3,16}$/.test(username) === false) {
            console.log('В логине должны быть от 4 до 20 символов'); 
            return false;
        }
        if(/^[a-zA-Z0-9-]{6,30}$/.test(password) === false) {
            console.log('В пароле должно быть от 6 до 30 символов'); 
            return false;
        }

        if(/.+@.+..+/.test(email) === false){
            console.log('Введите правильный email')
            return false;
        }

        User.find({username})
            .then(result => {
                if (result.length == 0) {
                    User.insertMany([{login: username, password, email}]);
                    console.log(`${username} Успешно зарегестрирован`)
                }
                if(result.length >= 1){
                    console.log(result);
                    console.log('логин занят');
                }
            })
            .catch(error => console.log(error));
            
    }