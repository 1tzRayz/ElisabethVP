const { EmbedBuilder } = require('discord.js')
const Discord = require('discord.js')

module.exports = async(bot, member) => {
        const welcMsg = `**Bienvenue !** — <@&935167007412875335>`
        const e1 = "<a:bloodp:1056612666799562893>" // serv updater : <a:bloodpotion:1056606474266234930>
        const e2 = "<:knifed:1056612664136171521>" // <:knifed:1056607169648263228>
        const e3 = "<:vlips:1056612675716649032>" // <:vamplips:1056607534909235231>
        const e4 = "<a:exc:933858691239788614>" // <:vamplips:1056607534909235231>
        const ch1 = "<#923874457695703051>" // 1056584484365025300
        const ch2 = "<#943905258822840360>" // 1056584484365025300
        const ch3 = "<#917897378445557770>" // 1056584484365025300

        const welcEmbed = new EmbedBuilder()
        .setTitle("— Bienvenue !")
        .addFields({name : `${e4} Voici quelques endroits à visiter ${e4} :`, value: `${e1} ╭・୨ ${ch1} \n${e2} ┊・୨ ${ch2} \n${e3} ╰・୨ ${ch3}`})
        .setTimestamp()
        .setThumbnail(member.user.displayAvatarURL())
        .setColor(bot.color)

        await bot.channels.cache.get("917896874671878155").send(welcMsg)
        await bot.channels.cache.get("917896874671878155").send({embeds : [welcEmbed]})
    }