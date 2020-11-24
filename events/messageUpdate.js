const { crearDB } = require('megadb')
const prefixdb = new crearDB('prefixcache')
let cooldown= new Set();
const antichannels = new crearDB('channels')
const grasa = new crearDB('palabrasgrasa')
module.exports = async (client, oldMessage, newMessage) => { 
  
  if(!grasa.tiene('asd')){
  grasa.establecer('asd', [":v", "v:", ":'v", "when", "but", "elfa", "papu", ";u", ";v", "pack", ":n", ":u", "beibi"])}
 let ol = await grasa.obtener('asd')
  
 const replys = [
    "Te imaginas que si.",
    "Estamos en 2020 y  eres de esos que sigue usando el Pacman. Patético.",
    "Aquí no pasó nada gente.",
    "https://media.discordapp.net/attachments/729776527218049096/730811331355213894/image0.jpg",
    "Te imaginas que si.",
    "https://media.discordapp.net/attachments/542271296235372567/734831511156555786/unknown.png"
  ];
 
  let channels_array = await antichannels.obtener(newMessage.guild.id)
  if(ol.some(word => newMessage.content.toLowerCase().includes(word))){
   if(channels_array.includes(newMessage.channel.id)) return;
    const regex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gmi
    if(newMessage.guild.emojis.cache.find(e => e.name === newMessage.content.toLowerCase())) return;
     newMessage.delete({ timeout: 100, reason: `Ha puesto ${newMessage.content.toLowerCase()}`}).catch(err => {
      newMessage.react("❌")})
     return newMessage.reply(replys[Math.floor(Math.random() * (replys.length - 1) + 1)]).then(msg => {
       msg.delete({ timeout: 7000})
     })
  }
  
}