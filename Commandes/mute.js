const Discord = require('discord.js')
const ms =  require('ms')

module.exports = {
    name: 'mute',
    description: 'Rend un membre muet.',
    permission : Discord.PermissionFlagsBits.ModerateMembers || Discord.PermissionFlagsBits.Administrator,
    dm : false,
    category : "Modération",
    options : [{
        type: 'user',
        name: 'membre',
        description: 'Le membre à rendre muet.',
        required : true,
        autocomplete : false

    }, {
        type: 'string',
        name :'temps',
        description: 'Durée du temps du mute.',
        required : true,
        autocomplete : false
    }, {
        type : 'string',
        name :'raison',
        description : 'Raison du mute.',
        required : false,
        autocomplete : false
    }],

    async run(bot,message, args) {
        let user = args.getUser("membre")
        if (!user) return message.reply("Aucun membre à rendre muet !")
        let member = message.guild.members.cache.get(user.id)
        if (!member) return message.reply("Aucun membre à rendre muet!")

        let time = args.getString("temps")
        if (!time) return message.reply("Aucune durée proposée pour le mute !")
        if(isNaN(ms(time))) return message.reply("Pas le bon format de durée donné !")
        if (ms(time) > 86400000) return message.reply("Le mute ne peut pas durer + de 28 jours.")

        let reason = args.getString("reason")
        if (!reason) reason = "Pas de raison donnée.";

        if(message.user.id === user.id) return message.reply("Tu ne peux pas te mute !")
        if((await message.guild.fetchOwner()).id === user.id) return message.reply("Tu ne peux pas mute le propriétaire du serveur !")
        if(!member.moderatable) return message.reply("Tu ne peux pas mute ce membre !")
        if(message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply("Tu ne peux pas mute ce membre !")
        if(member.isCommunicationDisabled()) return message.reply("Ce membre est déjà mute !")

        try {await user.send(`Tu as été mute du serveur ${message.guild.name} par ${message.user.tag} pendant \`${time}\` pour la raison suivante : \`${reason}\``)} catch (err) {}

        await message.reply(`${message.user.tag} a mute ${user.tag} pendant \`${time}\` pour la raison suivante : \`${reason}\``)

        await member.timeout(ms(time), reason)
    }
}