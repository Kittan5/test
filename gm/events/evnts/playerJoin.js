module.exports = {
    playerJoin: player => {
        player.setVariable('money', 10000);
        console.log(`${player.name} зашел на сервер.`);
        player.spawn(new mp.Vector3(-425.517, 1123.620, 325.8544));
        player.isAuth = null;
    },
};