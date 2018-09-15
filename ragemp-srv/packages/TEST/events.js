let spawnPoints = require('./spawn_points.json').SpawnPoints;
let weapons = require('./weaponHashes.json');

mp.events.add('playerDeath', (player) => {
    player.spawn(spawnPoints[Math.floor(Math.random() * spawnPoints.length)]);
    player.health = 100;
    player.armour = 100;
    for (let weaponName in weapons) {
        player.giveWeapon(parseInt(weapons[weaponName]), 1000);
    }
});

mp.events.add('playerJoin', (player) => {
    player.spawn(spawnPoints[1]);
    player.setClothes(1, 98, 0, 2) //mask
    player.setClothes(4, 67, 6, 2) //Hose
    player.setClothes(6, 47, 6, 2) //Schuhe
    player.setClothes(11, 148, 6, 2) //Oberteil
    player.setClothes(3, 110, 6, 2) //Handschuhe
    player.setClothes(10, 12, 6, 2) //Sticker
    player.setClothes(8, 0, -1, 2) //Hemd


    for (let weaponName in weapons) {
        player.giveWeapon(parseInt(weapons[weaponName]), 1000);
    }
});

