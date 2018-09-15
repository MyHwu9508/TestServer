

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
        player.outputChatBox(`Waffe:, ${weapons[weaponName]}!`);
        player.giveWeapon(weapons[weaponName], 1000);
    }
  });