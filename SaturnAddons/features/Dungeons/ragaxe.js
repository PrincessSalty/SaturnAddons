import Settings from "../../config"

let ragAxeTextRenderer = new Text('').setScale(2).setShadow(true).setColor(Renderer.WHITE)

register("chat", (message, event) => {
    if (!Settings.ragaxe) return
    setTimeout(() => {
        ragAxeTextRenderer.setString("&fUse Axe")
        ragAxeTextRenderer.setScale(2)
        ragAxeTextRenderer.draw(500, 100)
    }, 2000)
}).setCriteria("&r&4[BOSS] &r&4&kWither King&r&c: &r&cI no longer wish to fight, but I know that will not stop you.&r")