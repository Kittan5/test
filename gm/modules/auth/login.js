let mongodb = require(ROOT +'/config/db/mongodb');
let User = mongodb.getUserModel();
module.exports = (player, fullText, username,  password) => {
    if(player.isAuth) return console.log('Вы уже залогинились')
    if (!fullText) return console.log('/login [login]  [password] ');
    User.find({login: username, password})
        .then(result => {
            console.log(result);
            let x = result[0].cords.x;
            let y = result[0].cords.y;
            let z = result[0].cords.z;
            if (result.length === 0) {
                console.log('Неправильный логин или пароль');
            }
            else{
                player.armour = result[0].armour;
                player.setVariable('money', result[0].money);
                player.health = result[0].health;
                player.isAuth = !null;
                player.spawn(new mp.Vector3(x,y,z));
                player.name = username;
                console.log(`${username} Зашёл на сервак`);
            }
        })
        .catch(error => console.log(error));
}
    
