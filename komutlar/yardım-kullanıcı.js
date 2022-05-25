const asreaperDiscord = require('discord.js');
const asreaperClient = new asreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const asreaperEmbed = new asreaperDiscord.MessageEmbed()
  .setColor("GOLD")
 .setAuthor(`${client.user.username} | Kullanıcı Yardım Menüsü`)
 .setDescription(`
 **.davet** \n-> Botu davet edersiniz.
 **.shardbilgi** \n-> Botun shard bilgilerini gösterir.
 **.pp** \n-> Etiketlediğiniz kişinin avatarını gösterir.
 **.öneri** \n-> Bota öneri belirtirsiniz.
 **.istatistik** \n-> Botun istatistiğini gösterir.
 **.sonmesaj** \n-> Yazdığınız son mesajı gösterir.
 **.afk <sebep>** \n-> Afk olduğunu belirtir.
 **.kullanıcıbilgi** \n-> Kullanıcı bilgilerini gösterir.
 **.bug-bildir** \n-> Yöneticime bug bildirirsiniz.
 **.yapımcım** \n-> Yapımcımı Gösterir.
 **.winorwin** \n-> Sponsorumu Gösterir
`)
 .setTimestamp()
 .setImage("")
 message.channel.send(asreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};