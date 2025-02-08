import Settings from "../../config"

// auto pb opener

register("chat", (message, event) => {
    if (!Settings.potions) return
    ChatLib.command("pb")
    ChatLib.chat("&8[&bSaturn&8]  &aopend your posion bag")
}).setCriteria("&r&aStarting in 4 seconds.&r")

//  pearl gfs

register("chat", (message, event) => {
    if (!Settings.pearl) return

    let amount = Player.getInventory().getStackInSlot(2).getStackSize();
    let needed = 16 - amount;

    if (amount == 16) {
        ChatLib.chat("&8[&bSaturn&8]  &ayou have 16 ender pearls.");
    } else {
    ChatLib.command(`gfs ender_pearl ${needed}`);
    ChatLib.chat(`&8[&bSaturn&8]  &a+ &a${needed} ender pearls.`);
}
}).setCriteria("&r&aStarting in 2 seconds.&r");
