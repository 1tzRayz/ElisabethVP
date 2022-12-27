const Discord = require('discord.js')


module.exports = {
    name: 'skip',
    description: "Passe la musique actuellement jouée.",
    permission : 'Aucune',
    dm : false,
    category : "Musique",

    async run(bot, message, args, member, channel) {
        const VoiceChannel = member.voice.channel;
        const embed = new Discord.EmbedBuilder();
        try {
            if(!VoiceChannel) {
                embed.setColor(bot.color).setDescription("Tu n'es pas dans un salon vocal !");
                return interaction.reply({embeds: [embed]});
            }
    
            if(!member.voice.channelId == message.guild.members.me.voice.channelId) {
                embed.setColor(bot.color).setDescription(`Tu n'es pas dans le même salon vocal que moi ! Je suis actuellement dans le salon <#${guild.members.me.voice.channelId}>`);
                return interaction.reply({embeds: [embed]});
            }

            if(!queue) {
                embed.setColor(bot.color).setDescription("Il n'y a pas de file d'attente active.");
                return interaction.reply({embeds : [embed]});
            } 

            await queue.skip(VoiceChannel)
            embed.setColor(bot.color).setDescription("La musique a bien été passée.");

            return message.reply({embeds : [embed]});

        } catch (err) {
            console.log(err);

            embed.setColor("Red").setDescription("Il y a eu un problème.");
            return interaction.reply({embeds : [embed]});
        }
        
    }
}