const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const chrome = new Discord.MessageEmbed()
  .setTitle("Satın Alma Linkleri Altta Belirtilmiştir")
  .setColor("GOLD")
    .addField("» **Papara numarası;**", "1832790904 , Muhammet Mert Bakır")
    .addField("**» Daha fazla bilgi için,**", " [Sunucumuza Katıl](https://discord.gg/SWY3nVta4e)", )
  .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
  .setImage("https://c.tenor.com/YjPBups7H48AAAAS/6m-rain.gif")
  message.channel.send(chrome);  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["satın-al"],
  permLevel: 0,
};

exports.help = {name: 'satınal'}
