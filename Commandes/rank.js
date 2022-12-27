const Discord = require('discord.js')
const Levels = require("discord.js-leveling")

module.exports = {
    name: 'rank',
    description: "Donne son rank ou celui d'un membre.",
    permission : 'Aucune',
    dm : false,
    category : "XP",
    options :[ {
        type : "user",
        name : "utilisateur",
        description :"Utilisateur à qui afficher le rank.",
        required : true
    }],

    async run(bot,message, args) {
        const user = args.getUser("utilisateur")
        let member = message.guild.members.cache.get(user.id)

        const levelUser = await Levels.fetch(member.id, message.guild.id);
        const embed = new Discord.EmbedBuilder();

        if(!levelUser) return message.reply("Ce membre ne possède pas de rang !")

        embed.setTitle("Infos XP")
        embed.setDescription(`**${member}** est actuellement au niveau ${levelUser.level} et possède ${levelUser.xp.toLocaleString()} XP.`)
        embed.setColor(bot.color)

        await message.reply({embeds : [embed]})
    }
}