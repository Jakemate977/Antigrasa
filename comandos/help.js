 const Discord = require("discord.js");
const { crearDB } = require('megadb')
exports.run = async (client, message, args, prefix, color, cmd) => {
 const embed = new Discord.MessageEmbed()
  .setAuthor("Anti-Grasa", "https://cdn.discordapp.com/avatars/726760333141606490/e53636dcdfc02c9e1f7db35bc657677b.webp?size=1024")
   .setDescription("¡Hola! Soy el Anti-Grasa Bot, estoy aquí para evitar la grasa en tu servidor. Una vez que me has metido en tu servidor, ya lo estás protegiendo de la grasa, y aunque tenga pocos comandos, puedo serte de utilidad.\n\nSi necesitas ayuda unete a nuestro servidor de [Soporte](https://discord.gg/mvjFUyA).")
    .addField("📃 Extra", '``'+client.commands.filter(x => x.command.categoria === 'stuff').map(x => x.command.name).join(` | `)+'``')
     .addField("⚙️ Utilidad", '``'+client.commands.filter(x => x.command.categoria === 'util').map(x => x.command.name).join(` | `)+'``')
    .setColor(color)
   message.channel.send(embed)
 
 
     }
exports.command = {
  name: "help",
  aliases: ["comandos", "ayuda", "info"],
  enabled: true,
  categoria: "stuff",
  ejemplo: "Template example for commands",
  descripcion: "Permanently",
  uso: "a"
};
