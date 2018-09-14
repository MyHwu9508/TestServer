mp.events.addCommand('kill', (player) => {
    player.health = 0;
});

mp.events.addCommand('hp', (player) => {
    player.health = 100;
});

mp.events.addCommand('armor', (player) => {
    player.armour = 100;
});

mp.events.addCommand('veh', (player) => {
    mp.vehicles.new(mp.joaat("lada2107"), new mp.Vector3(-441.88, 1156.86, 326),
    {
        color: [[0,0,0],[0,0,0]]
    });
});