let spawnPoints = require('./spawn_points.json').SpawnPoints;

mp.events.add('playerDeath', (player) => {
    player.spawn(spawnPoints[Math.floor(Math.random() * spawnPoints.length)]);
    player.health = 100;
});

mp.events.add('playerJoin', (player) => {
    player.setClothes(1, 98, 0, 1)
});