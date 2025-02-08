import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, Color } from 'Vigilance';


@Vigilant("SaturnAddons")
class Settings {
    @SwitchProperty({
        name: "open potionbag",
        description: "open's potion bag at the start of a dungeons",
        category: "Dungeons",
        subcategory: "start dungeon"
    })
    potions = false;

    @SwitchProperty({
        name: "enderpearls",
        description: "gives enderpearls at the start of a dungeon",
        category: "Dungeons",
        subcategory: "start dungeon"
    })
    pearl = true;

    @SwitchProperty({
        name: "boss spilts",
        description: "",
        category: "Dungeons",
        subcategory: "boss"
    })
    bossSplits = true;

    @SwitchProperty({
        name: "terminal time",
        description: "shows how much each term took",
        category: "Dungeons",
        subcategory: "boss"
    })
    terminalTime = true;

    @SwitchProperty({
        name: "time to core",
        description: "shows you how long it takes for you to get to the core",
        category: "Dungeons",
        subcategory: "boss"
    })
    timeToCore = true;

    @SwitchProperty({
        name: "leap announce",
        description: "says in chat to who you leaped",
        category: "Dungeons",
        subcategory: ""
    })
    leap = true;

    @SwitchProperty({
        name: "melody announce",
        description: "render's who has melody on screen",
        category: "Dungeons",
        subcategory: "boss"
    })
    melody = true;

    @SwitchProperty({
        name: "rag axe",
        description: "shows you when to use rag axe",
        category: "Dungeons",
        subcategory: "boss"
    })
    ragaxe = true;

    @SwitchProperty({
        name: "runsplits",
        description: "shows you run splits",
        category: "Dungeons",
        subcategory: "boss"
    })
    runsplits = true;

    
    constructor() {
        this.initialize(this)
    }
}

export default new Settings();