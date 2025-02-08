import Settings from "../../config"
import data from "../../data"



register("chat", (message, event) => {
    if (!Settings.runsplits) return
    clearTime = Date.now()
}).setCriteria("[NPC] Mort: Here, I found this map when I first entered the dungeon.")

register("chat", (message, event) => {
    bloodTime = (Date.now() - clearTime) / 1000
    if (bloodTime >= 60) {
        let minutes = Math.floor(bloodTime / 60);
        let seconds = (bloodTime % 60).toFixed(3);
        formattedTimeblood = `${minutes}m ${seconds}s`;
    } else {
        formattedTimeblood = `${bloodTime}`
    }

    if (!data['PB']['blood'] || bloodTime < data['PB']['blood']) {
        ChatLib.chat(`&8[&bSaturn&8]  &anew pb on opening &cblood&b: ${formattedTimeblood}.`)
        data['PB']['blood'] = bloodTime
    } else {ChatLib.chat(`&8[&bSaturn&8]  &aopening &cblood &btook ${formattedTimeblood} &7(pb: ${data['PB']['blood']}.`)}
}).setCriteria("The BLOOD DOOR has been opened!")

register("chat", (event, message) => {
    bossentryTime = (Date.now() - clearTime) / 1000
    if (bossentryTime >= 60) {
        let minutes = Math.floor(bossentryTime / 60);
        let seconds = (bossentryTime % 60).toFixed(3);
        formattedTimeboss = `${minutes}m ${seconds}s`;
    } else {
        formattedTimeboss = `${bossentryTime}`;
    }
    ChatLib.chat(`&8[&bSaturn&8]  &bboss &aentry took &b${(formattedTimeboss)}.`)
    if (!Settings.bossSplits) return
    bossTime = Date.now()
}).setCriteria("[BOSS] Maxor: WELL! WELL! WELL! LOOK WHO'S HERE!")

register("chat", (event, message) => {
    timeMaxor = (Date.now() - bossTime) / 1000
    ChatLib.chat(`&8[&bSaturn&8]  &5Maxor &btook &b${(timeMaxor).toFixed(3)}s.`)
}).setCriteria("[BOSS] Storm: Pathetic Maxor, just like expected.")

register("chat", (event, message) => {
    timeStorm = (Date.now() - bossTime) / 1000
    ChatLib.chat(`&8[&bSaturn&8]  &3Storm abtook &b${(timeStorm).toFixed(3)}s.`)
}).setCriteria("[BOSS] Goldor: Who dares trespass into my domain?")

register("chat", (event, message) => {
    timeTerminals = (Date.now() - bossTime) / 1000
    ChatLib.chat(`&8[&bSaturn&8]  &eterminals &btook &b${(timeTerminals).toFixed(3)}s.`)
}).setCriteria("The Core entrance is opening!")

register("chat", (event, message) => {
    timeGoldor = (Date.now() - bossTime) / 1000
    ChatLib.chat(`&8[&bSaturn&8]  &akilling &7Goldor &atook &b${(timeGoldor).toFixed(3)}s.`)
}).setCriteria("[BOSS] Necron: You went further than any human before, congratulations.")

register("chat", (event, message) => {
    timeNecron = (Date.now() - bossTime) / 1000
    ChatLib.chat(`&8[&bSaturn&8]  &6Necron &atook &b${(timeNecron).toFixed(3)}s.`)
}).setCriteria("[BOSS] Necron: All this, for nothing...")

