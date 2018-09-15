

var fs = require("fs");
var contents = fs.readFileSync("./weaponHashes.json");
var jsonContent = JSON.parse(contents);

mp.events.addCommand('kill', (player) => {
    player.health = 0;
});

mp.events.addCommand('heal', (player) => {
    player.health = 100;
    player.armour = 100;
});


mp.events.addCommand('weapon', (player) => {
    for (let i = 0; i < jsonContent.length; i++) {
        player.outputChatBox(`Waffe:, ${jsonContent[i]}!`);
        player.giveWeapon(jsonContent[i], 1000);
    }
  });