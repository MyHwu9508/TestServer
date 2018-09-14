mp.events.addCommand('kill', (player) => {
    player.health = 0;
});

mp.events.addCommand('hp', (player) => {
    player.health = 100;
});

mp.events.addCommand('armor', (player) => {
    player.armour = 100;
});

mp.events.addCommand('lada', (player) => {
    mp.vehicles.new(mp.joaat("lada2107"), new mp.Vector3(-441.88, 1156.86, 326),
    {

        color: [[255,105,180],[255,105,180]]
    });
});

mp.events.addCommand("weapon", (player, fullText, weapon, ammo) => {
	var weaponHash = mp.joaat(weapon);

	player.giveWeapon(weaponHash, parseInt(ammo) || 10000);

});