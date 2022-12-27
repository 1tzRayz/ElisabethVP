const { EmbedBuilder } = require("discord.js")
const Levels = require("discord.js-leveling")


module.exports = async (bot, message) => {
        if (!message.guild || message.author.bot) return;

        const RandXP = Math.floor(Math.random() * 29) +1;
        await Levels.appendXp(message.author.id, message.guild.id, RandXP);

        words = ["pd","pédé"]
        const e = "<:eh:1056612673044873327>" // <:kuromax:1056595197619863582>
        {words.some(w => {if(message.content.includes(w)) message.channel.send(`Qu'ouis-je ? ${e}`)})} 

        if(message.content.includes("discord.gg")) {
                await message.channel.bulkDelete(1), message.channel.send(`${message.author}, tu ne peux pas envoyer de lien discord ici.`)
                let ID = await bot.function.createId("LIEN")
                await bot.channels.cache.get("1056584484365025300").send(`Utilisateur : ${message.author} LienID : \`${ID}\``);
        }          

}
