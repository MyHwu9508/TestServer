let weapons = require('./weaponHashes');

mp.events.addCommand('kill', (player) => {
    player.health = 0;
});

mp.events.addCommand('heal', (player) => {
    player.health = 100;
    player.armour = 100;
});


mp.events.addCommand('weapon', (player) => {
    for (let i = 0; i < weapons.length; i++) {
        player.outputChatBox(`Waffe:, ${weapons[i]}!`);
        player.giveWeapon(weapons[i], 1000);
    }
  });