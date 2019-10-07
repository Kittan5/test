let mongodb = require(ROOT +'/config/db/mongodb');
let User = mongodb.getUserModel();
module.exports = (player) => {
    console.log(player.isAuth)
        if(player.isAuth){
            let cords = player.position;
            console.log(cords);
            let armour = player.armour;
            let money = player.getVariable('money');
            let health = player.health;
            let name = player.name;
            User.updateMany({login: name },{  
                money: money,
                health: health,
                armour: armour,
                cords: {x:cords.x,y:cords.y,z:cords.z}
                },
                (err, result) => {
                    console.log(err);
                    console.log(result)
                    return;
                });
                
            player.isAuth = null;
        }
        else{console.log('Вы не вошли')}
    }