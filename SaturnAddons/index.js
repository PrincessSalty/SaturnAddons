import "./features/Dungeons/autoDoThings"
import "./features/Dungeons/ragaxe"
import "./features/Dungeons/timeToCore"
import "./features/Dungeons/termtime"
import "./features/Dungeons/runsplits"
import "./features/Dungeons/etherwarp"
import "./features/Dungeons/leap"
import "./features/Dungeons/melody"


// advancements
import "./features/advancements/advancement"

// gui
import Settings from "./config"

register("command", () => {
    Settings.openGUI()
}).setName("sat");