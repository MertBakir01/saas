const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const chrome = new Discord.MessageEmbed()
  .setColor("GOLD")
    .addField("**>>Cu nedir?<<**", "Cu Bakır elementinin kimyasal simgesidir.")
    .addField("**>>Cu kimdir?<<**", "Cu bu botun sahibi olan MertCU'dur yani Echopast'tır.")
    .addField("**>>Neden Cu?<<**", "Cu Echopast'ın soyadıdır. Yani Echopast'ın soyadı Bakır'dır.")
    .addField("------------------------------------", " . ")
  .setFooter("Cu'ya Ananın a-mcığı diyenler VELETTİR")
  message.channel.send(chrome);   //DevTR
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cu"],
  permLevel: 0,
};

exports.help = {
  name: 'cukimdir',
};
