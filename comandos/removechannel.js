const Discord = require("discord.js");
const { crearDB } = require('megadb')
const antichannels = new crearDB('channels')
exports.run = async (client, message, args, prefix, color, cmd) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${message.author.username} Tu no puedes usar esto`);
 if(!antichannels.tiene(message.guild.id)){
   antichannels.establecer(message.guild.id, [])}
  let channels_array = await antichannels.obtener(message.guild.id)
   let mention = message.mentions.channels.first()
  if(!mention){
   if(!channels_array.includes(message.channel.id)) return message.channel.send(":x: `|` Este canal no es filtrado para no detectar la **GRASA**.")
  message.channel.send(":white_check_mark: `|` Este canal ha sido eliminado del filtro para no detectar la **GRASA**.")
   antichannels.extract(message.guild.id, message.channel.id)
  }else{
   if(!channels_array.includes(mention.id)) return message.channel.send(`:x: \`\|\`\ ${mention.name} No es un canal filtrado para no detectar la **GRASA**.`)
  message.channel.send(`:white_check_mark: \`\|\`\ ${mention.name} Ha sido removido del filtro para no detectar **GRASA**.`)
   antichannels.extract(message.guild.id, mention.id)
  }
  
  
  
     }
exports.command = {
  name: "removechannel",
  aliases: ["removercanal"],
  enabled: true,
  categoria: "util",
  ejemplo: "Template example for commands",
  descripcion: "Permanently",
  uso: "a"
};
