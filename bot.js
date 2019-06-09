const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    
    if (message.content === 'c/teams') {
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
                    .addField('Captains Discord', "Vetro#4641")                
                    .addField('Captains Uplay', 'Vetro.BFoxes')
                    .setColor(0xCC1C79)
                    message.channel.sendEmbed(bf);
                    const hon = new  Discord.RichEmbed()
                    .setTitle('Team name: Dynasty eSports')
                    .addField('Nationality', 'Europe')
                    .addField('Captains Discord', "Fayad#6534")                
                    .addField('Captains Uplay', 'Julien.DYN')
                    .setColor(0x12DEA3)
                    message.channel.sendEmbed(hon);
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
                    .addField('Nationality', 'British')
                    .addField('Captains Discord', "@Dicta.Evo#4977") 
                    .addField('Captains Uplay', 'Dicta.Evo')
                    .setColor(0x6968A5)
                    message.channel.sendEmbed(edt);
                    const wp = new  Discord.RichEmbed()
                    .setTitle('Team name: Wasted Potential')
                    .addField('Nationality', 'British')
                    .addField('Captains Discord', "Mufn#4779") 
                    .addField('Captains Uplay', 'Mufn.WP')
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
                    .setTitle('Team name: FeaR')
                    .addField('Nationality', 'Europe')
                    .addField('Captains Discord', '@PjotterSmokes#8310 ')
                    .addField('Captains Uplay', 'Pjotter.FeaR')
                    .setColor(0xD2B4DE)
                    message.channel.sendEmbed(tf);
  	}
    if (message.content === 'c/tinfo') {
                    if(!message.member.roles.find(r => r.name === "Moderator")) return message.channel.send("You do not have permissions")
                        message.channel.send({embed: {
                            color: 9291032,
                            title: "Cuore League - Teams:",
                            fields: [
                              { name: "Teams 1-6", value: "NoLimitsGaming\nDarkAssassin's\nTheProblemGods1\nForDefenders\nEvoDevTeam\nAffinityeSports", inline: true},
                              { name: "Teams 7-12", value: "TheProblemGods2\nBurningFoxes\nYDynastyeSports\nTeamIntelliGents\nWastedPotential\nFeaR eSports", inline: true},
                              {name: '_ _', value: '_ _', inline: false},
                              {name: 'There are currently:', value: '12 teams', inline: false}
                            ]
                          }
                        })
    }
    if (message.content === 'c/nextseason') {
                if(!message.member.roles.find(r => r.name === "Moderator")) return message.channel.send("You do not have permissions")
                    const nextseason = new Discord.RichEmbed()
                    .setTitle('Teams that will join next season:')
                    .setColor(0xEC7063)
                    message.channel.sendEmbed(nextseason);
    }
    if (message.content === 'c/help') {
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
    }
    if (message.content === 'c/twitter') {
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                    message.channel.sendMessage('https://twitter.com/CuoreLeague');
    }
    if (message.content === 'c/youtube') {
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                    message.channel.sendMessage('https://www.youtube.com/channel/UC0MdpWpAxgA3sU2OUo9r-ZA')
    }
    if (message.content === 'c/twitch') {
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                   message.channel.sendMessage('https://www.twitch.tv/cuoreleague')
    }
    if (message.content === 'c/discord') {
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                    message.channel.sendMessage('https://discord.gg/54mmrC3')
    }
    if (message.content === 'c/week') {
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                    message.channel.send({embed: {
                            color: 2491032,
                            title: "Week 1 - 8 & 9 June - CuoreLeague",
                            fields: [
                                //Saturday
                              { name: "Teams that play saturday:", value: "DA - NLG", inline: true},
                              { name: "Time", value: "19:00", inline: true},
                              { name: 'Score:', value: '4-7', inline: true},
                              //Sunday
                              { name: "Teams that play sunday", value: "BF - WP\nDYN - EDT\nCM - TI", inline: true},
                              { name: "Time", value: "19:00\n20:15\n21:30", inline: true},
                              { name: 'Score:', value: '7-2\n7-4\n0-1', inline: true},
                              //Monday if needed
                              { name: "Teams that play monday", value: "TPG2 - AE", inline: true},
                              { name: "Time", value: "20:00", inline: true},
                              { name: 'Score:', value: 'N/A', inline: true},
                              //Tuesday if needed
                              { name: "Teams that play tuesday", value: "TPG1 - FeaR", inline: true},
                              { name: "Time", value: "20:00", inline: true},
                              { name: 'Score:', value: 'N/A', inline: true},
                              { name: 'Twitch:', value: "https://www.twitch.tv/cuoreleague", inline: false}
                            ]
                          }
                        });
    }
    if (message.content === 'c/leagueinfo') {
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                    message.channel.sendMessage('In maintenance')
    }
    if (message.content === 'c/online') {
                if(!message.member.roles.find(r => r.name === "Guest")) return message.channel.send("You do not have permissions")
                    let totalSeconds = (client.uptime / 1000);
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
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
