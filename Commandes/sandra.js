const Discord = require('discord.js')

module.exports = {
    name: 'sandra',
    description: "Nous parle d'Alcina.",
    permission : 'Aucune',
    dm : false,
    category : "Informations",

    async run(bot,message,args) {
        await message.reply(`Sandra elle est trop belle.`)
    }
}