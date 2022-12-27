const Discord = require('discord.js')

module.exports = {
    name: 'clear',
    description: 'Supprime un nombre de messages.',
    permission : Discord.PermissionFlagsBits.ManageMessages || Discord.PermissionFlagsBits.Administrator,
    dm : false,
    category : "Modération",
    options : [ {
        type : 'number',
        name : 'nombre',
        description : 'Nombre de messages à supprimer.',
        required : true,
        autocomplete : false
        
    },{
        type : 'channel',
        name : 'salon',
        description : 'Le salon où supprimer les messages.',
        required : false,
        autocomplete : false
    }],

    async run(bot,message, args) {
        let channel = args.getChannel("salon")
        if(!channel) channel = message.channel;
        if(channel.id !== message.channel.id && !message.guild.channels.cache.get(channel.id)) return message.reply("Le salon indiqué n'a pas été trouvé")

        let number = args.getNumber("nombre")
        if(parseInt(number) <= 0 || parseInt(number) > 100 ) return message.reply("Il me faut un nombre compris entre 1 et 100 inclus")

        await message.deaferReply()
        try {
            let messages = await channel.bulkDelete(parseInt(number))

            await message.followUp({content : `${messages.size} message(s) ont été supprimés !`, ephemeral : true})
        } catch (err) {
            let messages = [...(await channel.messages.fetch()).filter(m => !m.interaction && (Date.now() - m.createdAt) <= 1209600000).values()]
            if(messages.length <= 0) return message.reply("Aucun message n'a été supprimé car ils dataient de + de 14 jours !")
            await channel.bulkDelete(messages)

            await message.reply({content : `uniquement ${messages.length} message(s) ont été supprimés car les autres dataient de + de 14 jours !`, ephemeral : true})

        }
    }
}