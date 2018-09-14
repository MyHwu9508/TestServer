function xyInFrontOfPos(pos, heading, dist) {
    heading *= Math.PI / -90;
    pos.x += (dist * Math.sin(-heading));
    pos.y += (dist * Math.cos(-heading));
    return pos;
}

mp.events.add("playerJoin", (player) => {
    player.vspawner_Vehicle = null;
});

mp.events.add("playerQuit", (player) => {
    if (player.vspawner_Vehicle) player.vspawner_Vehicle.destroy();
});

mp.events.add("vspawner_Spawn", (player, vehicle) => {
    let position = xyInFrontOfPos(player.position, player.heading, 3.0);

    if (player.vspawner_Vehicle) {
        player.vspawner_Vehicle.repair();
        player.vspawner_Vehicle.position = position;
        player.vspawner_Vehicle.model = mp.joaat(vehicle);
        player.vspawner_Vehicle.dimension = player.dimension;
    } else {
        player.vspawner_Vehicle = mp.vehicles.new(mp.joaat(vehicle), position, {heading: player.heading, numberPlate: player.name, dimension: player.dimension});
    }
});

mp.events.addCommand("veh", (player, fullText, car, color, color2) => {
    let position = xyInFrontOfPos(player.position, player.heading, 3.0);
    var carHash = mp.joaat(car);
    
        var theVehicle = mp.vehicles.new(carHash, position, {heading: player.heading, numberPlate:"Kaniggel", dimension: player.dimension});
        theVehicle.setColor(parseInt(color),parseInt(color2));

});