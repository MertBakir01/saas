const Discord = require('discord.js')
 
exports.run = async (client ,message, args) =>{

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Yapımcım;")
  .setColor("RANDOM")
  .setDescription(`İşte Havalı Sahibim <@519126074148519939> `)
  message.channel.send(embed)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['yapımcımkim'],
 permLevel: 0
};
 
exports.help = {
 name: 'yapımcım',
 description: 'Yapımcımı Gösterir.',
 usage: '.yapımcım'
};
 
