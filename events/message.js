const Discord = require('discord.js')
const client = new Discord.Client({ partials: ["MESSAGE", "REACTION"] })
const fs = require('fs')
const { crearDB } = require('megadb')
const prefixdb = new crearDB('prefixcache')
let cooldown= new Set();
const antichannels = new crearDB('channels')
const grasa = new crearDB('palabrasgrasa')
module.exports = async (client, message) => { 
  
 if(message.author.bot) return;

  if(!antichannels.tiene(message.guild.id)){
   antichannels.establecer(message.guild.id, [])}
  
  if(!grasa.tiene('asd')){
  grasa.establecer('asd', [":v", "v:", ":'v", "when", "but", "elfa", "papu", ";u", ";v", "pack", ":n", ":u", "beibi"])}
 let ol = await grasa.obtener('asd')
  
let prefix;
 if(prefixdb.tiene(message.guild.id)){
  prefix = await prefixdb.obtener(message.guild.id)
 }else{
  prefix = '.'}
  
  
  client.ssn= n => {
    if (typeof n !=='number') return n
    if (n <= 1e4) return n
    if (n <= 1e3) return (n / 1e3).toFixed(1) + 'K'
    if (n <= 1e9) return (n / 1e6).toFixed(2) + 'M'
}
  
  let j = '`'
  
  if(message.content == `<@!${client.user.id}>`){
    return message.channel.send(``)
  }
  
  if(message.channel.type === "DM") return;
  if(message.author.bot) return;
 
  const replys = [
    "Te imaginas que si.",
    "Estamos en 2020 y  eres de esos que sigue usando el Pacman. Patético.",
    "Aquí no pasó nada gente.",
    "https://media.discordapp.net/attachments/729776527218049096/730811331355213894/image0.jpg",
    "Te imaginas que si.",
    "https://media.discordapp.net/attachments/542271296235372567/734831511156555786/unknown.png"
  ];
  
  let channels_array = await antichannels.obtener(message.guild.id)
  if(ol.some(word => message.content.toLowerCase().includes(word))){
   if(channels_array.includes(message.channel.id)) return;
    if(client.emojis.cache.find(e => e.name === message.content.toLowerCase())) return;
     message.delete({ timeout: 100, reason: `Ha puesto ${message.content.toLowerCase()}`}).catch(err => {
      message.react("❌")})
     return message.reply(replys[Math.floor(Math.random() * (replys.length - 1) + 1)]).then(msg => {
       msg.delete({ timeout: 7000})
     })
  }
  
  if(!message.content.startsWith(prefix)) return
  
  let color = "#d75d56"
  
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();
  let command;
  
   let e = client.emojis.cache.get("742477124513955970")
   let a = client.emojis.cache.get("742477117983424542")
   let n = client.emojis.cache.get("742477132269223952")
   let b = client.emojis.cache.get("742477108898562178")
  
  
    cooldown.add(message.author.id);
    
    setTimeout(() => {
  cooldown.delete(message.author.id);
}, 5000);
  
  if(cmd.length <= 1) return;
     

  
 let olomae = message.author.id
 
  if (client.commands.has(cmd)) {
      command = client.commands.get(cmd);
  } else if (client.aliases.has(cmd)) {
      command = client.commands.get(client.aliases.get(cmd));
  }

  if (command) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${message.author.username} No tienes los permisos para usar esto.`);
  }
  
  try {
    command.run(client, message, args, prefix, color, cmd);
  } catch (e) {
  return;
  }

}