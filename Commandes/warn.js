const Discord = require('discord.js')

module.exports = {
    name: 'warn',
    description: 'Donne un avertissement à un membre.',
    permission : Discord.PermissionFlagsBits.ManageMessages || Discord.PermissionFlagsBits.Administrator,
    dm : false,
    category : "Modération",
    options : [ {
        type : 'user',
        name : 'membre',
        description : "Membre qui reçoit l'avertissement.",
        required : true,
        autocomplete : false
        
    },{
        type : 'string',
        name : 'raison',
        description : "La raison de l'avertissement.",
        required : true,
        autocomplete : false
    }],

    async run(bot,message, args, db) {

        let user = args.getUser("membre")
        if(!user) return message.reply("Le membre n'existe pas.")
        let member = message.guild.members.cache.get(user.id)
        if(!member) return message.reply("Le membre n'existe pas.")

        let reason = args.getString("raison")
        if(!reason) return message.reply("La raison de l'avertissement n'a pas été donnée")

        if(message.user.id === user.id) return message.reply("Tu ne peux pas te warn !")
        if((await message.guild.fetchOwner()).id === user.id) return message.reply("Tu ne peux pas warn le propriétaire du serveur !")
        if(message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply("Tu ne peux pas warn ce membre !")
        if((await message.guild.members.fetchMe()).roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply("Je ne peux pas warn ce membre !")

        try {await user.send(`Tu as reçu un avertissement sur le serveur serveur ${message.guild.name} par ${message.user.tag} pour la raison suivante : \`${reason}\``)} catch (err) {}

        await message.reply(`Vous avez averti le membre ${user.tag} pour la raison suivante : \`${reason}\` avec succès !`)

        let ID = await bot.function.createId("WARN")

        await bot.channels.cache.get("1056619312636502056").send({content: `Utilisateur : \`${user.tag}\` WarnID : \`${ID}\` raison : \`${reason}\``});
    }}