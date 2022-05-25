const asreaperDiscord = require('discord.js');
const asreaperClient = new asreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const asreaperEmbed = new asreaperDiscord.MessageEmbed()
  .setColor("GOLD")
 .setAuthor(`${client.user.username} | Moderasyon Yardım Menüsü`)
 .setDescription(`
 **${prefix}say** \n-> Sunucu bilgilerini gösterir.
 **${prefix}oylama** \n-> Oylama yapar.
 **${prefix}otorol-ayarla @rol #kanal** \n-> Otorol ayarlar.
**${prefix}otorol-sıfırla** \n-> Otorol sıfırlar.
 **${prefix}otorol-mesaj-ayarla** \n-> Otorol mesajı ayarlar.
 **${prefix}otorol-mesaj-sıfırla** \n-> Otorol mesajı sıfırlar.
 **${prefix}geçiciodakur** \n-> Geçici oda kurar.
 **${prefix}geçiciodasil** \n-> Geçici olarak kurulan odayı siler.
`)
 .setImage("")
 message.channel.send(asreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['"mod2" , "moderasyon 2" , "moderasyon-2" '],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'moderasyon2',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};