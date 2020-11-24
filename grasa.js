const Discord = require('discord.js')
const client = new Discord.Client({ partials: ["MESSAGE", "REACTION"] })
const fs = require('fs')
let { readdirSync } = require('fs');
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const config = require("./config.json");

const loadCommands = module.exports.loadCommands = (dir = './comandos/') => {
    fs.readdir(dir, (error, files) => {           
        if (error) return console.log(error);                    

        files.forEach((file) => {   
            if (fs.lstatSync(dir + file).isDirectory()) {
                loadCommands(dir + file + "/");
                return;
            }

            delete require.cache[require.resolve(`${dir}${file}`)];

            let props = require(`${dir}${file}`); 
          
            client.commands.set(props.command.name, props);

            if (props.command.aliases)  props.command.aliases.forEach(alias => { 
                client.aliases.set(alias, props.command.name); 
            });
        });
    });
};

loadCommands()


for(const file of readdirSync('./events/')) { 
  if(file.endsWith(".js")){
    
    let fileName = file.substring(0, file.length - 3);
    let fileContents = require(`./events/${file}`);
client.on(fileName, fileContents.bind(null, client)); 
    
    delete require.cache[require.resolve(`./events/${file}`)]; 
  }
}

client.login(config.token).then(() => {
  
  console.log(`${client.user.tag} Listo.`)
  
});