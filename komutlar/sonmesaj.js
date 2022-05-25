const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
  
  const embed = new Discord.MessageEmbed()
  .setColor ("RANDOM")
  .setDescription(".sonmesaj")
  message.channel.send(embed);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sonmesajım"], 
  permLevel: 0 
};

exports.help = {
  name: "sonmesaj", 
  description: "son mesajını gösterir.", 
  usage: ".sonmesaj" 
};
