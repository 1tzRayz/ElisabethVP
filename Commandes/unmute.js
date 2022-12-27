const Discord = require('discord.js')

module.exports = {
    name: 'unmute',
    description: "Retire le mute d'un membre.",
    permission : Discord.PermissionFlagsBits.ModerateMembers || Discord.PermissionFlagsBits.Administrator,
    dm : false,
    category : "Modération",
    options : [{
        type: 'user',
        name: 'membre',
        description: 'Le membre à unmute.',
        required : true,
        autocomplete : false

    }, {
        type : 'string',
        name :'raison',
        description : "Raison de l'unmute.",
        required : false,
        autocomplete : false
    }],

    async run(bot,message, args) {
        let user = args.getUser("membre")
        if (!user) return message.reply("Aucun membre à unmute !")
        let member = message.guild.members.cache.get(user.id)
        if (!member) return message.reply("Aucun membre à unmute!");

        let reason = args.getString("reason")
        if (!reason) reason = "Pas de raison donnée.";

        if(!member.moderatable) return message.reply("Je ne peux pas unmute ce membre !")
        if(message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply("Tu ne peux pas unmute ce membre !")
        if(!member.isCommunicationDisabled()) return message.reply("Ce membre n'est pas mute !")

        try {await user.send(`Tu as été unmute du serveur ${message.guild.name} par ${message.user.tag} pour la raison suivante : \`${reason}\``)} catch (err) {}

        await message.reply(`${message.user.tag} a unmute ${user.tag} pour la raison suivante : \`${reason}\``)

        await member.timeout(null, reason)
    }
}