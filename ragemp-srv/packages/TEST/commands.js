

let weapons = require('./weaponHashes.json');



mp.events.addCommand('kill', (player) => {
    player.health = 0;
});

mp.events.addCommand('heal', (player) => {
    player.health = 100;
    player.armour = 100;
});


mp.events.addCommand('weapon', (player) => {
    console.log("Hash: " + mp.joaat(weapons));
    player.giveWeapon(mp.joaat(weapons), 1000);
});