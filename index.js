const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require("./Loaders/loadCommands")
const loadEvents = require("./Loaders/loadEvents")
const config = require("./config.js")

const { DisTube } = require('distube')
const { SpotifyPlugin } = require('@distube/spotify')

bot.db = config.DatabaseURL
bot.commands = new Discord.Collection()
bot.color = "#990100"
bot.function = {
    createId : require("./Fonctions/createId")
}

bot.Distube = new DisTube(bot, {
    emitNewSongOnly : true,
    leaveOnFinish: false,
    emitAddSongWhenCreatingQueue : false,
    plugins : [new SpotifyPlugin()]
});

bot.login(config.Token)
loadCommands(bot)
loadEvents(bot)
module.exports = bot
