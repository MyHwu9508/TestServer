const NativeUI = require("nativeui");
const Menu = NativeUI.Menu;
const UIMenuItem = NativeUI.UIMenuItem;
const Point = NativeUI.Point;

const weapons = require("wspawner/weaponHashes");
const categoryTitles = ["melee", "handguns", "smg", "shotguns", "assault_rifles", "machine_guns", "sniper_rifles", "heavy_weapons", "throwables", "misc"];

// main menu
let mainMenu = new Menu("Weapon Spawner", "", new Point(950, 300));
mainMenu.Visible = false;

mainMenu.ItemSelect.on((item, index) => {
    mainMenu.Visible = false;
    curCategory = index;
    categoryMenus[index].Visible = true;
    transition = true;
});

let categoryMenus = [];
let curCategory = -1;
let transition = false;

// categories
for (let i = 0; i < categoryTitles.length; i++) {
    mainMenu.AddItem(new UIMenuItem(categoryTitles[i], ""));

    let categoryMenu = new Menu(categoryTitles[i], "", new Point(950, 300));
    categoryMenu.Visible = false;

    categoryMenu.ItemSelect.on((item, index) => {
        if (!transition) mp.events.callRemote("wspawner_Spawn", item.Text);
        transition = false;
    });

    categoryMenu.MenuClose.on(() => {
        curCategory = -1;
        mainMenu.Visible = true;
    });

    categoryMenus.push(categoryMenu);
}

// weapons


// f4 key - toggle menu visibility
mp.keys.bind(0x71, false, () => {
    if (curCategory > -1) {
        categoryMenus[curCategory].Visible = !categoryMenus[curCategory].Visible;
    } else {
        mainMenu.Visible = !mainMenu.Visible;
    }
});