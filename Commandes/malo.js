const Discord = require('discord.js')

module.exports = {
    name: 'malo',
    description: 'Nous parle de Meiko.',
    permission : 'Aucune',
    dm : false,
    category : "Informations",

    async run(bot,message,args) {
        await message.reply(`Malo il est trop beau.`)
    }
}