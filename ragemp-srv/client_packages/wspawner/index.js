
const weapons = require("wspawner/weaponHashes");
const NativeUI = require("nativeui");
const Menu = NativeUI.Menu;
const UIMenuItem = NativeUI.UIMenuItem;
const UIMenuListItem = NativeUI.UIMenuListItem;
const Point = NativeUI.Point;
const ItemsCollection = NativeUI.ItemsCollection;
const Color = NativeUI.Color;
const ListItem = NativeUI.ListItem;

mp.gui.cursor.visible = false;
mp.gui.chat.show(false);
for (let i = 0; i < weapons.length; i++) {
    const ui = new Menu("Test UI", "Test UI Subtitle", new Point(50, 50));
ui.AddItem(new UIMenuListItem(
	weapons[i],
	"Weapon Name:",
));
}
ui.ItemSelect.on(item => {
	if (item instanceof UIMenuListItem) {
		console.log(item.SelectedItem.DisplayText, item.SelectedItem.Data);
	} else if (item instanceof UIMenuSliderItem) {
		console.log(item.Text, item.Index, item.IndexToItem(item.Index));
	} else {
		console.log(item.Text);
	}
});

// ui.SliderChange.on((item, index, value) => {
// 	console.log(item.Text, index, value);
// });

mp.keys.bind(0x71, false, () => {
	if (ui.Visible) ui.Close();
	else ui.Open();
});