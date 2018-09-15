

let weapons = require('./weaponHashes.json');



mp.events.addCommand('kill', (player) => {
    player.health = 0;
});

mp.events.addCommand('heal', (player) => {
    player.health = 100;
    player.armour = 100;
});

mp.events.addCommand('weapon', (player) => {
    let weaponNameArr;
    for (let weaponName in weapons) {
        weaponNameArr.push(weaponName);
    }
    console.log("Hash: " + mp.joaat(weaponNameArr));
    player.giveWeapon(mp.joaat(weaponNameArr), 1000);
});