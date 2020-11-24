const Discord = require("discord.js");
const { crearDB } = require('megadb')
const prefixdb = new crearDB('prefixcache')
exports.run = async (client, message, args, prefix, color, cmd) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${message.author.username} Tu no puedes usar esto`);
 if(!prefixdb.tiene(message.guild.id)){
  prefixdb.establecer(message.guild.id, '.')}
   if(!args[0]) return message.channel.send(":x: `|` Por favor escribe un **prefijo** para establecer.")
    if(args[0].length >= 8) return message.channel.send(":x: `|` Por favor escribe un **prefijo** menor a **8** y mayor a **1**.")
    message.channel.send(`✅ \`\|\`\ Nuevo prefijo establecido. **${args[0]}** `)
   prefixdb.establecer(message.guild.id, args[0])
     }
exports.command = {
  name: "base",
  aliases: ["1Template"],
  enabled: true,
  categoria: "dev",
  ejemplo: "Template example for commands",
  descripcion: "Permanently",
  uso: "a"
};
