const weaponData = require("./weaponData");

mp.events.add("playerDeath", (player, reason, killer) => {
    let msg = `${player.name} died`;

    if (killer) {
        if (killer.name == player.name) {
            msg = `${player.name} committed suicide`;
        } else {
            msg = `${killer.name} killed ${player.name}`;
            if (weaponData[reason]) msg += ` with ${weaponData[reason].Name}`;
        }
    }

    mp.players.call("pushToKillFeed", [msg]);
});