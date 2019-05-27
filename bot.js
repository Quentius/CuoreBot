const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTgxNDQ1NTU1OTc3MTkxNDI4.XOfXfQ.JGIrZyl7aYlqzvCWZKNDo6xqc8o';

const PREFIX =  'c/';

bot.on('ready', () => {
    console.log('This bot is online!');
})

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");
        switch(args[0]) {
            case 'clear':
                if(!message.member.roles.find(r => r.name === "Moderator")) return message.channel.send("You do not have permissions")
                    if(!args[1])  return message.reply('Error please define second arg')
                    message.channel.bulkDelete(args[1]);
                    break;
             case 'teams':
                if(!message.member.roles.find(r => r.name === "Moderator")) return message.channel.send("You do not have permissions")
                       const nlg = new  Discord.RichEmbed()
                    .setTitle('Team name: No Limits Gaming')
                    .addField('Nationality', 'Europe')
                    .addField('Captains Discord', "@Nick[Ninja]#5302")
                    .addField('Captains Uplay', 'Ninja.NLG')
                    .setColor(0xFF7400)
                    message.channel.sendEmbed(nlg);

                    const da = new  Discord.RichEmbed()
                    .setTitle('Team name: Dark Assassins')
                    .addField('Nationality', 'Europe')
                    .addField('Captains Discord', "@gouldyoldy.DAS#2127 ")                
                    .addField('Captains Uplay', 'Gouldyoldy.DAS')
                    .setColor(0x001FFF)
                    message.channel.sendEmbed(da);
                    const tpg1 = new  Discord.RichEmbed()
                    .setTitle('Team name: The Problem Gods[1]')
                    .addField('Nationality', 'Hungary')
                    .addField('Captains Discord', "@[TPG]Ader#8140")                
                    .addField('Captains Uplay', 'TPG_xDxRLxRD')
                    .setColor(0xFFF000)
                    message.channel.sendEmbed(tpg1);
                    const tpg2 = new  Discord.RichEmbed()
                    .setTitle('Team name: The Problem Gods[2]')
                    .addField('Nationality', 'Hungary')
                    .addField('Captains Discord', "@Jarnekem#6116")                
                    .addField('Captains Uplay', 'TPG_Jarnekem')
                    .setColor(0x9F0E0E)
                    message.channel.sendEmbed(tpg2);
                    const bf = new  Discord.RichEmbed()
                    .setTitle('Team name: Burning Foxes')
                    .addField('Nationality', 'Europe')
                    .addField('Captains Discord', "@Fishy#2425")                
                    .addField('Captains Uplay', 'Fishy.Arion')
                    .setColor(0xCC1C79)
                    message.channel.sendEmbed(bf);
                    const yag = new  Discord.RichEmbed()
                    .setTitle('Team name: YAG eSports')
                    .addField('Nationality', 'Europe')
                    .addField('Captains Discord', "@Atlas#7445")                
                    .addField('Captains Uplay', 'Atlas.YAG')
                    .setColor(0x12DEA3)
                    message.channel.sendEmbed(yag);
                    const fd = new  Discord.RichEmbed()
                    .setTitle('Team name: For Defenders')
                    .addField('Nationality', 'Europe')
                    .addField('Captains Discord', "@DaBi#0515") 
                    .addField('Captains Uplay', 'Waza..')
                    .setColor(0x2EFF00)
                    message.channel.sendEmbed(fd);
                    const ti = new  Discord.RichEmbed()
                    .setTitle('Team name: Team IntelliGents')
                    .addField('Nationality', 'Europe')
                    .addField('Captains Discord', "@Dr_Klenk#8437") 
                    .addField('Captains Uplay', 'Klenk.iGents')
                    .setColor(0x7C00FF)
                    message.channel.sendEmbed(ti);
                    const edt = new  Discord.RichEmbed()
                    .setTitle('Team name: Evo Dev Team')
                    .addField('Nationality', 'Britisch')
                    .addField('Captains Discord', "@Dicta.Evo#4977") 
                    .addField('Captains Uplay', 'Dicta.Evo')
                    .setColor(0x6968A5)
                    message.channel.sendEmbed(edt);
                    const wp = new  Discord.RichEmbed()
                    .setTitle('Team name: Wasted Potential')
                    .addField('Nationality', 'Britisch')
                    .addField('Captains Discord', "Mufn#4779") 
                    .addField('Captains Uplay', 'Mufn.')
                    .setColor(0x364F36)
                    message.channel.sendEmbed(wp);
                    const ae = new  Discord.RichEmbed()
                    .setTitle('Team name: Affinity eSports')
                    .addField('Nationality', 'Europe')
                   .addField('Captains Discord', "MrBrown#4682") 
                    .addField('Captains Uplay', 'MrBrown.AFF')
                    .setColor(0xF5CBA7)
                    message.channel.sendEmbed(ae);
                    const tf = new Discord.RichEmbed()
                    .setTitle('Team name: Team Focus')
                    .addField('Nationality', 'Hungary')
                    .addField('Captains Discord', '@Atessz$5709')
                    .addField('Captains Uplay', 'R1SK-FOCUS')
                    .setColor(0xD2B4DE)
                    message.channel.sendEmbed(tf);
                    break;
                case 'tinfo':
                    if(!message.member.roles.find(r => r.name === "Moderator")) return message.channel.send("You do not have permissions")
                        message.channel.send({embed: {
                            color: 9291032,
                            title: "Cuore League - Teams:",
                            fields: [
                              { name: "Teams 1-6", value: "NoLimitsGaming\nDarkAssassin's\nTheProblemGods1\nForDefenders\nEvoDevTeam\nAffinityeSports", inline: true},
                              { name: "Teams 7-12", value: "TheProblemGods2\nBurningFoxes\nYAGeSports\nTeamIntelliGents\nWatedPotential\nTeam Focus", inline: true},
                              {name: '_ _', value: '_ _', inline: false},
                              {name: 'There are currently:', value: '12 teams', inline: false}
                            ]
                          }
                        });
            case 'nextseason':
                if(!message.member.roles.find(r => r.name === "Moderator")) return message.channel.send("You do not have permissions")
                    const nextseason = new Discord.RichEmbed()
                    .setTitle('Teams that will join next season:')
                    .addField('Decrypt eSports', 'Captain: Current.Decrypt\nNat: Europe')
                    .addField('FeaR eSports', 'Captain: Pjotter.Fear\nNat: Europe')
                    .setColor(0xEC7063)
                    message.channel.sendEmbed(nextseason);
                    break;     
            
        }
        switch(args[0]) {
            case 'help':
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                    const help = new Discord.RichEmbed()
                    .setTitle('Commands')
                    .addField('c/help', 'Get a list of all commands and their functions')
                    .addField('c/leagueinfo', 'Get a document file with all the information about the League')
                    .addField('c/tinfo', 'See what teams are in the league this season')
                    .addField('c/week', 'See what league week it is, and what teams are playing this week.')
                    .addField('c/discord', 'Get the discord invite link')
                    .addField('c/twitter', 'Get a link to our Twitter page')
                    .addField('c/youtube', 'Get a link to our YouTube page')
                    .addField('c/twitch', 'Get a link to our Twitch page')
                    .addField('c/online', 'See the online time of the bot')
                    .setColor(0x2ECC71)
                    message.channel.sendEmbed(help);
                    break;
            case 'twitter':
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                    message.channel.sendMessage('https://twitter.com/CuoreLeague');
                    break;
            case 'youtube':
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                    message.channel.sendMessage('https://www.youtube.com/channel/UC0MdpWpAxgA3sU2OUo9r-ZA')
                    break;
            case 'twitch':
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                   message.channel.sendMessage('https://www.twitch.tv/cuoreleague')
                   break;
            case 'discord':
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                    message.channel.sendMessage('https://discord.gg/54mmrC3')
                    break;
            case 'week':
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                    const week = new Discord.RichEmbed()
                    .setTitle('Week 0 - CuoreLeague')
                    .addField('Teams that play this week:', 'N/A')
                    .addField('_ _', 'N/A')
                    .addField('Score played matches', 'N/A')
                    .addField('_ _', 'N/A')
                    .addField('Twitch', 'https://www.twitch.tv/cuoreleague')
                    .setColor(0x2ECC71)
                    message.channel.sendEmbed(week);
                    break;
            case 'leagueinfo':
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                    message.channel.sendMessage('In maintenance')
                    break;
            case 'online':
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                    let totalSeconds = (bot.uptime / 1000);
                    let days = Math.floor(totalSeconds / 86400);
                    let hours = Math.floor(totalSeconds / 3600);
                    totalSeconds %= 3600;
                    let minutes = Math.floor(totalSeconds / 60);
                    let seconds = Math.floor(totalSeconds % 60);
                    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
                    const embed = new Discord.RichEmbed()
                    .setTitle('Runtime:')
                    .addField('The bot has been online for:', uptime)
                    .setColor(0xF7FF00)
                    message.channel.sendEmbed(embed);
                    break;
        }
        switch(args[0]){
            case 'esl1':
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                    const esl1 = new Discord.RichEmbed()
                    .setTitle('ESL 1 Setup:')
                    .addField('Coach:', 'LagGrenade.NLG')
                    .addField('IGL:', 'Ninja.NLG')
                    .addField('Main:', 'Friction.NLG, Angor.NLG, Jubiman.NLG, Jimmy.NLG')
                    .addField('Sub:', 'Blacksad.NLG, Blxck.NLG')
                    .setColor(0x0FFEC)
                    message.channel.sendEmbed(esl1);
                    break;
            case 'esl2':
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                   const esl2 = new Discord.RichEmbed()
                    .setTitle('ESL 2 Setup:')
                    .addField('Coach:', 'N/A')
                    .addField('IGL:',  'Ecaron.NLG')
                    .addField('Main:', 'Cha0s.NLG, Reniplay.NLG, R4mbo.NLG, Reklas.NLG')
                    .addField('Sub:', 'ParadoX.NLG, Tim.NLG')
                    .setColor(0xFF0087)
                    message.channel.sendEmbed(esl2);
                    break;
        }
})


bot.login(token);
