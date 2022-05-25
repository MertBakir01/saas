const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
  
  const embed = new Discord.MessageEmbed()
  
  .setColor ("RANDOM")
  .setDescription("Dünyanın En Taşşaklı Dolandırıcısı <@344906007887216640>")
  message.channel.send(embed);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dolandırıcı", "dolandırıcı kim", "dolandırıcıkim?"], 
  permLevel: 0 
};

exports.help = {
  name: "dolandırıcıkim", 
  description: "En büyük dolandırıcıyı gösterir.", 
  usage: ".dolandırıcıkim" 
};
