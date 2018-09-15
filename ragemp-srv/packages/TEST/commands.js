mp.events.addCommand('kill', (player) => {
    player.health = 0;
});

mp.events.addCommand('hp', (player) => {
    player.health = 100;
});

mp.events.addCommand('armor', (player) => {
    player.armour = 100;
});


mp.events.add('playerCommand', (player, command) => {
    let arr = command.split(' ');
    if (arr[0] == 'weapon') {
      player.giveWeapon([0x1B06D571, 0x13532244], 1000); // Assault Rifle, Carbine Rifle
    }
  });