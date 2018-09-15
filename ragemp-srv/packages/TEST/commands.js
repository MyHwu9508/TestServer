

let weapons = require('./weaponHashes.json');



mp.events.addCommand('kill', (player) => {
    player.health = 0;
});

mp.events.addCommand('heal', (player) => {
    player.health = 100;
    player.armour = 100;
});


mp.events.addCommand('weapon', (player) => {
    for (let weaponName in weapons) {
        console.log("Hash: " + mp.joaat(weaponName));
        player.giveWeapon(mp.joaat(weaponName), 1000);
    }
});