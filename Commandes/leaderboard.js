const Discord = require('discord.js')
const Levels = require("discord.js-leveling")

module.exports = {
    name: 'leaderboard',
    description: "Donne le score d'XP dans l'ordre croissant du serveur.",
    permission : 'Aucune',
    dm : false,
    category : "XP",
    

    async run(bot,message, args) {

        const rawLB = await Levels.fetchLeaderboard(message.guild.id, 10);
        if (rawLB.length < 1) return message.reply("Il n'y a actuellement personne dans le leaderboard.");

        const embed = new Discord.EmbedBuilder();

        const leaderboard = await Levels.computeLeaderboard(bot, rawLB, true);

        const lb = leaderboard.map(e => `**${e.position}** ${e.username}#${e.discriminator}\n**Niveau :** ${e.level} \n **Points d'XP :** ${e.xp.toLocaleString()}`)

        embed.setTitle("Leaderboard").setDescription(lb.join("\n\n")).setTimestamp().setColor(bot.color);

        await message.reply({embeds : [embed]})

    }
}