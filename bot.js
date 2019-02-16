const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("546426896314007552")
setInterval(function() {
channel.send( Mr3aBooDyy ~ Welcome To Hell ^_^ );
}, 30)
})

client.login(process.env.BOT_TOKEN);
