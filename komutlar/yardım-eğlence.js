const asreaperDiscord = require('discord.js');
const asreaperClient = new asreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = (client, message) => {
 const asreaperEmbed = new asreaperDiscord.MessageEmbed()
  .setColor("GOLD")
 .setAuthor(`${client.user.username} | Eğlence Menüsü.`)
 .setDescription(`
 **${Prefix}yazı-tura** \n-> Yazı Tura atar.
 **${Prefix}kaç-cm** \n-> kaç cm olduğunu gösterir.
 **${Prefix}atatürk** \n-> 1881-193∞.
 **${Prefix}kimlik** \n-> rastgele kimlik oluşturur.
 **${Prefix}evlenme-teklifi** \n-> Hayatının aşkına evlenme teklifi edersin.
 **${Prefix}gay** \n-> Yüzde kaç gay olduğunu gosterir.
 **${Prefix}adamasmaca** \n-> Adam asmaca oynarsınız.
 **${Prefix}wasted** \n-> Etiketlediğinin Kişinin Fotoğrafına Wasted Efekti Uygular.
 **${Prefix}tesyazı** \n-> Ters yazı yazar.
`)
 .setFooter(`Santos Bot`)
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
  name: 'eğlence',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};