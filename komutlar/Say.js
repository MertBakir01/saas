const Discord = require("discord.js");
const moment = require("moment");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, params) => {
  
  if (!message.guild) {
    
  const ozelmesajuyari = new Discord.MessageEmbed()
  
  .setColor("RED") //`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField("Uyarı","Bu Komutu Özel Mesajlarda Kullanamazsın!");
    
  return message.author.send(ozelmesajuyari);
  }
  
  if (message.channel.type !== "dm") {
    
  const guild = message.guild.id
  
  const sunucubilgi = new Discord.MessageEmbed()
    
  .setColor("GREEN")
    
  .setAuthor(message.guild.name, message.guild.iconURL)
    
  .addField("Sunucu Sahibi", message.guild.owner)
  .addField('Sunucu İsmi', message.guild.name)
  .addField('Sunucu İdsi', message.guild.id)
  .addField('Sunucu Bölgesi', message.guild.region)
  .addField('Üye Sayısı', message.guild.memberCount)
  .addField('Oluşturma tarihi:', message.guild.createdAt, true)
  
  .setThumbnail(message.guild.iconURL);
    
  return message.channel.send(sunucubilgi)
  }
  
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["say"],
  permLevel: 0
};

exports.help = {
  name: "say",
  description: "Kinda Code & Only V12",
  usage: "say"
};
   