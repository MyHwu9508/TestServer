

var fs = require("fs");
var contents = fs.readFileSync("weaponHashes.json");
var jsonContent = JSON.parse(contents);


var string = "{'key':'value'}";
var obj = JSON.parse(string);


mp.events.addCommand('kill', (player) => {
    player.health = 0;
});

mp.events.addCommand('heal', (player) => {
    player.health = 100;
    player.armour = 100;
});


mp.events.addCommand('weapon', (player) => {
    for (let i = 0; i < jsonContent.length; i++) {
        player.outputChatBox(`Waffe:, ${obj.key[i]}!`);
        player.giveWeapon(obj.key[i], 1000);
    }
  });