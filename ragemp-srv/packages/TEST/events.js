let spawnPoints = require('./spawn_points.json').SpawnPoints;

mp.events.add('playerDeath', (player) => {
    player.spawn(spawnPoints[Math.floor(Math.random() * spawnPoints.length)]);
    player.health = 100;
});

mp.events.add('playerJoin', (player) => {
    player.setClothes(1, 98, 0, 2) //mask
    player.setClothes(4, 67, 6, 2) //Hose
    player.setClothes(6, 47, 6, 2) //Schuhe
    player.setClothes(11, 148, 6, 2) //Oberteil
    player.setClothes(3, 110, 6, 2) //Handschuhe
    player.setClothes(10, 0, 0, 2) //Sticker
    player.setClothes(8, 0, -1, 2) //Hemd
});