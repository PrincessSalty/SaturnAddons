import Settings from "../../config"

let timeToCore = 0
let playerName = Player.getName()
let inP3 = false
let finalTimeToCore = 0


register("chat", (message, event) => {
    inP3 = true
}).setCriteria("&r&4[BOSS] Goldor&r&c: &r&cWho dares trespass into my domain?&r")


const xCoreCoord = [51, 52, 53, 54, 55, 56, 57]
const yCoreCoord = [115, 116]
const zCoreCoord = [56]


register("chat", (message, event) => {
    timeToCore = Date.now()
}).setCriteria("&r&aThe Core entrance is opening!&r")

register("tick", () => {
    if (!Settings.timeToCore) return
    if (inP3 == true) {
        
        let xPositionPlayer = Math.round(Player.getX())
        let yPositionPlayer = Math.round(Player.getY())
        let zPositionPlayer = Math.round(Player.getZ())
    
        if (xCoreCoord.includes(xPositionPlayer) && yCoreCoord.includes(yPositionPlayer) && zCoreCoord.includes(zPositionPlayer)) {
            finalTimeToCore = (Date.now() - timeToCore) / 1000
            ChatLib.chat(`&8[&6Saturn&8]  &b${playerName} &amade it to core in &l${(finalTimeToCore).toFixed(3)}`)
        
            inP3 = false
            timeToCore = 0
            finalTimeToCore = 0
        
        }
    }
})

register("worldUnload", () => {
    timeToCore = 0
})