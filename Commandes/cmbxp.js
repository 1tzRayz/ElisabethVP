const Discord = require('discord.js')
const Levels = require('discord.js-leveling')

module.exports = {
    name: 'cmbxp',
    description: "Donne le nombre de points d'XP à récupérer afin de passer au niveau demandé.",
    permission : 'Aucune',
    dm : false,
    category : "XP",
    options : [{
        type : "number",
        name: "niveau",
        description :"Niveau à atteindre",
        required : true
    }],

    async run(bot,message, args) {
        let level = args.getNumber("niveau")
        const xpamount = Levels.xpFor(level);

        await message.reply(`Il te faut en tout ${xpamount} points d'xp pour être niveau ${level}`)
    }
}