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
   if(channels_array.includes(message.channel.id)) return message.channel.send(":x: `|` Este canal ya fue filtrado para no detectar la **GRASA**.")
  message.channel.send(":white_check_mark: `|` Este canal ha sido añadido al filtro para no detectar la **GRASA**.")
   antichannels.push(message.guild.id, message.channel.id)
  }else{
   if(channels_array.includes(mention.id)) return message.channel.send(`:x: \`\|\`\ ${mention.name} Ya fue filtrado para no detectar la **GRASA**.`)
  message.channel.send(`:white_check_mark: \`\|\`\ ${mention.name} Ha sido añadido al filtro para no detectar **GRASA**.`)
   antichannels.push(message.guild.id, mention.id)
  }  
     }
exports.command = {
  name: "setchannel",
  aliases: ["añadircanal"],
  enabled: true,
  categoria: "util",
  ejemplo: "Template example for commands",
  descripcion: "Permanently",
  uso: "a"
};
