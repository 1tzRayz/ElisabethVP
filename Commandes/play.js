const Discord = require('discord.js')


module.exports = {
    name: 'play',
    description: "Joue une musique à partir d'une URL ou d'un titre.",
    permission : 'Aucune',
    dm : false,
    category : "Musique",
    options : [{
        type: 'string',
        name: 'musique',
        description: "L'url ou le nom de la musique à jouer",
        required : true,
        autocomplete : false

    }],

    async run(bot, message, args, member, channel) {
        const VoiceChannel = message.guild.channels.cache.get(message.member.voiceChannel.id);
        const query = options.getString("musique");
        const embed = new Discord.EmbedBuilder();
        try {
            if(!VoiceChannel) {
                embed.setColor(bot.color).setDescription("Tu n'es pas dans un salon vocal !");
                return interaction.reply({embeds: [embed]});
            }
    
            if(!VoiceChannel == message.guild.members.me.voiceChannel.id) {
                embed.setColor(bot.color).setDescription(`Tu n'es pas dans le même salon vocal que moi ! Je suis actuellement dans le salon <#${guild.members.me.voice.channelId}>`);
                return interaction.reply({embeds: [embed]});
            }

            bot.distube.play(VoiceChannel, query, {textChannel : channel, member : member});
            return message.reply(`La musique à été ajoutée à la liste d'attente.`);

        } catch (err) {
            console.log(err);

            embed.setColor("Red").setDescription("Il y a eu un problème.");
            return interaction.reply({embeds : [embed]});
        }
        
    }
}