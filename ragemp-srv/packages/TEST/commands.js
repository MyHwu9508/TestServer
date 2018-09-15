

let weapons = require('./weaponHashes.json');



mp.events.addCommand('kill', (player) => {
    player.health = 0;
});

mp.events.addCommand('heal', (player) => {
    player.health = 100;
    player.armour = 100;
});


mp.events.addCommand('weapon', (player) => {
    for (let attr in weapons) {
        console.log(attr + ": " + weapons[attr]);
    }
    /*for (let i = 0; i < weapons.length; i++) {
        player.outputChatBox(`Waffe:, ${weapons}!`);
        player.giveWeapon(weapons, 1000);
    }*/
  });