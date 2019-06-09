const PREFIX = 'c/';
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {   
    let args = message.content.substring(PREFIX.length).split(" ");
        switch(args[0] {
               case 'ping':
                message.reply('pong');
                break;
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
