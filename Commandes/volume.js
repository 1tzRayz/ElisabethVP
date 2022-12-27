const Discord = require('discord.js')


module.exports = {
    name: 'volume',
    description: "Ajuste le volume du bot.",
    permission : 'Aucune',
    dm : false,
    category : "Musique",
    options : [{
        type: 'number',
        name: 'pourcentage',
        description: 'Le pourcentage du volume.',
        required : true,
        autocomplete : false

    }],

    async run(bot, message, args, member) {
        const VoiceChannel = member.voice.channel;
        const embed = new Discord.EmbedBuilder();
        const volume = args.getNumber("pourcentage");
        try {
            if(!VoiceChannel) {
                embed.setColor(bot.color).setDescription("Tu n'es pas dans un salon vocal !");
                return interaction.reply({embeds: [embed]});
            }
    
            if(!member.voice.channelId == message.guild.members.me.voice.channelId) {
                embed.setColor(bot.color).setDescription(`Tu n'es pas dans le même salon vocal que moi ! Je suis actuellement dans le salon <#${guild.members.me.voice.channelId}>`);
                return interaction.reply({embeds: [embed]});
            }

            bot.distube.setVolume(VoiceChannel, volume);
            return message.reply(`Le volume a été ajusté à ${volume}%.`);

        } catch (err) {
            console.log(err);

            embed.setColor("Red").setDescription("Il y a eu un problème.");
            return interaction.reply({embeds : [embed]});
        }
        
    }
}