import Settings from "../../config"

let termTime = 0
let finalTermTime = 0
let finalDevTime = 0 
let finalLeverTime = 0


register("chat", (message, event) => {
    if (!Settings.terminalTime) return
    termTime = Date.now()
}).setCriteria("&r&4[BOSS] Goldor&r&c: &r&cWho dares trespass into my domain?&r")

register("chat", (rankColor, username, order1, order2, event, message) => {
    cancel(event)
    finalTermTime = (Date.now() - termTime) / 1000
    ChatLib.chat(`${rankColor}${username} &aactivated a terminal! (&c${order1}&a/${order2}) &8[&7${(finalTermTime).toFixed(2)}s&8]`)
}).setCriteria("&r${rankColor}${username}&r&a activated a terminal! (${order1}/${order2})&r")

register("chat", (rankColor, username, order1, order2, event, message) => {
    cancel(event)
    finalDevTime = (Date.now() - termTime) / 1000
    ChatLib.chat(`${rankColor}${username} &aactivated a device! (&c${order1}&a/${order2}) &8[&7${(finalDevTime).toFixed(2)}s&8]`)
}).setCriteria("&r${rankColor}${username}&r&a activated a device! (${order1}/${order2})&r")

register("chat", (rankColor, username, order1, order2, event, message) => {
    cancel(event)
    finalLeverTime = (Date.now() - termTime) / 1000
    ChatLib.chat(`${rankColor}${username} &aactivated a lever! (&c${order1}&a/${order2}) &8[&7${(finalLeverTime).toFixed(2)}s&8]`)
}).setCriteria("&r${rankColor}${username}&r&a activated a lever! (${order1}/${order2})&r")