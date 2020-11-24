const Discord = require("discord.js");
const { crearDB } = require('megadb')
exports.run = async (client, message, args, prefix, color, cmd) => {

  const mencionado = message.mentions.users.first();
   if (!mencionado) return message.reply("No ha mencionando a ningún miembro.");
    let texto = args.slice(1).join(" ");
     if (!texto) return message.channel.send(`Escriba el contenido a enviar.`);
      client.users.cache.get(mencionado.id).send(texto).then(m => {
       message.react("✅")})
     }
exports.command = {
  name: "send",
  aliases: ["enviar"],
  enabled: true,
  categoria: "dev",
  ejemplo: "Template example for commands",
  descripcion: "Permanently",
  uso: "a"
};
