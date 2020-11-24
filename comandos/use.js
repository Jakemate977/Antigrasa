const Discord = require("discord.js");
const { crearDB } = require('megadb')
  const dbs = require("quick.db");
  const ms = require("parse-ms"); //exacto
exports.run = async (client, message, args, prefix, color, cmd) => {

    
const embed = new Discord.MessageEmbed()

.setAuthor("Anti-Grasa","https://cdn.discordapp.com/avatars/726760333141606490/e53636dcdfc02c9e1f7db35bc657677b.webp?size=1024")
.setTitle("Cómo usar al Anti-Grasa.")
.setDescription("¡Hola! En primer lugar, muchas gracias por usar a nuestro bot Anti-Grasa. Con este embed te voy a mostrar cómo usar al Anti-Grasa en tu servidor. Recuerda que si necesitas más ayuda siempre puedes entrar al servidor de [Soporte](https://discord.gg/mvjFUyA).")
.addField("Paso 1","Al meter al Anti-Grasa a tu servidor, automáticamente el bot ya está en funcionamiento, es decir, ya detecta todos los simbolos de la grasa en todos los canales. El funcionamiento del bot es simple, si alguien pone una de las palabras establecidas como grasa, el bot borra ese mensaje y responde con otro, que es borrado a los 6 segundos. Para saber cuáles son los símbolos de la grasa pregunta en nuestro servidor de soporte.")
.addField("Paso 2","En el caso de que quieras desactivar el fitro de la grasa en algún canal (o algunos), debes poner `.setchannel` en el mismo canal o poner `.setchannel #canal`. Te recomendamos hacer esto en canales de anuncios, alianzas, encuestas, etc.")
.addField("Paso 3","Si deseas volver a activar el filtro de la grasa en algún canal donde lo hayas activado, únicamente debes poner `.removechannel` en el mismo canal o poner `.removechannel #canal`.")
.setFooter("Si necesitas más ayuda entra al servidor de soporte.")
.setColor(color)
message.channel.send(embed)
     }
exports.command = {
  name: "use",
  aliases: ["uso","use"],
  enabled: true,
  categoria: "stuff",
  ejemplo: "Template example for commands",
  descripcion: "Permanently",
  uso: "a"
};
