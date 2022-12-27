const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    description: 'Renvoie le ping du bot.',
    permission : 'Aucune',
    dm : true,
    category : "Informations",

    async run(bot,message, args) {
        await message.reply(`Ping d'Elisabeth : \`${bot.ws.ping}\`ms`)
    }
}