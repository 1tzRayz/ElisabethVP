const loadSlashCommands = require("../Loaders/loadSlashCommands")
const mangoose = require("mongoose")
const levels = require("discord.js-leveling")

module.exports = async bot => {
    await loadSlashCommands(bot)

    await mangoose.connect(bot.db || "", {
        keepAlive : true,
    });

    if (mangoose.connect) {
        console.log("La connexion à la base de donnée à été faite !")
    }

    levels.setURL(bot.db);

    console.log("ElisabethUpdater est en ligne !")
}