module.exports = {
    games: {
        casino: require('./modules/games/casino')
    }
};

let hour = mp.world.time.hour;
let minute = mp.world.time.minute;


function timer(){
    // console.log(mp.world.time.hour,"",mp.world.time.minute)
    ++minute;
    if(minute>=60){
        hour++;
        minute=0;
    }
    if(hour == 24){
        hour=0;
        minute=0;
    }
    mp.world.time.minute=minute;
    mp.world.time.hour=hour;
}

setInterval(timer,1000);

