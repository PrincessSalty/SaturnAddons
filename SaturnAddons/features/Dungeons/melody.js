import Settings from "../../config"

let melodyText = new Text('').setScale(2).setShadow(true).setColor(Renderer.WHITE)

register("chat", (message, event, Player) => {
    if (!Settings.melody) return
    if (message.includes("melody")) {
        setTimeout(() => {
            melodyText.setString(`&e${Player} has melody`)
            melodyText.setScale(3)
            melodyText.draw(500, Renderer.screen.getHeight() * 0.33)
        }, 2000)
    }
}).setCriteria("Part >> ${Player}: ${message}")