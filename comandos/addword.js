const Discord = require("discord.js");
const { crearDB } = require('megadb')
const grasa = new crearDB('palabrasgrasa')
exports.run = async (client, message, args, prefix, color, cmd) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${message.author.username} Tu no puedes usar esto`);
 if(!grasa.tiene('asd')){
  grasa.establecer('asd', [":v", "v:", ":'v", "when", "but", "elfa", "papu", ";u", ";v", "pack", ":n", ":u", "beibi"])}
 let ol = await grasa.obtener('asd')
  if(!args[0]) return message.channel.send("Pon la palabra que añadir.")
 if(ol.includes(args[0])) return message.channel.send("Esa palabra ya se encuentra en la lista.")
  message.channel.send("Palabra añadida.")
   grasa.push('asd', args[0])
}
exports.command = {
  name: "addword",
  aliases: ["añadirpalabra"],
  enabled: false,
  categoria: "dev",
  ejemplo: "Template example for commands",
  descripcion: "Permanently",
  uso: "a"
};
